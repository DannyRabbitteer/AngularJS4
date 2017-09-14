import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph: boolean = false;
  buttonArray = [];
  numButtonClick = 0;

  OnButtonClick() {
    this.showParagraph = !this.showParagraph;
    this.numButtonClick=this.numButtonClick+1;
    this.buttonArray.push(this.numButtonClick );
    console.log(this.numButtonClick);
  }
}
