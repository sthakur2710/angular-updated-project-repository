import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup.component';
import { LoginService } from '../services/login.service';
const routes: Routes = [
    {
        path     : '',
        component: SignupComponent,
    }
  ];
  
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
      // FlexLayoutModule
    ],
    providers: [LoginService],
    declarations: [SignupComponent]
  })
  export class SignupModule { }
  