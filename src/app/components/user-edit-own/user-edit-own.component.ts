import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'qdn-user-edit-own',
  templateUrl: './user-edit-own.component.html',
  styleUrls: ['./user-edit-own.component.css']
})
export class UserEditOwnComponent implements OnInit {

  @Input('user') user: User = new User;

  error : any= {

  }

  constructor() { }

  ngOnInit(): void {
  }


  updateObject(obje: any, keyInput: string, value: any) {
    let nameArray = keyInput.split(".");
    var output = nameArray.slice(0, nameArray.length - 1).reduce((obj, name) => {
      return obj[name];
    }, obje);
    let key = nameArray[nameArray.length - 1];
    if (output && output.hasOwnProperty(key)) {
      output[key] = value;
    }
  }


  isValid(ele: any, error: any, key : string) {
    error[key] = {};
    if (ele.validity.valueMissing) {
      error[key].required = {required  : true };
    }
    if (ele.validity.patternMismatch) {
      error[key].pattern = { pattern: true };
    }

    if (ele.hasAttribute("min")) {
      let minValue = +ele.getAttribute("min");
      if (+ele.value < minValue) {
        error[key].min = { min: true };
      }
    }

    if (ele.hasAttribute("max")) {
      let maxValue = +ele.getAttribute("max");
      if (+ele.value > maxValue) {
        error[key].max = { max: true };
      }
    }

    if (Object.keys(error[key]).length == 0) {
      error[key] = undefined;
      return true;
    } else {
      return false;
    }
    
  }

  changeValue(eleEvent: any) {
    let ele : any  = eleEvent.target;
    let key = ele.getAttribute("name");


    if (this.isValid(ele, this.error, key)) {
      this.updateObject(this.user, key, ele.value);
    }
   
    
    
  }

  save() {

  }

}
