import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  handleSearch(searchInput: string): void {
    const searchTerm = searchInput.toLowerCase();
    const url = new URL("/table", window.location.href);
    url.searchParams.set("search", searchTerm);
    window.location.href = url.href;
  }
}
