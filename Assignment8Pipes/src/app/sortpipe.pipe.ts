import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortpipe'
})
export class SortpipePipe implements PipeTransform {

  transform(value: any, propertyToSortOn: string): any {
    return value.sort((one, two) => {
      if (one[propertyToSortOn] < two[propertyToSortOn]){
        return 1;
      }
      return -1;
    });
  }

}
