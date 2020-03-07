import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApicallsService {

  constructor(
    private http: HttpClient
  ) { }

  // make a call to the job search api

  getJobs(keyword: string, location: string, distance: string) {


    // make the call
    return this.http.get('https://jobs.github.com/positions.json' + '?description=' + keyword + '&location=' + location+'&distance='+distance)

  }


}
