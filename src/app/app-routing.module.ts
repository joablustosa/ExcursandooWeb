import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';


const routes: Routes = [
  { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'all-trips',
        loadChildren: () => import('./views/pages-doo/trips_pages/trips_pages.module').then(m => m.TripsPagesModule)
      },
      {
        path: 'administrator',
        loadChildren: () => import('./views/pages-doo/administrator_pages/administrator_pages.module').then(m => m.AdministratorPagesModule)
      },
      {
        path: 'checklists',
        loadChildren: () => import('./views/pages-doo/checklists_pages/checklists_pages.module').then(m => m.ChecklistsPagesModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('./views/pages-doo/messages_pages/messages_pages.module').then(m => m.MessagesPagesModule)
      },
      {
        path: 'money',
        loadChildren: () => import('./views/pages-doo/money_pages/money_pages.module').then(m => m.MoneyPagesModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./views/pages-doo/reports_pages/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'providers',
        loadChildren: () => import('./views/pages-doo/provider_pages/provider_pages.module').then(m => m.ProviderPagesModule)
      },
      {
        path: 'budgets',
        loadChildren: () => import('./views/pages-doo/budgets-pages/budgets_pages.module').then(m => m.BudgetsPagesModule)
      },
      {
        path: 'configurations',
        loadChildren: () => import('./views/pages-doo/configuration_pages/configurations_pages.module').then(m => m.ConfigurationsPagesModule)
      },
      {
        path: 'apps',
        loadChildren: () => import('./views/pages/apps/apps.module').then(m => m.AppsModule)
      },
      {
        path: 'ui-components',
        loadChildren: () => import('./views/pages/ui-components/ui-components.module').then(m => m.UiComponentsModule)
      },
      {
        path: 'advanced-ui',
        loadChildren: () => import('./views/pages/advanced-ui/advanced-ui.module').then(m => m.AdvancedUiModule)
      },
      {
        path: 'form-elements',
        loadChildren: () => import('./views/pages/form-elements/form-elements.module').then(m => m.FormElementsModule)
      },
      {
        path: 'advanced-form-elements',
        loadChildren: () => import('./views/pages/advanced-form-elements/advanced-form-elements.module').then(m => m.AdvancedFormElementsModule)
      },
      {
        path: 'charts-graphs',
        loadChildren: () => import('./views/pages/charts-graphs/charts-graphs.module').then(m => m.ChartsGraphsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./views/pages/tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/pages/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'general',
        loadChildren: () => import('./views/pages/general/general.module').then(m => m.GeneralModule)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { 
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
