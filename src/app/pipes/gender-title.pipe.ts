import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderTitle'
})
export class GenderTitlePipe implements PipeTransform {

  transform(name: any, gender : string): string {


    if (gender == 'M') {
      return 'Mr ' + name.firstName + ' ' + name.lastName;
    } else if (gender == 'F') {
      return 'Miss ' + name.firstName + ' ' + name.lastName;
    } else {
      return name.firstName + ' ' + name.lastName;
    }

    //return gender == 'M' ? 'Mr ' + name : 'Miss ' + name;
  }

}
