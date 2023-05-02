import { Component, OnInit } from '@angular/core';
import { userObj } from '../interfaces/user';
import {MatDialog} from '@angular/material/dialog';
import { ViewboxComponent } from '../viewbox/viewbox.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: [
  ]
})
export class ViewComponent implements OnInit {
  myname:any ='';
  myemail:any='';
  //  usreData:userObj;

userList: userObj[];
  constructor(public dialog: MatDialog) { 
    //  this.userData = new userObj();
   this.userList = [];
  }

  ngOnInit(): void {
    const records = localStorage.getItem('userList');
    if (records !== null) {
      this.userList = JSON.parse(records);
    }
  }
displayedColumns: string[] = ['No', 'Name', 'City','Gender','Address', 'Email','Action'];
openDialog() {
    this.dialog.open(ViewboxComponent,
      {
  data: {
    name:this.myname,
     myemailadd:this.myemail

  }
}

      )
  
    
  }
  
delete(id:any){
  const oldRecords = localStorage.getItem('userList');



  const records = localStorage.getItem('userList');
    if (records !== null) {
      this.userList = JSON.parse(records);
      console.log(this.userList)
      console.log(this.userList[id].userName)
      let city=this.userList[id].userCity
       this.myemail=this.userList[id].userEmail;
       this.myname=this.userList[id].userName;
    }
    this.openDialog()
//   if(confirm("this data delete")){
// ///

        
  
//     ///
// if (oldRecords !== null) {
//       const userList = JSON.parse(oldRecords);
//       userList.splice(userList.findIndex( (a : any) => a.userId == id), 1);
//       localStorage.setItem('userList', JSON.stringify(userList));
//     }
//     const records = localStorage.getItem('userList');
//     if (records !== null) {
//       this.userList = JSON.parse(records);
//     }}
  
}



}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {
  
}