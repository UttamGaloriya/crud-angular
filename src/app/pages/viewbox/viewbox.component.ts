import { Component, OnInit,Inject } from '@angular/core';
import { userObj } from '../interfaces/user';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-viewbox',
  templateUrl: './viewbox.component.html',
  styles: [
  ]
})
export class ViewboxComponent implements OnInit {

  // userData: userObj;
  constructor(
    public dialogRef: MatDialogRef<ViewboxComponent>,
     @Inject(MAT_DIALOG_DATA) public data:any) {
      console.log('i am working');
      console.log(this.data);
    // this.userData = new userObj();
   }

  ngOnInit(): void {
     console.log(this.data);
     const oldRecords = localStorage.getItem('userList');
  //     if (oldRecords !== null) {
  //     const userList =JSON.parse(oldRecords);
  //     const currentUser = userList.find( (m : any) => m.userId == this.userData.userId);
  //     if (currentUser !== undefined) {
  //       this.userData.userCity = currentUser.userCity;
  //       this.userData.userEmail = currentUser.userEmail;
  //       this.userData.userName = currentUser.userName;
        
  //     }
  // }
  }

   onNoClick(): void {
    this.dialogRef.close();
  }
}
