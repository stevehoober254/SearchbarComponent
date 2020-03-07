import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallsService } from './apicalls.service';
import { Results } from '../model/results';


@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchTerm: string;
  @Input('keyword') keyword: string;
  @Input('location') location: string;
  @Input('distance') distance: number;
  miles = []

  searchForm: FormGroup;
  results : Results;

  constructor(
    private formBuilder: FormBuilder,
    private service: ApicallsService
  ) {
    this.searchForm = formBuilder.group({
      Keyword: [this.keyword, Validators.required],
      Location: [this.location, Validators.required],
      Distance: [this.distance, Validators.required]
    });
  }

  ngOnInit() {
    for (var i = 1; i < 16; i++) {
      this.miles.push(i);
    }
  }

  // search function

  search() {
    console.log(this.searchForm.value);
    // set parameters for search
    let keyword = this.searchForm.value.Keyword;
    let location = this.searchForm.value.Location;
    let distance = this.searchForm.value.Distance;
    
    // send params to service
    this.service.getJobs(keyword,location,distance).subscribe(res => {
      console.log('search results',res);
      this.results = res ;
    },err => {
      console.log(err);
    })

  }





}
