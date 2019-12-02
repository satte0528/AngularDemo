import { DemoService } from './../../core/services/demo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataArr:any[] = [];

  constructor(private _service: DemoService) {
   }

  ngOnInit() {
    this._service.getAllBreeds().subscribe((data: any) => {
      console.log(data);
      this.dataArr = data.message.terrier;
    });
  }


}
