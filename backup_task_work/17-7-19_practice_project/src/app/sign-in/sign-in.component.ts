import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
// import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  activate_msg: boolean;
  activateForm: FormGroup; 
  first_login: boolean;

  constructor(public router: Router, private formBuilder: FormBuilder,private loginservice:LoginService,public toastr: ToastrManager) {
    this.first_login = true; 
  }
  ngOnInit() {
    this.activate_msg = false;

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });


    this.activateForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      mobile_number: ['', Validators.required],
    });
  }

  activate_account(type) {
    this.activate_msg = true;
    this.first_login = false;
  }

  back_signin() {

    this.first_login = true;

    this.activate_msg = false;
    this.loginForm.controls['email'].setValue('');
    this.loginForm.controls['password'].setValue('');

  }

  signIn()
  {
    console.log(this.loginForm.value); 
    //this.loading = true;
    const formData = new FormData();
    formData.append('email', this.loginForm.value.email);
    formData.append('password',this.loginForm.value.password);

    this.loginservice.authenticateUser(formData).subscribe(data=>{
      // alert(data);
      if(data.success=='true')
      {

        this.toastr.successToastr(data.msg);
        localStorage.setItem('user_id',data.user_id);
        localStorage.setItem('type',data.type);
        this.router.navigate(['/admin']);
      }
      else
      {
        this.toastr.errorToastr(data.msg);

      }
    })
  }

  activate_account_submit()
  {
    console.log(this.activateForm.value); 
    //this.loading = true;
    const formData = new FormData();
    formData.append('email', this.activateForm.value.email);
    formData.append('password',this.activateForm.value.password);
    formData.append('name',this.activateForm.value.name);
    formData.append('address', this.activateForm.value.address);
    formData.append('mobile_no', this.activateForm.value.mobile_number);


    this.loginservice.CreateUser(formData).subscribe(data=>{
      // alert(data);
      if(data.success=='true')
      {

        this.toastr.successToastr(data.msg);

        this.first_login = true;

        this.activate_msg = false;
        this.activateForm.reset(); // Added this

        // this.router.navigate(['/']);
      }
      else
      {
        this.toastr.errorToastr(data.msg);

      }
    })
  }

}
