import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.scss']
})
export class RestApiComponent implements OnInit {

  result: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.searchTitle();
  }
  searchTitle() {
    this.http.get(`http://localhost:50533/api/v1/books/test`)
    .subscribe(
      (res: Response) => {
        this.result = res;
        console.log(this.result)
      }
    )
  }
}
