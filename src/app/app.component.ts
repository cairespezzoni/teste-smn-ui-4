import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ÃÉÕ';
  date = this.getdate();

  constructor() {

  }
  getdate() {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  }
}
