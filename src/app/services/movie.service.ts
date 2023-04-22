import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getTrending(){
    return this.http.get('https://api.themoviedb.org/3/trending/movie/week?api_key=6731f8a3396a5ac8d2ad12e4f9447c84&language=es');

  }
}
