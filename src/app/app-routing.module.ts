import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/general/login/login.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AuthGuard } from './Services/guard/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module')
      .then(mod => mod.AdminModule), canActivate: [AuthGuard], data: { role: 'Admin' }
  },
  {
    path: 'employee',
    loadChildren: () => import('./modules/employee/employee.module')
      .then(mod => mod.EmployeeModule), canActivate: [AuthGuard], data: { role: 'Employee' }
  },
  {
    path: 'responsable',
    loadChildren: () => import('./modules/responsable/responsable.module')
      .then(mod => mod.ResponsableModule), canActivate: [AuthGuard], data: { role: 'Responsable' }
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }