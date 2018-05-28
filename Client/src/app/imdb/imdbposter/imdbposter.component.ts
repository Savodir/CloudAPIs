import { Component, OnInit } from '@angular/core';
import {Http, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-imdbposter',
  templateUrl: './imdbposter.component.html',
  styleUrls: ['./imdbposter.component.scss']
})
export class ImdbposterComponent implements OnInit {
 result: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.searchTitle('Sons+of+anarchy')
  }
  searchTitle(replaced: string) {
    this.http.get(`http://www.omdbapi.com/?t=${replaced}&apikey=8e070606`)
    .subscribe(
      (res: Response) => {
        this.result = res;
        console.log(this.result)
      }
    )
  }
}
