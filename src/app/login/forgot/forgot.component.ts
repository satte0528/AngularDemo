import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  @Input()
  name:string='KKK';

  constructor() { }

  ngOnInit() {
  }


  test() {
    console.log('clicked',this.name);
  }

}
