import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { InfographicDetailComponent } from '../infographic-detail/infographic-detail.component';
// import { InfographicTagComponent } from './components/infographic-tag/infographic-tag.component';
import { InfographicComponent } from './components/infographic/infographic.component';

const routes: Routes = [
  {
    path: '',
    component: InfographicComponent,
  },
  // {	
  //   path: 'search/:tag',	
  //   component: InfographicTagComponent	
  // },	
  // {	
  //   path: 'detail/:id/:url',	
  //   component: InfographicDetailComponent
  // }
  
    // children: [
    //   {
    //     path: 'detail/:id/:url',
    //     loadChildren: () => import('../infographic-detail/infographic-detail.module').then(m => m.InfographicDetailModule)
    //   },
    //   {
    //     path: 'search/:tag',
    //     loadChildren: () => import('../infographic-tag/infographic-tag.module').then(m => m.InfographicTagModule)
    //   }
    // ]
  //}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfographicRoutingModule { }
