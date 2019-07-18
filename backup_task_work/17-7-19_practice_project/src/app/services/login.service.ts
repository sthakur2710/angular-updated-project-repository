import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Links } from '../links.module'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {
  }


  authenticateUser(data) 
  {
    console.log(data);
    // const httpOptions = {
    //   headers: new HttpHeaders()
    //   .set('Auth', 'uuCm8VxPDUJWqMGL7ZHI5sVTQaYZGpgh')
    //   };
   return this.http.post(Links.LOGIN, data)
   .map((response: any) => response);
  }

  CreateUser(data)
  {
    return this.http.post(Links.SIGNUP,data).map((response:any)=>response);
  } 

  add_resource(data)
  {
    return this.http.post(Links.ADDRESOURCE,data).map((response:any)=>response);
  }

  update_resource(data)
  {
    return this.http.post(Links.UPDATERESOURCE,data).map((response:any)=>response);
  }

  get_all_resource_details(data)
  {
    console.log(data);
    return this.http.post(Links.GETALLRESOURCES,data).map((response:any)=>response);
  }

  get_resource_details(data)
  {
    return this.http.post(Links.GETRESOURCEDETAILS,data).map((response:any)=>response);
  }

  delete_resource(data)
  {
    return this.http.post(Links.DELETERESOURCE,data).map((response:any)=>response);
  }

  get_user_details_data()
  {
    return this.http.get(Links.GETUSERDETAILS).map((response:any)=>response);
  }
}
