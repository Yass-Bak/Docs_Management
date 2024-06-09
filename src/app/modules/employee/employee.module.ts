import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { HomeComponent } from './home/home.component';

import { SendRequestComponent } from './send-request/send-request.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { PipeModule } from '../general/shared/pipe.module';

@NgModule({
  declarations: [
    HomeComponent,
    SendRequestComponent,
    MyRequestsComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDividerModule,
    MatDialogModule,
    MatSelectModule,
    PipeModule
  ]
})
export class EmployeeModule { }
