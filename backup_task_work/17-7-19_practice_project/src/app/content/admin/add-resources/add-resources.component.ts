import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators,FormControl} from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-resources',
  templateUrl: './add-resources.component.html',
  styleUrls: ['./add-resources.component.css']
})
export class AddResourcesComponent implements OnInit {
  user_id:any;
  public invoiceForm: FormGroup;
  private selectUndefinedOptionValue:any;

  constructor(private _fb: FormBuilder,private loginservice:LoginService,public toastr: ToastrManager,public router: Router) { 
    this.user_id=localStorage.getItem('user_id');

  }

  ngOnInit() {
    this.invoiceForm = this._fb.group({
      user_id:[this.user_id],
      resource_name:['', [Validators.required]],
      itemRows: this._fb.array([this.initItemRows()])
    });
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

  add_resource()
  {
    console.log(this.invoiceForm.value);
    // alert(JSON.stringify(this.invoiceForm.value))

    this.loginservice.add_resource(JSON.stringify(this.invoiceForm.value)).subscribe(data=>{
      // alert(data);
      if(data.success=='true')
      {
        this.user_id=localStorage.getItem('user_id');

        this.toastr.successToastr(data.msg);
        this.invoiceForm = this._fb.group({
          user_id:[this.user_id],
          resource_name:[''],
          itemRows: this._fb.array([])
        });
        this.invoiceForm.reset();
        this.invoiceForm.controls['user_id'].setValue(this.user_id);

        // this.initItemRows();
        this.router.navigate(['/add_resource']);
      }
      else
      {
        this.toastr.errorToastr(data.msg);

      }
    })
  }

}
