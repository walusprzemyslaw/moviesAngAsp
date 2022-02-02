import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movieTheaterDTO, movieTheatersCreationDTO } from './movie-theaters.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + '/movietheaters';

  public get(): Observable<movieTheaterDTO[]>{
    return this.http.get<movieTheaterDTO[]>(this.apiURL);
  }

  public getById(id: number): Observable <movieTheaterDTO>{
    return this.http.get<movieTheaterDTO>(`${this.apiURL}/${id}`);
  }

  public create(movieTheaterDTO: movieTheatersCreationDTO){
    return this.http.post(this.apiURL, movieTheaterDTO);
  }

  public edit(id: number, movieTheaterDTO: movieTheatersCreationDTO){
    return this.http.put(`${this.apiURL}/${id}`, movieTheaterDTO);
  }

  public delete(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
