import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[qdnAccordian]'
})
export class AccordianDirective {

  @Input('header') header?: string;
  @Input('isShow') isShow?: string;
  @Input('isAlwaysShow') isAlwaysShow?: string;

  constructor(public temp: TemplateRef<any>) {

  }

}
