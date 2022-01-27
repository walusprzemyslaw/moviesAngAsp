import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  genres = [{ id: 1, name: 'Drama' },
    { id: 2, name: 'Comedy' }]

  movies = [
    { title: 'Spider-Man', poster: 'https://fwcdn.pl/fpo/02/61/850261/7985244.6.jpg' },
    { title: 'BadBoys', poster: 'https://fwcdn.pl/fpo/10/40/1040/6925681.6.jpg' },
    { title: 'Batman', poster: 'https://fwcdn.pl/fpo/63/18/626318/7992342.6.jpg' },
  ]

  originalMovies = this.movies;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false,
    })

    this.form.valueChanges
      .subscribe(values => {
        this.movies = this.originalMovies;
        this.filterMovies(values);
      });
        
  }

  filterMovies(values: any) {
    if (values.title) {
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }
  }

  clearForm() {
    this.form.reset();
  }

}
