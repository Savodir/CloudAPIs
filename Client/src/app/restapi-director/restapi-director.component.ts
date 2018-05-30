import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-restapi-director',
  templateUrl: './restapi-director.component.html',
  styleUrls: ['./restapi-director.component.scss']
})
export class RestapiDirectorComponent implements OnInit {

  constructor(  public auth: AuthService) { }

  ngOnInit() {
  }
}
