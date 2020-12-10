import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter2'
})
export class FilterPipe2 implements PipeTransform {

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
        return item.name.toUpperCase().startsWith(searchText) == true;
    })
    if(this.result.length == 0)
    this.result = items.filter(item => {
        return item.userId.toUpperCase().startsWith(searchText) == true;
    })
    if(this.result.length == 0)
    this.result = items.filter(item => {
        return item.email.toUpperCase().startsWith(searchText) == true;
    })
    if(this.result.length == 0)
    this.result = items.filter(item => {
        return item.batch.toUpperCase().startsWith(searchText) == true;
    })
    return this.result;
  }
}