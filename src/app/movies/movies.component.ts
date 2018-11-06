import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMovies().subscribe(
      data => this.movies$ = data 
    );
  }

}
