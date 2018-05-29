import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-apititle-search',
  templateUrl: './rest-apititle-search.component.html',
  styleUrls: ['./rest-apititle-search.component.scss']
})
export class RestApititleSearchComponent implements OnInit {
  result: any;
  private _search: string = ""  
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  searchTitle() {
    this.http.get(`http://localhost:50533/api/v2/movies`)
    .subscribe(
      (res: Response) => {
        this.result = res;
        console.log(this.result)
      }
    )
  }
  searchSpecificTitle(replaced: string) {
    this.http.get(`http://localhost:50533/api/v2/movies/t/${replaced}`)
    .subscribe(
      (res: Response) => {
        this.result = res;
        console.log(this.result)
      }
    )
  }
  get Search() {
    return this._search;
  }
  set Search(value: string) {
    this._search = value;
    if(this._search == "") {
      this.searchTitle();
    }
    var replaced = value.split(' ').join('%20');
    this.searchSpecificTitle(replaced);
  }
}
