import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { SharedUtility } from '../utilities/shared-utility';

@Directive({
  selector: '[qdnDate]'
})
export class DateDirective implements OnChanges {

  constructor(private ele: ElementRef<any>) { }
  ngOnChanges(changes: SimpleChanges): void {

    if (this.qdnDate != this.ele.nativeElement.value) {
      this.ele.nativeElement.value = this.qdnDate;
        this.setDate(this.ele.nativeElement);
      }
    }
  isValid = true;

  @Input('qdnDate') qdnDate?: any;

  @Output('qdnDateChange') qdnDateChange: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.red') get valid() { return !this.isValid; }

  ngOnInit(): void {
    if (this.ele && this.ele.nativeElement) {
      this.ele.nativeElement.value = this.qdnDate;
      this.setDate(this.ele.nativeElement);
    }

  }

  @HostListener('blur', ['$event.target'])
  setDate(ele: HTMLInputElement) {
    debugger;
    let valstring = ele?.value?.toLowerCase();
    let val: any = "";
    let inc: any = 0;
    if (valstring.indexOf("+") > -1) {
      var valArray = valstring.split("+").map((e) => {
      return  e.trim();
      });

      val = valArray[0];
      if (valArray.length > 0) {
        if (!isNaN(+valArray[1])) {
          inc = +valArray[1]
        }
      }
     
     
    } else if (valstring.indexOf("-") > -1) {
      var valArray = valstring.split("-").map((e) => {
       return e.trim();
      });

      val = valArray[0];
      if (valArray.length > 0) {
        if (!isNaN(+valArray[1])) {
          inc = +valArray[1] * -1;
        }
      }
    } else {
      val = valstring;
    }
    let d = new Date();

    if ("today".indexOf(val) > -1) {
      d.setDate(d.getDate()  + inc)
      ele.value = SharedUtility.convertDateString(d);
    } else if ("tomorrow".indexOf(val) > -1) {
      d.setDate(d.getDate()+1+inc)
      ele.value = SharedUtility.convertDateString(d);
    } else if ("yesterday".indexOf(val) > -1) {
      d.setDate(d.getDate() - 1+ inc)
      ele.value = SharedUtility.convertDateString(d);
    } else {
      ele.value = SharedUtility.convertDateString(val);
    }

    this.qdnDate = ele.value;
    this.qdnDateChange.emit(ele.value);
  }

}
