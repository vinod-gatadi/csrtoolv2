import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  term: string;
  searching = false;
  results: any;

  ngOnInit() {
    // if we have a search term, apply it
    this.route.paramMap.pipe().subscribe((params:any) => {
      if (params.has('term')) {
        this.term = params.get('term');
        this.search(this.term);
      }
    });
  }

  async search(term: string) {
    this.searching = true;
    try {
      this.results = undefined;
      
    } catch (ex) {
      //this.handleErrors(ex);
    } finally {
      this.searching = false;
      
    }
  }
  
  }

  
