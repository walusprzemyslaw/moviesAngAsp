import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from '../../utilities/multiple-selector/multiple-selector-model';
import { movieCreationDTO, movieDTO } from '../movies.model';


@Component({
  selector: 'app-form-movies',
  templateUrl: './form-movies.component.html',
  styleUrls: ['./form-movies.component.css']
})
export class FormMoviesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: movieDTO

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  nonSelectedGeneres: multipleSelectorModel[] = [
    { key: 1, value: 'Comedy' },
    { key: 2, value: 'Drama' },
    { key: 3, value: 'Action' },
  ];

  selectedGeneres: multipleSelectorModel[] = [];

  nonSelectedMovieTheaters: multipleSelectorModel[] = [
    { key: 1, value: 'Kinoplex' },
    { key: 2, value: 'Multikino' },
    { key: 3, value: 'MegaVideo' },
  ];

  selectedMovieTheaters: multipleSelectorModel[] = [];

  ngOnInit(): void {
  
    this.form = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      movieTheatersIds: '',
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(file: File) {
    this.form.get('poster').setValue(file);
  }

  changeMarkdown(content: string) {
    this.form.get('summary').setValue(content);
  }

  saveChanges() {
    const genresIds = this.selectedGeneres.map(value => value.key);
    this.form.get('genresIds').setValue(genresIds);
    const movieTheatersIds = this.selectedMovieTheaters.map(value => value.key);
    this.form.get('movieTheatersIds').setValue(movieTheatersIds);
    this.onSaveChanges.emit(this.form.value);
  }
}
