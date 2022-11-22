import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'BMIWebApp'
  name:string = ''
  height:number
  weight:number
  bmi:number

  constructor() {

  }

  ngOnInit() {

  }

  calcBMI() {
    this.bmi = Math.round((this.weight / this.height / this.height) * 703)
  }





}
