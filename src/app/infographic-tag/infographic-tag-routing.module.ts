import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfographicTagComponent } from './infographic-tag.component';

const routes: Routes = [
  {
    path: '',
    component: InfographicTagComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfographicTagRoutingModule { }
