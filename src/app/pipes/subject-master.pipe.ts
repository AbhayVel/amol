import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subjectMaster'
})
export class SubjectMasterPipe implements PipeTransform {

  subjectArray = [
    {
      id: 1,
      name: 'Angular'
    },
    {
      id: 2,
      name: '.net'
    },
    {
      id: 3,
      name: 'Selenium'
    },
    {
      id: 4,
      name: 'Java'
    }

  ]


  transform(value: number): string {

  let index=  this.subjectArray.findIndex((e) => {
      return e.id == value;
  })

    if (index > -1) {
      return this.subjectArray[index].name;
    } else {
      return 'NA';
    }


  }

}
