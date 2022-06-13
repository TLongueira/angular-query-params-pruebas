import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  template: `
  Search values are:
  <ul *ngIf="preguntas">
    <li *ngFor="let val of preguntas">{{val}}</li>
  </ul>
  `,
})
export class SearchComponent implements OnInit {
  data: {
    preguntas: string[];
    dni: string;
  };
  preguntas: string[];

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    /*
    this.route.queryParamMap.subscribe(
      (params) => (this.algo = params.getAll('data'))
    );
    console.log(JSON.stringify(this.algo.preguntas));
    */

    this.route.paramMap.subscribe((params) => {
      this.data = window.history.state;
      this.preguntas = this.data.data.preguntas;
      console.log(this.preguntas);
    });
    /*
    const state = this.location.getState();
    this.data = state;
    this.preguntas = this.data.preguntas;
    console.log(this.data);
    console.log(this.preguntas);
    */
  }
}
