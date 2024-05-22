import {Component, Input, OnInit} from '@angular/core';
import { Quote } from "../../models/Quote";
import { QuoteService } from "../../services/quote.service";

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit {
  randomQuote: Quote = {} as Quote;
  possibleIds: number[] = [];

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.fetchPossibleIds();
  }

  fetchPossibleIds(): void {
    this.quoteService.getAllIds().subscribe(
      ids => {
        this.possibleIds = ids;
        console.log(this.possibleIds)
        this.getRandomQuote();
      },
      error => {
        console.log('Error occurred while fetching possible IDs:', error);
      }
    );
  }

  getRandomQuote(): void {
    const randomIndex = this.getRandomIndex(this.possibleIds.length);
    const randomId = this.possibleIds[randomIndex];
    console.log('[!] '+randomId)
    this.quoteService.getById(randomId).subscribe(
      quote => {
        this.randomQuote = quote;
        console.log(this.randomQuote)
      },
      error => {
        console.log('Error occurred while fetching random quote:', error);
      }
    );
  }

  getRandomIndex(sizeList: number): number {
    return Math.floor(Math.random() * sizeList);
  }
}
