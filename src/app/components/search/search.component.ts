import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() placeholder = "Search.."
  @Output() search = new EventEmitter<string>()

  searchterm: string = ""

  handleClick() {
    console.log(this.searchterm)
    this.search.emit(this.searchterm)
  }
}
