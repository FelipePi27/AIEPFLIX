import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

const url_img = environment.URL_IMG;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieId:any;
  url_backdrop_img:string="";
  url_poster_img:string="";
  movie:any;
  generos:string="";
  crews:any[]=[];
 

  constructor(
    private activedRoute:ActivatedRoute, 
    private router:Router,
    private movieService:MovieService

    ){}

  ngOnInit(): void {
    
    this.activedRoute.params.subscribe(resp=>{
      console.log(resp['id']);
      this.movieId = resp['id'];
      if(!resp['id']){
        this.router.navigate(['']);
      }

      this.movieService.getMovieDetail(this.movieId).subscribe((resp:any)=>{
        console.log(resp);
        this.movie = resp;
        this.url_backdrop_img = `${url_img}${resp.backdrop_path}`
        //console.log(this.url_backdrop_img);
        this.url_poster_img = `${url_img}${resp.poster_path}`
        let arrGen = resp.genres;
        var generos = arrGen.map((x:any)=>x.name).join(', ')
        this.generos = generos;
        //console.log(this.generos);
        
      });

      this.movieService.getMovieCredits(this.movieId).subscribe((resp:any)=>{
        console.log(resp);
        this.crews = resp.crew.filter(function(el:any){
          return el.job=="Director" || el.job=="Writer" || el.job=="Characters"

        })

        

      });


    })
  }
}
