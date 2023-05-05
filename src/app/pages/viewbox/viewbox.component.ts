import { Component, OnInit, Inject } from '@angular/core';
import { userObj } from '../interfaces/user';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-viewbox',
  templateUrl: './viewbox.component.html',
  styles: [],
})
export class ViewboxComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ViewboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
