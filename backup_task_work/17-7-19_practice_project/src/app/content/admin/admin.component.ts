import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user_id:any;
  user_type:any;
  constructor(public router: Router) { 
    this.user_id=localStorage.getItem('user_id');
    this.user_type=localStorage.getItem('type');
  }

  ngOnInit() {
  }

  logout()
  {
    localStorage.removeItem('user_id');
    localStorage.removeItem('type');

    this.router.navigate(['/']);
  }

}
