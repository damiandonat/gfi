import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public film: any;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.film = this.activatedRoute.snapshot.queryParamMap;
    console.log(this.film);
  }
}
