import { Component, OnInit } from '@angular/core';
import {Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-imdbsearchbyid',
  templateUrl: './imdbsearchbyid.component.html',
  styleUrls: ['./imdbsearchbyid.component.scss']
})
export class ImdbsearchbyidComponent{

  constructor(private http: HttpClient) {}
  private _search: string = ""
  title = "";
  result;
  searchbyID(replaced: string) {
    this.http.get(`http://www.omdbapi.com/?i=${replaced}&apikey=8e070606`)
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
    this.searchbyID(this._search);
  }
}
