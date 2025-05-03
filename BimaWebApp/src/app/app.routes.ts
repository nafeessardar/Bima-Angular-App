import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layouts/layout/layout.component';
import { content } from './shared/routes/routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/app/home',
        pathMatch: 'full',
      },
      {
        path: '',
        component: LayoutComponent,
        children: content
      },
      {
        path: '**',
        redirectTo: 'page/other-pages/404',
        pathMatch: 'full'
      }
];
