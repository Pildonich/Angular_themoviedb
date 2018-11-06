import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  movie$: any;
  recommendations$ : any;
  similar$: any;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.movie$ = params.id );
   }

  ngOnInit() {
    this.data.getMovie(this.movie$).subscribe(
      data => this.movie$ = data 
    );
    this.data.getRecommendations(this.movie$).subscribe(
      data => this.recommendations$ = data 
    );
    this.data.getSimilar(this.movie$).subscribe(
      data => this.similar$ = data 
    );
  }

}
