import { Component, OnInit } from '@angular/core';
import { userObj } from '../interfaces/user';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})

export class RegisterComponent implements OnInit {


userData: userObj;


 
constructor(public dialog: MatDialog) { 
    
this.userData = new userObj();

  
}

openDialog(){this.dialog.open(DialogElementsExampleDialog);confirm('are you sure ?')}
ngOnInit(): void {}

newId(){

  const oldRecord = localStorage.getItem('userList')
  if(oldRecord !==null){
     const userList = JSON.parse(oldRecord);
       return userList.length + 1;
  }else{
    return 1;
  }
}

savedata(){

  const latestId = this.newId()
  this.userData.userId=latestId;
  const oldRecords = localStorage.getItem('userList');
  if(oldRecords !==null){
     const userList = JSON.parse(oldRecords);
      userList.push(this.userData);
      console.log(userList)
       localStorage.setItem('userList',JSON.stringify(userList));
  }else {
      const userArr = [];
      userArr.push(this.userData);
      localStorage.setItem('userList',JSON.stringify(userArr));
    }
//  this.openDialog()
}


}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}