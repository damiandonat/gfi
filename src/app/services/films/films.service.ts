import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api/films/api.service';
import { FormArrayName } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }

  callFilms() {
    return this.http.get(this.apiService.all());
  }

  favourite(item: any) {

    let responseObject = {
      error: false,
      message: ''
    }
    
    let promise = new Promise((resolve, reject) => {
      try {
        let favourites: any = localStorage.getItem('favourite');
    
        if (!favourites) {
          let arrayItems = new Array();
          arrayItems.push(item);
          localStorage.setItem('favourite', JSON.stringify(arrayItems));
          responseObject.message = 'Add favourite ok';
          resolve(responseObject);
        } else {
          favourites = JSON.parse(favourites);

          const itemF = favourites.find((f) => {
            return f.Title === item.Title;
          });

          if (itemF) {
            responseObject.error = true;
            responseObject.message = 'You already added this movie';
            reject(responseObject);
          } else {
            favourites.push(item);
            localStorage.setItem('favourite', JSON.stringify(favourites));
            responseObject.message = 'Add favourite ok';
            resolve(responseObject);
          } 
        }
      } catch (error) {
        console.log(error);
        responseObject.error = true;
        responseObject.message = 'A mistake has occurred, try again later';
        reject(responseObject);
      }
    });

    return promise;
  }

  getFavouriteList() {
    let favourite = localStorage.getItem('favourite');

    if (!favourite) {
      return [];
    }

    return JSON.parse(favourite);
  }}
