import { AbstractControl, NgModel, ValidationErrors } from "@angular/forms";

export class CustomValidators {

  static capitalizeWord() {

    return (control: AbstractControl) => {

      const value = control.value;
      if (value) {
        if (!(value.charCodeAt(0) >= 65 &&
          value.charCodeAt(0) <= 90)
        ) {
          return { captial: true };
        }
      }
      return null;
    }
  }


  static compareControlValue(compareControl?: NgModel) {
    return (control: AbstractControl) => {

      const value = control.value;
      const compareValue = compareControl?.value;
     
        if (value!=compareValue ) {
          return { compare: true };
        }
      
      return null;
    }
  }


}
