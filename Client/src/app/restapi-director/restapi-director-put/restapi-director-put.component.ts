import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restapi-director-put',
  templateUrl: './restapi-director-put.component.html',
  styleUrls: ['./restapi-director-put.component.scss']
})
export class RestapiDirectorPutComponent implements OnInit {
  result: any;
  private _search: number; 
  private FirstName: string = "";
  private LastName: string = "";
  private BirthYear: string = "";
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
  get firstName() {
    return this.FirstName;
  }
  set firstName(value: string) {
    this.FirstName = value;
  }
  get lastName() {
    return this.LastName;
  }
  set lastName(value: string) {
    this.LastName = value;
  }
  get birthYear() {
    return this.BirthYear;
  }
  set birthYear(value: string) {
    this.BirthYear = value;
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
    this.http.put(`http://localhost:50533/api/v2/directors/put`, {
      ID: this._search,
      firstName: this.FirstName,
      lastName: this.LastName,
      birthYear: this.BirthYear
    })
    .subscribe((data:any) => {
      console.log(data)
    }
  )
  this.wait(1000);
  this.searchByID(this._search);
  }
}