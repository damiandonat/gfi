import { Injectable } from '@angular/core';
import filmsApiFile from 'src/utils/api/film.api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  all(): any {
    return filmsApiFile.all;
  }
}
