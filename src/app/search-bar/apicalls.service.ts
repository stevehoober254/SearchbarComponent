import { Injectable } from '@angular/core';
import {Http} from '@angular/http' ;
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {

  constructor(
    private http: Http
  ) { }

  // make a call to the job search api

  getJobs() {
    // make the call
    return this.http.get('../../assets/data.json').pipe(map(res => res.json().data));
  }


}
