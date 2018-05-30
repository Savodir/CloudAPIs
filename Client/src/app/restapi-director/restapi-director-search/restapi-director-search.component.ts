import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restapi-director-search',
  templateUrl: './restapi-director-search.component.html',
  styleUrls: ['./restapi-director-search.component.scss']
})
export class RestapiDirectorSearchComponent implements OnInit {
  result: any;
  private _search: string = ""  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.searchTitle();
    }
  searchTitle() {
    this.http.get(`http://localhost:50533/api/v2/directors`)
    .subscribe(
      (res: Response) => {
        this.result = res;
        console.log(this.result)
      }
    )
  }
  searchSpecificTitle(replaced: string) {
    this.http.get(`http://localhost:50533/api/v2/directors/t/${replaced}`)
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
