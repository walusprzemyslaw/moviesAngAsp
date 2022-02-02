import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { coocoordinatesMapWithMessage } from 'src/app/utilities/map/cooridinates';
import { movieDTO } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
    ) { }

    movie: movieDTO;
    releaseDate: Date;
    trailerURL: SafeResourceUrl;
    coordinates: coocoordinatesMapWithMessage[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moviesService.getById(params.id).subscribe(movie => {
        console.log(movie);
        this.movie = movie;
        this.releaseDate = new Date(movie.releaseDate);
        this.trailerURL = this.generateYtURLForEmbeddedVideo(movie.trailer);
        this.coordinates = movie.movieTheaters.map(movieTheater => {
          return {latitude: movieTheater.latitude, longitude: movieTheater.longitude, message: movieTheater.name}
        });
      });
    });
  }

  generateYtURLForEmbeddedVideo(url: any): SafeResourceUrl{
    if (!url){
      return '';
    }
    let videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indeOf('&');
    if (ampersandPosition !== -1){
      videoId = videoId.substring(0, ampersandPosition);
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

}
