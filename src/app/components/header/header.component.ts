import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {
  }

  handleSearch(searchInput: string): void {
    const searchTerm = searchInput.toLowerCase();
    this.router.navigate(['/table'], { queryParams: { search: searchTerm } });
  }
}
