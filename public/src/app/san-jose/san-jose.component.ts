import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';
//import { weatherData } from './../weatherData';
@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  //@Input() cityToget: any;  // use the @Input decorator to indicate this comes from the parent
  city: String = 'San Jose'
  cityData: any;
  imagePath: String; 
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    console.log(`Click event is working in the ${this.city} component`);
    this.imagePath = 'assets/images/San_Jose.jpg'
    this.httpService.cityToget(this.city).then(jsonData => {
      this.cityData = jsonData;
    });
  }
}

