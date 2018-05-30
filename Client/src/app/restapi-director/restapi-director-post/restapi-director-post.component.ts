import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restapi-director-post',
  templateUrl: './restapi-director-post.component.html',
  styleUrls: ['./restapi-director-post.component.scss']
})
export class RestapiDirectorPostComponent implements OnInit {

  private FirstName: string = "";
  private LastName: string = "";
  private BirthYear: string = "";
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  get firstName() {
    return this.firstName;
  }
  set firstName(value: string) {
    this.firstName = value;
    console.log(this.firstName)
  }
  get lastName() {
    return this.lastName;
  }
  set lastName(value: string) {
    this.lastName = value;
    console.log(this.lastName)
  }
  get birthYear() {
    return this.birthYear;
  }
  set birthYear(value: string) {
    this.birthYear = value;
    console.log(this.BirthYear)
  }
  Post() {
    this.http.post(`http://localhost:50533/api/v2/directors/post`, {
      firstName: this.FirstName,
      lastName: this.LastName,
      birthYear: this.BirthYear
    })
    .subscribe((data:any) => {
      console.log(data)
    }
  )
  }
}