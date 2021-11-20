import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private env: string;
  constructor(private _http: HttpClient, private _router: Router) {
    this.env = environment.APP_URL;
  }


  getMovies(type: string, page: number){
    return this._http.get<any>(this.env + 'movie/getMovie/' + type + "&" +page)
  }

  getDetails(id: any){
    return this._http.get<any>(this.env + 'movie/getDetails/' + id );
  }

  getByName(name:any, page: number){
    return this._http.get<any>(this.env + 'movie/getByName/' + name + "&" + page);
  }
}
