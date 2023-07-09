import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'front-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front';
  theUrl = 'http://localhost:5000/echo';
  d$: Observable<any>;
  constructor(private http: HttpClient) {
    this.d$ = this.http.get(this.theUrl)
  }

  k($event: KeyboardEvent) {
    console.log($event)
    this.d$ = this.http.get(this.theUrl)

  }
}
