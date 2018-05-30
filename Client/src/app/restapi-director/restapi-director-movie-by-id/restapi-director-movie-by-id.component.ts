import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restapi-director-movie-by-id',
  templateUrl: './restapi-director-movie-by-id.component.html',
  styleUrls: ['./restapi-director-movie-by-id.component.scss']
})
export class RestapiDirectorMovieByIdComponent implements OnInit {
  result: any;
  private _search: string = "";
  constructor(private http: HttpClient) { }
  page: number = 0;
  orderby: string = "desc";
  ngOnInit() {
    }

  searchMoviesByDirectorID(id : string) {
    this.http.get(`http://localhost:50533/api/v2/movies/dir/${id}?page=${this.page}&length=5&dir=${this.orderby}`)
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
    if(this._search != "") {
    this.searchMoviesByDirectorID(this._search);
    }
  }
  showLess() {
    if(this.page != 0) {
      this.page--;
      this.searchMoviesByDirectorID(this._search)
    }
  }
  showMore() {
    this.page++
    this.searchMoviesByDirectorID(this._search)    
  }
}
