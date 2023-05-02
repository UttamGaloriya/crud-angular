import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { ViewComponent } from './pages/view/view.component';
import { UpdateComponent } from './pages/update/update.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'' , redirectTo:'register',pathMatch:'full'},
  {path:'view',component:ViewComponent},
  {path:'upadte/:id', component:UpdateComponent},
  {path:'viewuser/:id',component:ViewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
