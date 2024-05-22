import {Component} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Quote} from "../../models/Quote";
import {QuoteService} from "../../services/quote.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  quotes$!: Observable<Quote[]>;
  quotes: Quote[] = [];

  private subscription!: Subscription;

  constructor(private quoteService: QuoteService, private route: ActivatedRoute) {
    this.quoteService.injectTarget('quotes');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchValue = params['search'];
      if (searchValue !== "" && searchValue !== undefined) {
        this.quotes$ = this.quoteService.getBySearch(searchValue);
        this.subscription = this.quoteService.getBySearch(searchValue).subscribe((quotes) => {
          this.quotes = quotes;
        });
      } else {
        this.quotes$ = this.quoteService.getAll();
        this.subscription = this.quoteService.getAll().subscribe((quotes) => {
          this.quotes = quotes;
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logQuoteId(id: number) {
    console.log(id)
  }
}

