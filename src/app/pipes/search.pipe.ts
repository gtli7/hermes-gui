import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchField?: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      if (searchField) {
        return item[searchField] && item[searchField].toString().toLowerCase().includes(searchText);
      }
      
      return Object.keys(item).some(key => {
        const value = item[key];
        return value && value.toString().toLowerCase().includes(searchText);
      });
    });
  }
}
