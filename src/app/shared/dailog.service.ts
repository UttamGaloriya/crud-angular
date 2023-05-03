import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewUserComponent } from '../pages/view-user/view-user.component';
import { FormComponent } from '../pages/form/form.component';
import { userObj } from '../pages/interfaces/user';
// import{ViewUserComponent} from '../pages/view-user';
@Injectable({
  providedIn: 'root',
})
export class DailogService {
  openFormBox() {
    throw new Error('Method not implemented.');
  }
  constructor(private dailog: MatDialog) {}
  openConfirmDialog(msg: any, em: any) {
    return this.dailog.open(ViewUserComponent, {
      width: '400px',
      panelClass: 'confirm-dailog',
      disableClose: true,
      data: {
        name: msg,
        email: em,
      },
    });
  }
  openview(datax: userObj) {
    this.dailog.open(FormComponent, {
      data: {
        name: datax.userName,
        email: datax.userEmail,
        address: datax.userAddress,
      },
    });
  }
}
