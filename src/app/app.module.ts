import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewComponent } from './pages/view/view.component';
import { UpdateComponent } from './pages/update/update.component';
import { ViewUserComponent } from './pages/view-user/view-user.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewboxComponent } from './pages/viewbox/viewbox.component';

// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatTableModule } from '@angular/material/table';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatCardModule } from '@angular/material/card';

import { MatmodualModule } from './matmodual/matmodual.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewComponent,
    UpdateComponent,
    ViewUserComponent,
    ViewboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    // MatButtonModule,
    // MatIconModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // MatTableModule,
    // MatRadioModule,
    // MatDialogModule,
    // MatToolbarModule,
    // MatCardModule,
    //
    MatmodualModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
