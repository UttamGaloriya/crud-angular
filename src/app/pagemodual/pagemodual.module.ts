import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../pages/register/register.component';
import { ViewComponent } from '../pages/view/view.component';
import { UpdateComponent } from '../pages/update/update.component';
import { ViewUserComponent } from '../pages/view-user/view-user.component';
import { ViewboxComponent } from '../pages/viewbox/viewbox.component';
import { MatmodualModule } from '../matmodual/matmodual.module';

// const page = [
//   // RegisterComponent,
//   // ViewComponent,
//   // UpdateComponent,
//   // ViewUserComponent,
//   // ViewboxComponent,
// ];

@NgModule({
  // declarations: [page],
  imports: [CommonModule, MatmodualModule],
  // exports: [page],
})
export class PagemodualModule {}
