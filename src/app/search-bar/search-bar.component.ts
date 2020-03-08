import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallsService } from './apicalls.service';


@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchTerm: string;

  miles = []

  searchForm: FormGroup;
  data = [];
  results ;

  constructor(
    private formBuilder: FormBuilder,
    private service: ApicallsService
  ) {
    this.searchForm = formBuilder.group({
      Keyword: ['', Validators.required],
      Location: ['', Validators.required],
      Distance: ['', Validators.required]
    });
  }

  ngOnInit() {
    for (var i = 1; i < 16; i++) {
      this.miles.push(i);
    }
    this.getData();
  }
  // get data from api 
  getData() {
    this.service.getJobs().subscribe(data => {
      this.data = data ;
      console.log('data',this.data)
    },err => {
      console.log(err);
    })
  }

// search functions
search(){
  // get params
  let params = {
    jobtitle: this.searchForm.value.Keyword ,
    location: this.searchForm.value.Location,
    distance: this.searchForm.value.Distance
  }
  // query with above params
  this.getMySearchResults(params);
  console.log(this.results);


}
getMySearchResults(params){
   this.results = this.data.filter((item) => {
    for(var kw in params){
      if (item[kw.toLocaleLowerCase()] === undefined || item[kw.toLocaleLowerCase()] != params[kw.toLocaleLowerCase()]){  return false ;}
      // return true ;
    }
    return true ;
  });
}



}
