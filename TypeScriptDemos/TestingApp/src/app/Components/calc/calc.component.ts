import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  //U R creating a Calc Program....
  constructor() { }
  firstValue : number  =0;
  secondValue : number  =0;
  resultValue : number  =123;
  operand : string ="+";

  ngOnInit() {
  }
  
  process(){
    switch (this.operand) {
      case "+":
        this.resultValue = this.firstValue + this.secondValue;
        break;
      case "-":
        this.resultValue = this.firstValue - this.secondValue;
        break;
      case "X":
        this.resultValue = this.firstValue * this.secondValue;
        break;
      default:
        this.resultValue = this.firstValue / this.secondValue;
        break;
    }
  }
}
