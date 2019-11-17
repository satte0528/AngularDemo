import { AppComponent } from './../app.component';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-timer',
  templateUrl: './my-timer.component.html',
  styleUrls: ['./my-timer.component.scss']
})
export class MyTimerComponent extends AppComponent implements OnInit, OnDestroy {

  @Input() x: string ="None";

  constructor() {
    super();
   }

  ngOnInit() {

    
  }

  ngOnDestroy() {

  }

}
