import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./infographic/infographic.module').then(m => m.InfographicModule)
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
