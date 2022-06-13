import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  search() {
    const options = {
      queryParams: { data: ['chuck', 'norris', 'vs', 'keanu', 'reeves'] },
    };
    const options2 = {
      queryParams: { preguntas: ['p1', 'p2', 'p3'], dni: 'dni' },
    };
    const options3 = {
      state: {
        data: {
          preguntas: ['p1', 'p2', 'p3'],
          dni: 'dni',
        },
      },
    };
    this.router.navigate(['/search'], options3);
  }
}
