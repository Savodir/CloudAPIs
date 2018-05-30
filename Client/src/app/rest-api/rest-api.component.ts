import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.scss']
})
export class RestApiComponent implements OnInit {

  result: any;
  constructor(public auth: AuthService) { }
  
  ngOnInit() {
  }
}
