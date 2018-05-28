import { Component } from '@angular/core';
import {Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-imdbsearch',
  templateUrl: './imdbsearch.component.html',
  styleUrls: ['./imdbsearch.component.scss']
})
export class ImdbsearchComponent {

  constructor(private http: HttpClient) {}
  private _search: string = ""
  title = "";
  result;
  searchTitle(replaced: string) {
    this.http.get(`http://www.omdbapi.com/?t=${replaced}&apikey=8e070606`)
    .subscribe(
      (res: Response) => {
        this.result = res;
      }
    )
  }
  get Search() {
    return this._search;
  }
  set Search(value: string) {
    this._search = value;
    var replaced = value.split(' ').join('+');
    this.searchTitle(replaced);
  }
}