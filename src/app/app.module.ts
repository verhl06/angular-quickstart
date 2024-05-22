import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RandomQuoteComponent } from './components/random-quote/random-quote.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {QuoteDetailsComponent} from './components/quote-details/quote-details.component';
import {TableComponent} from './components/table/table.component';
import {QuoteComponent} from './components/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RandomQuoteComponent,
    HeaderComponent,
    SearchComponent,
    QuoteDetailsComponent,
    TableComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
