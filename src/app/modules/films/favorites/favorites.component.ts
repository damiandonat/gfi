import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films/films.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  public favourite: any;
  constructor(
    private filmsService: FilmsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.favourite = this.filmsService.getFavouriteList();
  }

  details(item: any): void {
    if (!item) return;
    this.router.navigate(['/films/detail'], {
      queryParams: item
    });
  }

}
