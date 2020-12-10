import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter3'
})
export class FilterPipe3 implements PipeTransform {

    result: any[];

  constructor() { }

  transform(items: any[], searchText?: string): any[] {
    if (!searchText) {
      return items;
    }
    else {
      searchText = searchText.toUpperCase();
    }
    this.result = items.filter(item => {
        return item.userId.toUpperCase().startsWith(searchText) == true;
    })
    return this.result;
  }
}