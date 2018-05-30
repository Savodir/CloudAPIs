import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core'
import { FooterComponent } from './footer/footer.component';
import { IMDBComponent } from './imdb/imdb.component';
import { IMDBService } from './services/imdbservice';
import { ImdbsearchComponent } from './imdb/imdbsearch/imdbsearch.component';
import { ImdbposterComponent } from './imdb/imdbposter/imdbposter.component';
import { ImdbsearchbyidComponent } from './imdb/imdbsearchbyid/imdbsearchbyid.component';
import { ImdbpaginationComponent } from './imdbpagination/imdbpagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutMeComponent } from './about-me/about-me.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './auth/auth.service';
import { RestApiComponent } from './rest-api/rest-api.component';
import { RestApititleSearchComponent } from './rest-api/rest-apititle-search/rest-apititle-search.component';
import { RestApipostComponent } from './rest-api/rest-apipost/rest-apipost.component';
import { RestApiputComponent } from './rest-api/rest-apiput/rest-apiput.component';
import { RestapidelComponent } from './rest-api/restapidel/restapidel.component';
import { RestapiDirectorComponent } from './restapi-director/restapi-director.component'
import {RestapiDirectorSearchComponent } from './restapi-director/restapi-director-search/restapi-director-search.component';
import { RestapiDirectorMovieByIdComponent } from './restapi-director/restapi-director-movie-by-id/restapi-director-movie-by-id.component';
import { RestapiDirectorPostComponent } from './restapi-director/restapi-director-post/restapi-director-post.component';
import { RestapiDirectorPutComponent } from './restapi-director/restapi-director-put/restapi-director-put.component';
import { RestapiDirectorDelComponent } from './restapi-director/restapi-director-del/restapi-director-del.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    FooterComponent,
    IMDBComponent,
    ImdbsearchComponent,
    ImdbposterComponent,
    ImdbsearchbyidComponent,
    ImdbpaginationComponent,
    AboutMeComponent,
    CallbackComponent,
    RestApiComponent,
    RestApititleSearchComponent,
    RestApipostComponent,
    RestApiputComponent,
    RestapidelComponent,
    RestapiDirectorComponent,
    RestapiDirectorSearchComponent,
    RestapiDirectorMovieByIdComponent,
    RestapiDirectorPostComponent,
    RestapiDirectorPutComponent,
    RestapiDirectorDelComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyB24fQ8s1VLrw6EhUsyQP74eLvMWE1LYTw'
    }),
    RouterModule.forRoot([
      {path: "home", component: HomeComponent},
      {path: "imdb", component: IMDBComponent},
      {path: "imdbpagination", component: ImdbpaginationComponent},
      {path: "callback", component: CallbackComponent },
      {path: "restAPI", component: RestApiComponent},
      {path: "restAPIDirector", component: RestapiDirectorComponent},
      {path: "", component: HomeComponent},
      {path: "**", component: PageNotFoundComponent}
    ]),
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB24fQ8s1VLrw6EhUsyQP74eLvMWE1LYTw' 
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    IMDBService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
