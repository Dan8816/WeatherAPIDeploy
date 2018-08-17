import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dojo Weather Forecast';
  dojos = [];
  city: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}
  ngOnInit(){
    this.getDojosFromService();
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
    });
  }
  getDojosFromService(){
    let observable = this._httpService.getDojos();
    observable.subscribe(data => {
      console.log("Got our Dojos");
      for (var i in data){
        this.dojos.push(data[i]);
        console.log("this is dojo: " + data[i].name);
      }
    })
  }
  cityToget(city): void{
    this.city = city;
    console.log(`click event is working and the city param: ${city}`);
    //this._router.navigate([`/${city}`]);
  }
}
