import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';


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

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.searchForm = formBuilder.group({
      Keyword: [this.keyword, Validators.required],
      Location: [this.location, Validators.required],
      Distance: [this.distance, Validators.required]
    });
  }

  ngOnInit() {
    for(var i = 1;i<16;i++){
      this.miles.push(i);
    }
  }

  // search function

  search() {
    console.log(this.searchForm.value);

  }





}
