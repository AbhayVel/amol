import { Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable, Observer, of, Subscription } from 'rxjs';
import { filter, map, skip, startWith, take} from 'rxjs/operators';
import { ObsExamplesService } from '../../services/oba-examples.service';



function myStartWith(str: string) {

  return function (Obs: Observable<any>): Observable<any> {

    
    return new Observable((o: Observer<any>) => {
      Obs.subscribe((r: string) => {

        if (r.startsWith(str)) {
          o.next(r);
        }
          
        
        
      },
        (err) => {
          o.error(err);
        },
        () => {
          o.complete();
        }
      )
    })
  }
}
function mySkip(num: number) {

  return function (Obs: Observable<any>): Observable<any> {

    let i = 1;
    return new Observable((o: Observer<any>) => {
      Obs.subscribe((r) => {
        if (i>num ) {
          o.next(r);
        }
        i = i + 1;
      },
        (err) => {
          o.error(err);
        },
        () => {
          o.complete();
        }
      )
    })
  }
}


function myFilter(callBack: any) {

  return function (Obs: Observable<any>) : Observable<any> {
    return new Observable((o: Observer<any>) => {
      Obs.subscribe((r) => {
        if (callBack(r)) {
          o.next(r);
        }
      },
        (err) => {
          o.error(err);
        },
        () => {
          o.complete();
        }
      )
    })
  }
}

@Component({
  selector: 'qdn-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  constructor(private oes: ObsExamplesService) { }

  interVal !: Subscription;
  interMyVal !: Subscription;

  fromEventSub !: Subscription;
  fromEventMySub !: Subscription;

  @ViewChild('t') t !: ElementRef<any>;

  ngOnInit(): void {

  }

  showOf() {
    of(1, 2, 5, 6, 9).subscribe((r) => {
      console.log("Value of r is :" + r);
    })
  }

  showMyOf() {
    this.oes.myOf(1, 2, 5, 6, 9)
      .subscribe((r) => {
      console.log("Value of r is :" + r);
    })
  }

  showInterval() {
  this.interVal=  interval(1000).subscribe((r) => {
      console.log("showInterval Value of r is :" + r);
    })
  }

  showMyInterval() {
    this.interMyVal =   this.oes.myInterval(1000).subscribe((r) => {
      console.log(" showMyInterval Value of r is :" + r);
    })
  }


  stopInterval() {
    if (this.interVal && !this.interVal.closed) {
      this.interVal.unsubscribe();
    }
  }


  stopMyInterval() {
    if (this.interMyVal && !this.interMyVal.closed) {
      this.interMyVal.unsubscribe();
    }
  }

  addEvent(t: any) {
    if (this.fromEventSub && !this.fromEventSub.closed) {
      return;
    }
    this.fromEventSub=  fromEvent(t, "input").subscribe((r: any) => {
      console.log(" addEvent Value of r is :" + r.target.value);
    })
  }

  stopEvent() {
    if (this.fromEventSub && !this.fromEventSub.closed) {
      this.fromEventSub.unsubscribe();
    }
  }

  addEventMy(t: any) {
    if (this.fromEventMySub && !this.fromEventMySub.closed) {
      return;
    }
    this.fromEventMySub = this.oes.fromEventMy(t, "input").subscribe((r: any) => {
      console.log(" addEvent My Value of r is :" + r.target.value);
    })
  }

  stopEventMy() {
    if (this.fromEventMySub && !this.fromEventMySub.closed) {
      this.fromEventMySub.unsubscribe();
    }
  }
  showError(a: any) {
    a.data.data = 12;
  }


  showOfPipe() {
    of(1, 2, 5, 6, 9,12,34,44,67,88,13,24,56,78,90,23,15,55,66,13,78,55,33,11).pipe(filter((x: number) => x % 2 == 0), map((x: number) => x * 2)).subscribe((r) => {
      console.log("Value of r is :" + r);
    })
  }

  showMyOfPipe() {
    //this.oes.myOf(1, 2, 5, 6, 9, 12, 34, 44, 67, 88, 13, 24, 56, 78, 90, 23, 15, 55, 66, 13, 78, 55, 33, 11)
    //  .pipe(myFilter((x: number) => x % 2 == 0), map((x: number) => x * 2), mySkip(3), take(3))
    //  .subscribe((r) => {
    //    console.log("Value of r is :" + r);
    //  })

    of("ccc", "vvv","aba", "aac", "xxx", "yyy")
      .pipe(myStartWith("a")).subscribe((r) => {
        console.log("Value of r is :" + r);
      })
  }

}
