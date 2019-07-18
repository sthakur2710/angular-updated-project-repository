export class Links {
  public static fbProvider = '1769326306468731';
  public static googleProvider = '904902362920-cf2j63qqlkdou3hq2qbkos8sdmi9uk5v.apps.googleusercontent.com';

  // public static base = 'http://shieldcrypt.com:8091/analynks/api/';
  // public static imageBase = 'http://shieldcrypt.com:8091/analynks/';

  // public static base = 'http://36.255.3.15:8091/analynks/';
  /*    public static base = 'http://localhost:8080/analynks/api/';
     public static imageBase = 'http://localhost:8080/analynks/'; */
  // public static base = 'http://103.241.146.152:8080/BPCL_TM/api/';
  public static base = 'http://localhost/api/';
 
  public static LOGIN = Links.base + 'admin/login';
  public static SIGNUP = Links.base + 'admin/signup';
  public static ADDRESOURCE = Links.base + 'admin/add_resources';
  public static GETALLRESOURCES = Links.base + 'admin/get_manage_resources';
  public static GETRESOURCEDETAILS = Links.base + 'admin/get_resource_item_details_by_user_id';
  public static UPDATERESOURCE = Links.base + 'admin/update_resource';
  public static DELETERESOURCE = Links.base + 'admin/delete_resource';
  public static GETUSERDETAILS = Links.base + 'admin/get_manage_users';
}
