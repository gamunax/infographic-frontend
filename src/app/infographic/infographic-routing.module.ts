import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfographicDetailComponent } from './components/infographic-detail/infographic-detail.component';
import { InfographicTagComponent } from './components/infographic-tag/infographic-tag.component';
import { InfographicComponent } from './components/infographic/infographic.component';

const routes: Routes = [
  {
    path: '',
    component: InfographicComponent
  },
  {
    path: 'search/:tag',
    component: InfographicTagComponent
  },
  {
    path: ':id/:url',
    component: InfographicDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfographicRoutingModule { }
