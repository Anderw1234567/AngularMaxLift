import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'maxlift';

  guysName = '';
  displayWelcomeName = false;

  constructor() { }

  ngOnInit() {
  }


  clickNameButton(){

    console.log("HELLO" + this.guysName)
    this.displayWelcomeName = !this.displayWelcomeName;
  }
}
