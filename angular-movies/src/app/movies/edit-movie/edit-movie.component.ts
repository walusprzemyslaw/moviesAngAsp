import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieDTO[];
  // = {
  //   title: 'Od zmierzchu do świtu', inTheaters: true, summary: 'best one', poster: 'https://fwcdn.pl/fpo/82/69/8269/7987761.6.jpg', releaseDate: new Date(), trailer: 'BRUMBRUM'
  // }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params['id']);
    });
  }

  saveChanges(movieCreationDTO: movieCreationDTO) {

  }

}
