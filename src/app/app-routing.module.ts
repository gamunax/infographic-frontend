import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'main',
      //   pathMatch: 'full',
      // },
      {
        path: '',
        loadChildren: () => import('./infographic/infographic.module').then(m => m.InfographicModule)
      },
      {
        path: 'detail/:id/:url',
        loadChildren: () => import('./infographic-detail/infographic-detail.module').then(m => m.InfographicDetailModule)
      },
      {
        path: 'search/:tag',
        loadChildren: () => import('./infographic-tag/infographic-tag.module').then(m => m.InfographicTagModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'disabled',
    initialNavigation: 'enabled'
})
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule { }
