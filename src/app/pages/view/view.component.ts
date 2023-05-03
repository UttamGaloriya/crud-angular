import { Component, OnInit } from '@angular/core';
import { userObj } from '../interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { ViewboxComponent } from '../viewbox/viewbox.component';
import { DailogService } from 'src/app/shared/dailog.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: [],
})
export class ViewComponent implements OnInit {
  myname: any = '';
  myemail: any = '';
  //  usreData:userObj;

  userList: userObj[];
  constructor(public dialog: MatDialog, private dailogServices: DailogService) {
    //  this.userData = new userObj();
    this.userList = [];
  }

  ngOnInit(): void {
    const records = localStorage.getItem('userList');
    if (records !== null) {
      this.userList = JSON.parse(records);
    }
  }
  displayedColumns: string[] = [
    'No',
    'Name',
    'City',
    'Gender',
    'Address',
    'Email',
    'Action',
  ];

  delete(id: any) {
    // console.log(id);
    const oldRecords = localStorage.getItem('userList');
    const records = localStorage.getItem('userList');

    //db->index find
    const newid = this.userList.findIndex((a: any) => a.userId == id);
    console.log(newid);
    this.myemail = this.userList[newid].userEmail;
    this.myname = this.userList[newid].userName;

    this.dailogServices
      .openConfirmDialog(this.myname, this.myemail)
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          if (oldRecords !== null) {
            const userList = JSON.parse(oldRecords);
            userList.splice(
              userList.findIndex((a: any) => a.userId == id),
              1
            );
            localStorage.setItem('userList', JSON.stringify(userList));
          }
          const records = localStorage.getItem('userList');
          if (records !== null) {
            this.userList = JSON.parse(records);
          }
        }
      });
  }
}
