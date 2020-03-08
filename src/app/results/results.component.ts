import { Component, OnInit, Input } from '@angular/core';
import { Results } from '../model/results';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input('results')results: Results ;

  constructor(

  ) 
  { 
    console.log('results',this.results);
  }

  ngOnInit() {
  }

}
