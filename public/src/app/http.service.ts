import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getDojos();
  }
  getDojos(){
    return this._http.get('/main');
  }
  cityToget(city: String){
    console.log("httpservice**********" + city + "**********")
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=6feeef893a92d57711229dd04f29f4d2`).toPromise();
  }
}
