import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';
//import { weatherData } from './../weatherData';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  //@Input() cityToget: any;  // use the @Input decorator to indicate this comes from the parent
  city: String = 'Dallas'
  cityData: any;
  imagePath: String; 
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    console.log(`Click event is working in the ${this.city} component`);
    this.imagePath = 'assets/images/Dallas.jpg'
    this.httpService.cityToget(this.city).then(jsonData => {
      this.cityData = jsonData;
    });
  }
}
