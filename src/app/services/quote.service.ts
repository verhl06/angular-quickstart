import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import {Quote} from "../models/Quote";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuoteService extends ApiService<Quote> {
  constructor(http: HttpClient) {
    super(http);
    this.injectTarget('quotes');
  }

  getAllIds(): Observable<number[]> {
    const url = `${this.baseUrl}${this.target}${this.ending}`;
    return this.http.get<Quote[]>(url).pipe(
      map(quotes => quotes.map(quote => quote.id))
    );
  }
}
