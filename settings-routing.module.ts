import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefactoItemListComponent } from './defacto-item-list/defacto-item-list.component';

const routes: Routes = [
  {
    path: 'defacto-items',
    component: DefactoItemListComponent,
    pathMatch: 'full',
    data: { title: 'Defacto Item' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
