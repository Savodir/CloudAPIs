import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-apiput',
  templateUrl: './rest-apiput.component.html',
  styleUrls: ['./rest-apiput.component.scss']
})
export class RestApiputComponent implements OnInit {
  result: any;
  private _search: number; 
  private title: string = "";
  private year: string = "";
  private genre: string = "";
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  searchByID(id: number) {
    this.http.get(`http://localhost:50533/api/v2/movies/i/${id}`)
    .subscribe(
      (res: Response) => {
        this.result = res;
        console.log(this.result)
      }
    )
  }
  get Title() {
    return this.title;
  }
  set Title(value: string) {
    this.title = value;
    var replaced = value.split(' ').join('%20');
  }
  get Year() {
    return this.year;
  }
  set Year(value: string) {
    this.year = value;
  }
  get Genre() {
    return this.genre;
  }
  set Genre(value: string) {
    this.genre = value;
  }
  get Search() {
    return this._search;
  }
  set Search(value: number) {
    this._search = value;
    if(this._search != null) {
      this.searchByID(value);
    }
  }
  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
  Put() {
    this.http.put(`http://localhost:50533/api/v2/movies/put`, {
      ID: this._search,
      Title: this.title,
      Year: this.year,
      Type: this.genre
    })
    .subscribe((data:any) => {
      console.log(data)
    }
  )
  this.wait(1000);
  this.searchByID(this._search);
  }
}
