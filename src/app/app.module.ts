import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { CurrencyService } from './services/currency/currency.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    CurrencyConverterComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [
    CurrencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
