import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  fValue : number = 0.0;
  sValue : number = 0.0;
  operand : string = "";
  result : number = 0.0;
  onProcess(){
    console.log('started')
    console.log(this.fValue)
    console.log(this.sValue)
    console.log(this.result)
    switch(this.operand){
      case '+': this.result = this.fValue+this.sValue; break;
      case '-': this.result = this.fValue-this.sValue; break;
      case '*': this.result = this.fValue*this.sValue; break;
      case '/': this.result = this.fValue/this.sValue; break;
    }
  }
}
