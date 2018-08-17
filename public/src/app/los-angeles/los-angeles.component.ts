import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';
//import { weatherData } from './../weatherData';
@Component({
  selector: 'app-los-angeles',
  templateUrl: './los-angeles.component.html',
  styleUrls: ['./los-angeles.component.css']
})
export class LosAngelesComponent implements OnInit {
  //@Input() cityToget: any;  // use the @Input decorator to indicate this comes from the parent
  city: String = 'Burbank'
  cityData: any;
  imagePath: String; 
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    console.log(`Click event is working in the ${this.city} component`);
    this.imagePath = 'assets/images/Los_Angeles.jpg'
    this.httpService.cityToget(this.city).then(jsonData => {
      this.cityData = jsonData;
    });
  }
}