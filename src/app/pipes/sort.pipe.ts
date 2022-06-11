import { Pipe, PipeTransform } from '@angular/core';
import { SortConfig } from '../models/sort-config';
import { SharedUtility } from '../utilities/shared-utility';

@Pipe({
  name: 'qdnsortp',
  pure: false
})
export class SortPipe implements PipeTransform {


 

  transform(valueArray: Array<any>,sortConfig: SortConfig ): Array<any> {
    let columnName = sortConfig.columnName;
    let columnType = sortConfig.columnType;
    let orderBy = sortConfig.orderBy;

    valueArray.sort((e1: any, e2: any) => {  ///  callback es 5  //Arrow function is available in es 6 and above

      if (sortConfig.customLogic) { //function injection
        return sortConfig.customLogic(e1, e2, sortConfig);
      }

      if (columnType == 'cistr') {
        return e1[columnName].toLowerCase() > e2[columnName].toLowerCase() ? orderBy : -1 * orderBy;
      } else if (columnType == 'date') {
        let val1 = SharedUtility.convertDate(e1[columnName]);
        let val2 = SharedUtility.convertDate(e2[columnName]);


        return val1 > val2 ? orderBy : -1 * orderBy;
      } else {
        return e1[columnName] > e2[columnName] ? orderBy : -1 * orderBy;
      }

    });



    return valueArray;
  }

}
