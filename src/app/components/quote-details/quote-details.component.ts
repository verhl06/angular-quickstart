import {Component, OnInit} from '@angular/core';
import {Quote} from "../../models/Quote";
import {QuoteService} from "../../services/quote.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  quote: Quote = {} as Quote;
  selectedId = -1;

  constructor(private quoteService: QuoteService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getSelectedId();
    this.getQuoteDetails();
  }

  getSelectedId(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.selectedId = idParam ? +idParam : -1;
  }

  getQuoteDetails(): void {
    this.quoteService.getById(this.selectedId).subscribe(
      quote => {
        this.quote = quote;
        console.log(this.quote)
      },
      error => {
        console.log('Error occurred while fetching random quote:', error);
      }
    );
  }
}
