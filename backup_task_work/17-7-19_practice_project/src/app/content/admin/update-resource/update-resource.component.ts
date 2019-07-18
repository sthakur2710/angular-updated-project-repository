import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators,FormControl} from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-update-resource',
  templateUrl: './update-resource.component.html',
  styleUrls: ['./update-resource.component.css']
})
export class UpdateResourceComponent implements OnInit {

  user_id:any;
  resource_id:any;
  public invoiceForm: FormGroup;
  private selectUndefinedOptionValue:any;
  details_data_array:any[];

  constructor(private _fb: FormBuilder,private loginservice:LoginService,public toastr: ToastrManager,public router: Router) { 
    this.user_id=localStorage.getItem('user_id');
    this.resource_id=localStorage.getItem("resource_id");

  }
  ngOnInit() {

   

    this.get_resource_details_data();
   
    this.invoiceForm = this._fb.group({
      resource_id:[this.resource_id],
      user_id:[this.user_id],
      resource_name:['', [Validators.required]],
      itemRows: this._fb.array([])
    });
  }
  get_resource_details_data()
  {
    const formData = new FormData();
    formData.append('user_id', this.user_id);
    formData.append('resource_id',this.resource_id);
    this.loginservice.get_resource_details(formData).subscribe(data=>{
      if(data.success=='true')
      {

        this.invoiceForm.controls['resource_name'].setValue(data.resource_name);
        this.details_data_array=data.details_data;
        if(this.details_data_array.length > 0)
        {
          this.details_data_array.forEach(X=>{
            this.formArr.push(this._fb.group({
              itemname: [X.item_name, Validators.required],
              itemtype: [X.item_type, Validators.required]
            }));

          });
        }
      }
      else
      {
        // this.toastr.errorToastr(data.msg);

      }
    });
  }

  update_resource()
  {
    console.log(this.invoiceForm.value);
    // alert(JSON.stringify(this.invoiceForm.value))

    this.loginservice.update_resource(JSON.stringify(this.invoiceForm.value)).subscribe(data=>{
      // alert(data);
      if(data.success=='true')
      {
        this.user_id=localStorage.getItem('user_id');

        this.toastr.successToastr(data.msg);
        // this.invoiceForm = this._fb.group({
        //   user_id:[this.user_id],
        //   resource_name:[''],
        //   itemRows: this._fb.array([])
        // });
        // this.invoiceForm.reset();
        this.invoiceForm.controls['user_id'].setValue(this.user_id);
        // this.get_resource_details_data();

        // this.toastr.successToastr(data.msg);

        // this.initItemRows();
        // this.router.navigate(['/add_resource']);
      }
      else
      {
        this.toastr.errorToastr(data.msg);

      }
    })
  }

  get formArr() {
    return this.invoiceForm.get('itemRows') as FormArray;
  }

  initItemRows() {
    return this._fb.group({
      itemname: ['', Validators.required],
      itemtype: ['', Validators.required]
    });
  }

  addNewRow() {
    console.log(this.initItemRows());
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

}
