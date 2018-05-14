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
    ImdbpaginationComponent
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
      {path: "", component: HomeComponent},
      {path: "**", component: PageNotFoundComponent}
    ], {useHash: true}),
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB24fQ8s1VLrw6EhUsyQP74eLvMWE1LYTw' 
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    IMDBService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
