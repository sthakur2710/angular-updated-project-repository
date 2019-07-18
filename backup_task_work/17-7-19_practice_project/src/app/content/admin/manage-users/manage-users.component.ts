import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { LoginService } from '../../../services/login.service';
import { PaginationService } from '../../../services/pagination.service';

import { Router } from '@angular/router';
import { SweetAlertService } from 'angular-sweetalert-service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  user_id: any;
  user_details:any[];
  private allItems: any[];
  pager: any = {};
  term:any;
  private count = 0;
  pagedItems: any[];
  constructor(private loginservice:LoginService,public toastr: ToastrManager,public router: Router,    private alertService: SweetAlertService
    ,private pagerService: PaginationService ) { 
    this.user_id=localStorage.getItem('user_id');
    this.pagedItems = [];
    this.allItems = [];
    this.user_details=[];
  }
  ngOnInit() {
    this.get_user_details();
  }
 
  get_user_details()
  {
    this.loginservice.get_user_details_data().subscribe(data=>{
      this.user_details=data.details_data;
      this.allItems = data.details_data;
      this.setPage(1);
    })
  }

  setPage(page: number) {
    // get pager object from service
    console.log(this.allItems);
    //alert(page);
    this.pager = this.pagerService.getPager(this.allItems.length, page,10);
  
    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log(this.pagedItems);
  }

  search(term: string) {
    console.log(term);
    if(term=='')
    {
      this.get_user_details();
    }
    if(!term) {
      this.allItems = this.user_details;
      console.log(this.allItems);
    } else {
      this.allItems = this.user_details.filter(x => 
         x.name.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
         x.email.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
         x.mobile_number.trim().toLowerCase().includes(term.trim().toLowerCase())
      );
      this.setPage(1);

      console.log('yaha hu main');
      console.log(this.allItems);

    }
  }
}
