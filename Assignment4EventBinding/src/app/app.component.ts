import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evens: number[] = [];
  odds: number[] = [];

  OnIntervalEmmited(num: number) {
    if (num % 2 === 0) {
      this.evens.push(num);
    } else {
      this.odds.push(num);
    }
  }

}
