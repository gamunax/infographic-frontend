import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfographicDetailComponent } from './infographic-detail.component';

const routes: Routes = [
  {
    path: '',
    component: InfographicDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfographicDetailRoutingModule { }
