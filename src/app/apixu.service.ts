import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    return this.http.get(
      'http://api.apixu.com/v1/current.json?key=c3a30839844242f382b133234192404&q=' + location
    );
  }
}
