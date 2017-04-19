import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  date = this.getdate();
  constructor() { }

  ngOnInit() {
  }

  getdate() {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  }

}
