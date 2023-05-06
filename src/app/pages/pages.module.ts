import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import {DatePipe} from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    //DatePipe
    
  ]
})
export class PagesModule { }
