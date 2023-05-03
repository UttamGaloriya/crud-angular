import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewUserComponent } from '../pages/view-user/view-user.component';
// import{ViewUserComponent} from '../pages/view-user';
@Injectable({
  providedIn: 'root',
})
export class DailogService {
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
}
