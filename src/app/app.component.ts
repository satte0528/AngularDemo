import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app2';
  hour = 30;
  min= 10;

  days=['sun','mon', 'tue'];

  m1() {
    console.log('m1');
    this.title = "Krishna";
  }
}
