import { actorsMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movie-theaters/movie-theaters.model";

export interface movieCreationDTO {
  title: string;
  summary: string;
  poster: File;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
  generesIds: number[];
  movieTheatersIds: number[];
  actors: actorsMovieDTO[];
}

export interface movieDTO {
  title: string;
  summary: string;
  poster: string;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
  genres: genreDTO[];
  movieTheaters: movieTheaterDTO[];
  actors: actorsMovieDTO[];
}

export interface MoviePostGetDTO{
  genres: genreDTO[];
  movieTheaters: movieTheaterDTO[];
}