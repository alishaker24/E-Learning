import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  
  {  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }