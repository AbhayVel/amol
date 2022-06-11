import { SortConfig } from "../models/sort-config";
import { GenderTitlePipe } from "../pipes/gender-title.pipe";
import { SubjectMasterPipe } from "../pipes/subject-master.pipe";

export class SharedUtility {

  public static nameSearch(e: any, value: string)  {

  let gp = new GenderTitlePipe();
  let val1 = gp.transform(e.name, e.gender);

  return val1.toLowerCase().indexOf(value.toLowerCase()) > -1;
}

  static convertDateString(date: any): any { //class Variable 
    
    let d = SharedUtility.convertDate(date);

    if (!d) {
      return '';
    }

    return SharedUtility.twoDigit(d.getDate()) + "/" + SharedUtility.twoDigit((d.getMonth() + 1)) + "/" + d.getFullYear();


  }

  static twoDigit(num: any) {
    if (+num < 10) {
      return '0' + Math.floor(num);
    } else {
      return Math.floor(num);
    }
  }
 
  static convertDate(date: any): any { //class Variable 
    if (date instanceof Date) {
      return date;
    }
    let arrDate = date.split('/');
    let dt = new Date(arrDate[2], (arrDate[1]-1), arrDate[0]);

    if (isNaN(dt.getDate())) {
      return null;
    }
    return dt;
  }

 static nameSort(e1: any, e2: any, sortConfig: SortConfig)  {
  //u.name | genderTitle:u.gender

  let gp = new GenderTitlePipe();

  let val1 = gp.transform(e1.name, e1.gender);
  let val2 = gp.transform(e2.name, e2.gender);

  return val1.toLowerCase() > val2.toLowerCase() ? 1 * sortConfig.orderBy : -1 * sortConfig.orderBy;

} 

  static subjectNameSort(e1: any, e2: any, sortConfig: SortConfig){
  //u.name | genderTitle:u.gender

  let sp = new SubjectMasterPipe();

  let val1 = sp.transform(e1.subject);
  let val2 = sp.transform(e2.subject);

  return val1.toLowerCase() > val2.toLowerCase() ? 1 * sortConfig.orderBy : -1 * sortConfig.orderBy;

}
}
