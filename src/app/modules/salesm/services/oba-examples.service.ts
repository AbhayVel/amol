import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsExamplesService {

  constructor() { }



  myOf(...params: any[]) {

    return new Observable((o: Observer<any>) => {
      for (var i = 0; i < params.length; i++) {
        o.next(params[i]);
      }
      o.complete();
    });
  }

  myInterval(time: number) {

    return new Observable((o: Observer<any>) => {
      let i = 0;
      setInterval(() => {
        o.next(i++);
      }, time)
    });
  }

  fromEventMy(ele: HTMLElement, type: string) {

    return new Observable((o: Observer<any>) => {
      ele.addEventListener(type, ()=> {
        o.next(event);
      })
    });
    
  }



}
