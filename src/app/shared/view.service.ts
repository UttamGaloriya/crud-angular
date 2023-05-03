import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { userObj } from '../pages/interfaces/user';
import { FormComponent } from '../pages/form/form.component';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  constructor(private dailog: MatDialog) {}
  openview() {
    this.dailog.open(FormComponent, {
      data: {
        name: '',
        email: '',
        address: '',
      },
    });
  }
}
