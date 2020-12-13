import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: String;
  date: string;
  price: number;
  height: number;
  miles: number;
  
  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
  onNameChange(value: string) {
    this.name = value;
  }
  onDateChange(value: string) {
    this.date = value;
  }
  onPriceChange(value: string) {
    this.price = parseFloat(value);
  }
  onHeightChange(value: string) {
    this.height = parseFloat(value);
  }
}
