import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { SweetAlertService } from 'angular-sweetalert-service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-manage-resources', 
  templateUrl: './manage-resources.component.html',
  styleUrls: ['./manage-resources.component.css']
})
export class ManageResourcesComponent implements OnInit {

  user_id:any;
  resource_array:any[];
  filterData:any[];
  constructor(private loginservice:LoginService,public toastr: ToastrManager,public router: Router,    private alertService: SweetAlertService
    ) { 
      this.filterData=[];
    this.user_id=localStorage.getItem('user_id');
  }

  ngOnInit() {
    this.get_all_manage_resources();
  }

  get_all_manage_resources()
  {
    const formData = new FormData();
    formData.append('user_id', this.user_id);
    this.loginservice.get_all_resource_details(formData).subscribe(data=>{
      this.resource_array=data.details_data;
      this.filterData=data.details_data;
    })
  }

  search(term: string) {
    console.log(term);
    if(!term) {
      this.filterData = this.resource_array;
      console.log(this.filterData);
    } else {
      this.filterData = this.resource_array.filter(x => 
         x.resource_name.trim().toLowerCase().includes(term.trim().toLowerCase())
      );
      console.log('yaha hu main');
      console.log(this.filterData);

    }
  }

  set_resource_id(resource_id)
  {
    localStorage.setItem('resource_id',resource_id);
  }

  delete_resource_id(resource_id)
  {
    this.user_id=localStorage.getItem('user_id');

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this record after delete!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

    const formData = new FormData();
    formData.append('user_id', this.user_id);
    formData.append('resource_id',resource_id);
    this.loginservice.delete_resource(formData).subscribe(data=>{
      if(data.success=='true')
      {
        this.get_all_manage_resources();
        Swal.fire(
          'Deleted!',
          'Resource deleted successfully.',
          'success'
        )
      }
      else
      {
        Swal.fire(
          'Please try again',
          'Your record is safe :)',
          'error'
        )
      }
    })
      
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your record is safe :)',
          'error'
        )
      }
    })
  }

}
