import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css']
})
export class DataComponentComponent implements OnInit {
  private result : any;
  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.getRecords()
      .subscribe(arg => {
        this.result = arg
      });
  }//When a method returns an observable, it has a method called subscribe which takes a function that has the result in it. The result is accessed and set to any field of UR component if the subscription succeeds...

}
