import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.moviesInTheaters = [{
      title: 'Spider-Man',
      releaseDate: new Date('2012-12-15'),
      price: 10,
      poster: 'https://fwcdn.pl/fpo/02/61/850261/7985244.6.jpg'
    },
    {
      title: 'Bad Boys',
      releaseDate: new Date('1999-11-21'),
      price: 19,
      poster: 'https://fwcdn.pl/fpo/10/40/1040/6925681.6.jpg'
    }];

    this.moviesFutureReleases = [
    //  {
    //  title: 'Django',
    //  releaseDate: new Date('2020-12-15'),
    //  price: 25
    //},
    //{
    //  title: 'Pio',
    //  releaseDate: new Date('2022-11-21'),
    //  price: 26
    //  }
    ];
  }
  moviesInTheaters
  moviesFutureReleases;

}
