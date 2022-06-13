import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  template: `
  Search values are:
  <ul *ngIf="words">
    <li *ngFor="let val of words">{{val}}</li>
  </ul>
  `,
})
export class SearchComponent implements OnInit {

  words: string[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => this.words = params.getAll('words'));
  }

}
