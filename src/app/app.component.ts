import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AIEPFLIX';
  movies:any[]=[];

  constructor(private movieService:MovieService){}

  ngOnInit(){

    this.movieService.getTrending().subscribe((resp:any)=>{
      console.log(resp.results);
      this.movies = resp.results;



    })


  }
}
