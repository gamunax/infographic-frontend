import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfographicComponent } from './infographic.component';

const routes: Routes = [
  {
    path: '',
    component: InfographicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfographicRoutingModule { }
