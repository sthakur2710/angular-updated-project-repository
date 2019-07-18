import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './sign-in.component';
import { LoginService } from '../services/login.service';
import { ToastrModule } from 'ng6-toastr-notifications';

const routes: Routes = [
    {
        path     : '',
        component: SignInComponent,
    }
  ];
  
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      ToastrModule.forRoot()
      // FlexLayoutModule
    ],
    providers: [LoginService],
    declarations: [SignInComponent]
  })
  export class SigninModule { }
  