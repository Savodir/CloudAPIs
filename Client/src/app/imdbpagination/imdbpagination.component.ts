import { Component, OnInit } from '@angular/core';
import {Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import {AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-imdbpagination',
  templateUrl: './imdbpagination.component.html',
  styleUrls: ['./imdbpagination.component.scss']
})
export class ImdbpaginationComponent  {


  constructor(private http: HttpClient, public auth: AuthService) {}
  private _search: string = ""
  private page: number = 1;
  title = "";
  result;
  replaced;
  searchTitle(replaced: string) {
    this.http.get(`http://www.omdbapi.com/?s=${replaced}&page=${this.page}&apikey=8e070606`)
    .subscribe(
      (res: Response) => {
        this.result = res;
        console.log(res);
      }
    )
  }
  get Search() {
    return this._search;
  }
  set Search(value: string) {
    this._search = value;
    this.replaced = value.split(' ').join('+');
    this.searchTitle(this.replaced);
  }
  showLess() {
    if(this.page != 1) {
      this.page--;
      this.searchTitle(this._search)
    }
  }
  showMore() {
    this.page++
    this.searchTitle(this._search)    
  }
}