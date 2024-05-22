import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {TableComponent} from "./components/table/table.component";
import {QuoteDetailsComponent} from "./components/quote-details/quote-details.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'table', component: TableComponent},
  {path: 'quote-details/:id', component: QuoteDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
