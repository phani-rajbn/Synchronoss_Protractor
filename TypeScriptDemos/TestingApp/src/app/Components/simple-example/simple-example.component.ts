import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mySimpleExample',
  templateUrl: './simple-example.component.html',
  styleUrls: ['./simple-example.component.css']
})
export class SimpleExampleComponent implements OnInit {

  constructor() { }
  title : string; 
  info : string;
  ngOnInit() {
    this.title ="Simple Example";
    this.info ="Testing Paragraph for the example";
  }
}
