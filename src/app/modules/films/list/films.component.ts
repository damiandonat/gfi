import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films/films.service';
import { AccountService } from 'src/app/services/account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  public films: any = new Array();
  constructor(
    private filmsService: FilmsService,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.accountService.idLogged()) {
      this.callFilms()
    } else {
      this.accountService.removeToken();
      this.router.navigate(['/login']);
    }
  }

  callFilms(): void {
    this.filmsService.callFilms()
    .subscribe(
      (resp: any) => {
        this.films = resp;
      },
      (e: any) => {
        console.log(e);
      }
    )
  }

  favourite(item: any): void {
    if (!item) return;

    this.filmsService.favourite(item)
    .then((resp: any) => {
      alert(resp.message);
    })
    .catch((e: any) => {
      alert(e.message);
    });

  }

  details(item: any): void {
    if (!item) return;
    this.router.navigate(['/films/detail'], {
      queryParams: item
    });
  }

}
