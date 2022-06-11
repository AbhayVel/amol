import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QMathService {

  constructor() { }


  showTimePro() : Promise<string> {
    return new Promise((res) => {
      setInterval(() => {
        res((new Date()).toString())
      }, 1000)
    })
  }


  showTimeObs() : Observable<string> {
    return new Observable((o: Observer<any>) => {
      let i = 0;
      setInterval(() => {
        o.next((new Date()).toString());

        i++;
        if (i == 4) {
          o.complete()
        }


      }, 1000)
    })
  }


  divObs(a: any, b: any) {
    return new Observable((o: Observer<any>) => {

      console.log("I am in Observable");
      if (isNaN(b)) {
        o.error("B is not a number");
        return;
      }
      setTimeout(() => {
        o.next(+a / +b);
      },0)
      

    });
  }

  div(a: any,b: any) : Promise<any> {


    return new Promise((res,rej) => {
      console.log("I am in promise");
      if (isNaN(b)) {
        rej("B is not a number");
        return;
      }
      res(+a / +b);

    });
    
        }
}
