import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() intervalEvent = new EventEmitter<number>();
  counter = 1;

  constructor() {
  }

  ngOnInit() {
  }

  StartGame() {
    this.interval = setInterval(() => {
      this.intervalEvent.emit(this.counter);
      this.counter++;
    }, 2000);
  }

  StopGame() {
    clearInterval(this.interval);
  }
}
