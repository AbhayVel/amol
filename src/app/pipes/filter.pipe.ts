import { Pipe, PipeTransform } from '@angular/core';
import { SharedUtility } from '../utilities/shared-utility';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(valueArray: Array<any>, filterConfig: any): Array<any> {
    let filter = filterConfig.filter;
    let rows = valueArray;

    for (var key in filter) {
      if (filter.hasOwnProperty(key)) {
        rows = rows.filter((e: any) => {
          if (filter[key].columnValue === '') {
            return true;
          }


          if (filter[key].customLogic) {
            return filter[key].customLogic(e, filter[key].columnValue);
          }



          if (filter[key].columnType == 'cistr') {
            return e[filter[key].columnName].toLowerCase().indexOf(filter[key].columnValue.toLowerCase()) > -1;
          } else if (filter[key].columnType == 'cistrematch') {
            return e[filter[key].columnName].toLowerCase() == filter[key].columnValue.toLowerCase();
          } else if (filter[key].columnType == 'numGte') {
            return e[filter[key].columnName] >= filter[key].columnValue;
          } else if (filter[key].columnType == 'numLte') {
            return e[filter[key].columnName] <= filter[key].columnValue;
          } else if (filter[key].columnType == 'dateGte') {
            let val1 = SharedUtility.convertDate(e[filter[key].columnName]);
            let val2 = SharedUtility.convertDate(filter[key].columnValue);
            return val1 >= val2;
          } else if (filter[key].columnType == 'dateLte') {
            let val1 = SharedUtility.convertDate(e[filter[key].columnName]);
            let val2 = SharedUtility.convertDate(filter[key].columnValue);
            return val1 <= val2;
          } else {
            return e[filter[key].columnName] == filter[key].columnValue;
          }
        })
      }


    }


    return rows;
  }

}
