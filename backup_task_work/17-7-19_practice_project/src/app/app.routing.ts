import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './guard/auth.guard';
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        loadChildren: './content/admin/admin.module#AdminModule',
        //canActivate: [AuthGuard]
    },
    {
        path: 'signin',
        loadChildren: './sign-in/sign-in.module#SigninModule',
    },
    // {
    //     path: 'signup',
    //     loadChildren: './signup/sign-up.module#SignupModule'
    // }
    // {
    //     path: 'hq-e',
    //     loadChildren: './content/hq-e/hq-e.module#HQEModule'
    // },
    // {
    //     path: 'admin',
    //     loadChildren: './content/so/so.module#SOModule'
    // },
    /*  {
         path: 'forgot-password',
         loadChildren: './forgot-password/forgot-password.module#FPassModule'
     },
     {
         path: '**',
         redirectTo: 'signin',
         pathMatch: 'full'
     } */
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
