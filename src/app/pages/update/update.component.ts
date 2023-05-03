import { Component, OnInit } from '@angular/core';
import { userObj } from '../interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: [],
})
export class UpdateComponent implements OnInit {
  userData: userObj;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.userData = new userObj();
    this.route.params.subscribe((res) => {
      this.userData.userId = res['id'];
    });
  }

  ngOnInit(): void {
    const oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      const currentUser = userList.find(
        (m: any) => m.userId == this.userData.userId
      );
      if (currentUser !== undefined) {
        this.userData.userCity = currentUser.userCity;
        this.userData.userEmail = currentUser.userEmail;
        this.userData.userName = currentUser.userName;
        this.userData.userCity = currentUser.userCity;
        this.userData.userAddress = currentUser.userAddress;
        this.userData.userGender = currentUser.userGender;
      }
    }
  }

  update() {
    // debugger;

    const oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.splice(
        userList.findIndex((a: any) => this.userData.userId),
        1
      );
      userList.push(this.userData);
      localStorage.setItem('userList', JSON.stringify(userList));
    }
    this.router.navigateByUrl('/view');
  }
}
