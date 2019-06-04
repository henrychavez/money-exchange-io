import {
  MdcButtonModule,
  MdcElevationModule,
  MdcIconButtonModule,
  MdcIconModule,
  MdcListModule,
  MdcMenuModule,
  MdcTextFieldModule,
  MdcTopAppBarModule,
  MdcTypographyModule,
} from '@angular-mdc/web';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CurrencySelectorModule } from 'src/app/components/currency-selector';
import { CurrencyService } from 'src/app/shared/services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MdcTypographyModule,
    MdcTopAppBarModule,
    MdcElevationModule,
    MdcTextFieldModule,
    MdcIconModule,
    MdcButtonModule,
    MdcMenuModule,
    MdcListModule,
    MdcIconButtonModule,
    CurrencySelectorModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [
    CurrencyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
