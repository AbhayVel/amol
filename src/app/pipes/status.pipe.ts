import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: string): string {

    if (status === 'active') {
      return ` <span class="badge bg-success">Active</span>`;
    } else {
     return ` <span class="badge bg-danger">Inactive</span>`;
    }
    
  }

}
