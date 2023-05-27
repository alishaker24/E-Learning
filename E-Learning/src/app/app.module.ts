import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin-mod/admin.component';
import { SignupComponent } from './signup/signup.component';
// import { AppRoutingModule } from './app-routing.module';
import { AdminModModule } from './admin-mod/admin-mod.module';
import { RouterModule,Routes } from '@angular/router';

import { CuserComponent } from './user/cuser/cuser.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { EnrollComponent } from './enroll/enroll.component';
import { CoursesComponent } from './courses/courses.component';
import { FacultiesComponent } from './faculties/faculties.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'stud', component: CuserComponent },
  {path: 'signup', component: SignupComponent },
  // {path: 'courses', component: CoursesListComponent},
  {path:'admin',component:AdminComponent}
  // {path:'faculty',component:CalenderComponent}
  
  
  ]
@NgModule({
  imports: [BrowserModule,
     FormsModule,
      ReactiveFormsModule,
      AdminModModule,
      RouterModule.forRoot(appRoutes),
      //  AppRoutingModule,
       RouterModule,
       UserModule
       
  ],
  declarations: [AppComponent,SignupComponent, HomeComponent,CuserComponent, EnrollComponent, CoursesComponent, FacultiesComponent],
  providers:[FormBuilder],
  bootstrap: [AppComponent],
})

export class AppModule {


 
  // myComponent.component.thml
 
  
}
