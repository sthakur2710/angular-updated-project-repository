import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ng6-toastr-notifications';
import { SweetAlertService } from 'angular-sweetalert-service';
import {
    MatPaginator, MatSort, MatTable, MatTableModule, MatTabHeader,
    MatHeaderRow, MatHeaderCell, MatHeaderCellDef, MatHeaderRowDef,
    MatSortHeader, MatRow, MatRowDef,  MatCell, MatCellDef, MatPaginatorModule, MatSortModule,
} from '@angular/material';
const routes: Routes = [
    {
        path: '',
        component: TestComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatPaginatorModule,
        MatSortModule,
         MatTableModule,
        RouterModule.forChild(routes),
        ToastrModule.forRoot()
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    providers: [SweetAlertService],
    declarations: [TestComponent]
})
export class TestModule { }
