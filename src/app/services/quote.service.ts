import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import {Quote} from "../models/Quote";
import {map, Observable, of} from "rxjs";
import quotes from "../databases/quotes.json";

interface Database {
  [key: string]: any[];
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService extends ApiService<Quote> {
  QUOTES_KEY = "quotes";

  constructor(http: HttpClient) {
    super(http);
    this.injectTarget(this.QUOTES_KEY);
  }

  get(key: string): Quote[] {
    let data: Database;

    switch(key) {
      case this.QUOTES_KEY:
        data = quotes; break;
      default:
        data = {"values":[]}
    }

    return data["values"];
  }

  override getAll(): Observable<Quote[]> {
    return of(this.get(this.QUOTES_KEY));
  }

  getAllIds(): Observable<number[]> {
    return of(this.get(this.QUOTES_KEY)).pipe(
      map(quotes => quotes.map(quote => quote.id))
    );
  }

  override getById(id: number): Observable<Quote> {
    const quote = this.get(this.QUOTES_KEY).find(q => q.id === id);
    if (quote === undefined) throw Error("Can't find id")
    return of(quote);
  }

  override getBySearch(term: string): Observable<Quote[]> {
    const lowerTerm = term.toLowerCase();
    const filteredQuotes = this.get(this.QUOTES_KEY).filter(q =>
      q.title.toLowerCase().includes(lowerTerm) ||
      q.description.toLowerCase().includes(lowerTerm)
    );
    return of(filteredQuotes);
  }
}
