import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  template: `
  Search values are:
  <ul *ngIf="data.preguntas">
    <li *ngFor="let val of data.preguntas">{{val}}</li>
  </ul>
  `,
})
export class SearchComponent implements OnInit {
  data: {
    preguntas: string[];
    dni: string;
  };
  algo;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    /*
    this.route.queryParamMap.subscribe(
      (params) => (this.algo = params.getAll('data'))
    );
    console.log(JSON.stringify(this.algo.preguntas));
    */
    console.log(this.location.getState());
  }
}
