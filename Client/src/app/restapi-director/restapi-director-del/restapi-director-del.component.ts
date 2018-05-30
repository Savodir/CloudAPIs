import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restapi-director-del',
  templateUrl: './restapi-director-del.component.html',
  styleUrls: ['./restapi-director-del.component.scss']
})
export class RestapiDirectorDelComponent implements OnInit {
  result: any;
  private _search: number; 
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  searchByID(id: number) {
    this.http.get(`http://localhost:50533/api/v2/directors/i/${id}`)
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
  set Search(value: number) {
    this._search = value;
    if(this._search != null) {
      this.searchByID(value);
    }
  }
  Delete() {
    this.http.delete(`http://localhost:50533/api/v2/directors/d/${this._search}`, {
    })
    .subscribe((data:any) => {
      console.log(data)
    }
  )
  }
}
