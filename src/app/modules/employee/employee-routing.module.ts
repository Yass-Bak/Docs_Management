import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { SendRequestComponent } from './send-request/send-request.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: MyRequestsComponent },
      { path: 'send-request', component: SendRequestComponent },
      { path: 'my-requests', component: MyRequestsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
