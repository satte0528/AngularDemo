import { Component, OnInit, OnDestroy } from '@angular/core';
import { DemoService } from 'src/app/shared/services/demo.service';

interface Posts {
  userId: number,
  id: number,
  title: string,
  body: string
}


@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.scss']
})
export class NewemployeeComponent implements OnInit, OnDestroy {

  jsonData: Posts[];
  inputName = 'TEST';
  constructor(
    private _service: DemoService
  ) {
    console.log('In constructor');
  }

  ngOnInit() {
    console.log('In onInit: ');

    this._service.testM().subscribe(
      data => {
        this.jsonData = data;
        console.log(this.jsonData);
      }
      , error => {
        console.log('Error', error);
      }
    );

  }

  ngOnDestroy() {
    console.log('In onDestroy');
  }

  test() {
    this.inputName = "Saved...";
  }

}
