import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayout,
    // children:
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
