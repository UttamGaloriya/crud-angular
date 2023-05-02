import { Component, OnInit } from '@angular/core';
import { userObj } from '../interfaces/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: [
  ]
})
export class ViewComponent implements OnInit {
  
userList: userObj[];
  constructor() { 
   this.userList = [];
  }

  ngOnInit(): void {
    const records = localStorage.getItem('userList');
    if (records !== null) {
      this.userList = JSON.parse(records);
    }
  }
displayedColumns: string[] = ['No', 'Name', 'City','Gender','Address', 'Email','Action'];
delete(id:any){
  if(confirm("this data delete")){
 const oldRecords = localStorage.getItem('userList');

if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex( (a : any) => a.userId == id), 1);
      localStorage.setItem('userList', JSON.stringify(userList));
    }
    const records = localStorage.getItem('userList');
    if (records !== null) {
      this.userList = JSON.parse(records);
    }}
    // else{prompt('data not delete')}
}
}
