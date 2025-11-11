import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private username = "Sudheer Janga ";
    private apiUrl = "https://dogapi.dog/api/v2/breeds"
    private mockData = ['apple', 'banana', 'grape', 'orange', 'pineapple', 'mango'];
    constructor(private http: HttpClient) {
    }
    getUserName(): string {
        return this.username;
    }
    getChangeName(): string {
        return "sudheer Changed Through service"
    }
    getDogBreedInfo(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
    }
    searchItems(term: string): Observable<string[]> {
        const filtered = this.mockData.filter(item =>
          item.toLowerCase().includes(term.toLowerCase())
        );
        return of(filtered).pipe(delay(500)); 
      }
}