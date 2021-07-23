import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DefactoItemAddComponent } from './defacto-item-add/defacto-item-add.component';

import { DefactoItemListComponent } from './defacto-item-list/defacto-item-list.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [DefactoItemListComponent, DefactoItemAddComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    TranslateModule,
    AutoCompleteModule,
    SharedModule,
    DropdownModule,
    TableModule,
    InputTextModule,
    FormsModule,
    RadioButtonModule,
    DynamicDialogModule,
    DialogModule,
    
  ]
})
export class SettingsModule {}
