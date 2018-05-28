import { Component, OnInit } from '@angular/core';
import {Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { AuthService} from '../auth/auth.service';
@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.scss']
})
export class IMDBComponent {
  constructor(private http: HttpClient, public auth: AuthService) {}
  private _search: string = "Search by "
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

