import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'qdn-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

  @Input('formGroup') formGroup: FormGroup = new FormGroup({});
  @Input('formName') formControlName: string =''
  @Input('controlName') controlName: string = '';
  @Input('errorMessage') errorMessage: any = {};
 
  controlNameError = '';

  constructor() { }

  ngOnInit(): void {
    if (this.formControlName) {
      this.controlNameError = this.formControlName + "." + this.controlName;
    } else {
      this.controlNameError = this.controlName;
    }
    
  }

}
