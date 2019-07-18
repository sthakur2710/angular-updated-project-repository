import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resource-item-details',
  templateUrl: './resource-item-details.component.html',
  styleUrls: ['./resource-item-details.component.css']
})
export class ResourceItemDetailsComponent implements OnInit {
  user_id:any;
  resource_array:any[];
  resource_id:any;

  constructor(private loginservice:LoginService,public toastr: ToastrManager,public router: Router
    ) { 
    this.user_id=localStorage.getItem('user_id');
    this.resource_id=localStorage.getItem('resource_id');
  }
  ngOnInit() {
    this.get_resource_details_data();
  }
  get_resource_details_data()
  {
    const formData = new FormData();
    formData.append('user_id', this.user_id);
    formData.append('resource_id',this.resource_id);
    this.loginservice.get_resource_details(formData).subscribe(data=>{
      if(data.success=='true')
      {
        this.resource_array=data.details_data;
      }
      else
      {
        this.resource_array=[];
        // this.toastr.errorToastr(data.msg);

      }
    });
  }
}
