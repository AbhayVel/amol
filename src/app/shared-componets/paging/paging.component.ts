import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageConfig } from '../../models/page-config';


 
@Component({
  selector: 'qdn-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {


  @Input('config') config: PageConfig = new PageConfig(); //Parent Child

  @Output('change') change: EventEmitter<any> = new EventEmitter<any>(); //Parent Child

  constructor() { }

  ngOnInit(): void {
  }

  pageChange(p: number) {
    if (p < 1) {
      return;
    }
    if (p > this.config.pages[this.config.pages.length - 1]) {
      return;
    }
    this.config.currentPage = p;

    this.change.next(p);
  }

}
