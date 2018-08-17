import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';
//import { weatherData } from './../weatherData';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  //@Input() cityToget: any;  // use the @Input decorator to indicate this comes from the parent
  city: String = 'Chicago'
  cityData: any;
  imagePath: String; 
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    console.log(`Click event is working in the ${this.city} component`);
    this.imagePath = 'assets/images/Chicago.jpg'
    this.httpService.cityToget(this.city).then(jsonData => {
      this.cityData = jsonData;
    });
  }
}