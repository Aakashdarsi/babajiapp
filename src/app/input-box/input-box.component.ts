import { Component } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent {
city = "Hyderabad"
updateCity()
{
  this.city = "Banglore";
}
updateCityNew(cityName:string)
{
  this.city = cityName
}
person = "Aakash"
}
