import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[qdnFirst]',
  
})
export class FirstDirective implements OnInit {

  constructor(private ele: ElementRef<any>) { }
  ngOnInit(): void {
    if (this.ele && this.ele.nativeElement) {
      this.SetColor(this.ele.nativeElement);
    }
     
  }


  @HostListener('input',['$event.target', '$event'])
  SetColor(ele: any) {
    var value = +ele.value;
    if (isNaN(value)) {
      ele.style.backgroundColor = "yellow";
      return;
    }

    if (value > 60) {
      ele.style.backgroundColor = "red";
    } else if (value > 18) {
      ele.style.backgroundColor = "green";
    } else {
      ele.style.backgroundColor = "yellow";
    }

  }




}
