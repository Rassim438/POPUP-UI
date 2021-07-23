import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@core';

/**
 * The routes
 */
const routes: Routes = [
  Route.withShell([
    { path: 'ltc', loadChildren: () => import('./ltc/ltc.module').then((m) => m.LtcModule) },
    { path: 'settings', loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule) }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

/**
 * The App routing module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
