import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T> {
  protected baseUrl = 'http://localhost:3000/';
  protected target = '';
  protected ending = '';

  constructor(protected http: HttpClient) {
  }

  injectTarget(target: string) {
    this.target = target;
  }

  getAll(): Observable<T[]> {
    return new Observable<T[]>(observer => {
      const url = this.baseUrl + this.target + this.ending;
      this.http.get<T[]>(url).subscribe(
        response => {
          observer.next(response);
          observer.complete();
          },
          error => {
          observer.error(error);
        });
    });
  }

  getById(id: number): Observable<T> {
    return new Observable<T>(observer => {
      const url = `${this.baseUrl}${this.target}/${id}${this.ending}`;
      console.log(url)
      this.http.get<T>(url).subscribe(
        response => {
          observer.next(response);
          observer.complete();
        },
        error => {
          observer.error(error);
        }
      );
    });
  }

  getBySearch(searchTerm: string): Observable<T[]> {
    if (searchTerm === '') {
      return this.getAll()
    }
    return new Observable<T[]>(observer => {
      const url = `${this.baseUrl}${this.target}${this.ending}?q=${searchTerm}`;
      this.http.get<T[]>(url).subscribe(
        response => {
          observer.next(response);
          observer.complete();
        },
        error => {
          observer.error(error);
        }
      );
    });
  }
}
