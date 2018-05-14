import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IMDBService {
        constructor(private _http: HttpClient) {}
         getList() : Observable<IMDBRoot> {
                return this._http.get<IMDBRoot>("http://www.omdbapi.com/?t=Sons+Of+Anarchy&apikey=8e070606");
        }
    }
    export interface Rating {
        Source: string;
        Value: string;
    }

    export interface RootObject {
        Title: string;
        Year: string;
        Rated: string;
        Released: string;
        Runtime: string;
        Genre: string;
        Director: string;
        Writer: string;
        Actors: string;
        Plot: string;
        Language: string;
        Country: string;
        Awards: string;
        Poster: string;
        Ratings: Rating[];
        Metascore: string;
        imdbRating: string;
        imdbVotes: string;
        imdbID: string;
        Type: string;
        totalSeasons: string;
        Response: string;
    }
    export interface IMDBRoot {
        object: RootObject[];
    }

