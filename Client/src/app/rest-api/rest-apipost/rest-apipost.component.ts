import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-apipost',
  templateUrl: './rest-apipost.component.html',
  styleUrls: ['./rest-apipost.component.scss']
})
export class RestApipostComponent implements OnInit {
  private title: string = "";
  private year: string = "";
  private genre: string = "";
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  get Title() {
    return this.title;
  }
  set Title(value: string) {
    this.title = value;
    var replaced = value.split(' ').join('%20');
    console.log(this.title)
  }
  get Year() {
    return this.year;
  }
  set Year(value: string) {
    this.year = value;
    console.log(this.year)
  }
  get Genre() {
    return this.genre;
  }
  set Genre(value: string) {
    this.genre = value;
    console.log(this.Genre)
  }
  Post() {
    this.http.post(`http://localhost:50533/api/v2/movies/post`, {
      Title: this.title,
      Year: this.year,
      Type: this.genre
    })
    .subscribe((data:any) => {
      console.log(data)
    }
  )
  }
}
