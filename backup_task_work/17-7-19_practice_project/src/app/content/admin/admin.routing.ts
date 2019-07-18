import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
export const pvRoutes: Routes = [

    {
        path: '', component: AdminComponent,
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
            },
            {
                path: 'admin',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
            },
            {
                path:'add_resource',
                loadChildren:'./add-resources/add-resources.module#AddResourceModule',
            },
            {
                path:'manage_resources',
                loadChildren:'./manage-resources/manage-resources.module#ManageResourceModule'
            },
            {
                path:'update_resources',
                loadChildren:'./update-resource/update-resource.module#UpdateResourceModule',
            },
            {
                path:'resource_item',
                loadChildren:'./resource-item-details/resource-item-details.module#ResourceItemModule'
            },
            {
                path:'test',
                loadChildren:'./test/test.module#TestModule'
            },
            {
                path:'manage_users',
                loadChildren:'./manage-users/manage-users.module#ManageUsersModule'
            }
           
            // {
            //     path:'manual_approve_batches'
            //     loadChildren: './manual-approve-batches/manual-approve.mod'
            // }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(pvRoutes)],
    exports: [RouterModule]
})

export class AdminRouting { }
