import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { RoleNamePipe } from '../../pipes/roles.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EditComponent } from './Dialog/edit/edit.component';
import { AddComponent } from './Dialog/add/add.component';
import { InfoComponent } from './Dialog/info/info.component';
import { ViewComponent } from './Dialog/view/view.component';
import { DeleteComponent } from './Dialog/delete/delete.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    RoleNamePipe,
    EditComponent,
    AddComponent,
    InfoComponent,
    ViewComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
