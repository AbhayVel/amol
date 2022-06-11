import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChildren, DoCheck, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { AccordianDirective } from './accordian.directive';

@Component({
  selector: 'qdn-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit , AfterContentInit , AfterViewInit, DoCheck,AfterContentChecked, AfterViewChecked, OnDestroy, OnChanges {

  @ContentChildren(AccordianDirective) ac?: QueryList<AccordianDirective>;

  @Input('showAllA') showAllA?: string;



  constructor() {
    console.log("I am in constructor");

  }
    ngAfterContentChecked(): void {
      console.log("I am in ngAfterContentChecked");
    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log("I am in ngOnChanges");
    }
    ngOnDestroy(): void {
      console.log("I am in ngOnDestroy");
    }
    ngAfterViewChecked(): void {
      console.log("I am in ngAfterViewChecked");
    }
    ngDoCheck(): void {
      console.log("I am in ngDoCheck");
    }
    ngAfterViewInit(): void {
      console.log("I am in ngAfterViewInit");
    }
    ngAfterContentInit(): void {
      console.log("I am in ngAfterContentInit");
  }
  showAll(a: AccordianDirective) {
    if (a.isShow == '1') {
      a.isShow = '0';
    } else {
      a.isShow = '1';
    }

  }

  show(a: AccordianDirective) {
    if (this.showAllA == '0') {
      this.showAll(a);
    } else {
      this.ac?.forEach((e) => {
        if (e == a) {
          a.isShow = '1';
        } else {
          e.isShow = '0';
        }
      })
    }
   
    
  }

  ngOnInit(): void {
    console.log("I am in ngOnInit");
  }

}
