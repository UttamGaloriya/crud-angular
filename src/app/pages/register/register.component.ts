import { Component, Inject, Input, OnInit } from '@angular/core';
import { userObj } from '../interfaces/user';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

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

openDialog(){
  this.dialog.open(DialogElementsExampleDialog),{
    data:"uttam",      }  
}
ngOnInit(): void {


  
}
//new id genrate
newId(){

  const oldRecord = localStorage.getItem('userList')
  if(oldRecord !==null){
     const userList = JSON.parse(oldRecord);
       return userList.length + 1;
  }else{
    return 1;
  }
}

//svae data
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
 this.openDialog()
}


}



@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})


export class DialogElementsExampleDialog {
  @Input() datax:string="uttam";

 
constructor(
public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
  @Inject(MAT_DIALOG_DATA) public data:any) {}

//METHOD FOR CLOSE
  onNoClick(): void {
    this.dialogRef.close();
  }
}