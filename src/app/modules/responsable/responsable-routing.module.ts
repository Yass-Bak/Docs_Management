import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [ { path: '', component:HomeComponent ,children:[
  { path: '', component: RequestsComponent }]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsableRoutingModule { }
