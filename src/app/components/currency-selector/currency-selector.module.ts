import {
  MdcButtonModule,
  MdcIconModule,
  MdcListModule,
  MdcMenuModule,
} from '@angular-mdc/web';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CurrencySelectorComponent } from './currency-selector.component';

@NgModule({
  imports: [
    MdcButtonModule,
    MdcMenuModule,
    MdcIconModule,
    MdcListModule,
    CommonModule,
  ],
  exports: [ CurrencySelectorComponent ],
  declarations: [ CurrencySelectorComponent ],
  providers: [],
})
export class CurrencySelectorModule {}
