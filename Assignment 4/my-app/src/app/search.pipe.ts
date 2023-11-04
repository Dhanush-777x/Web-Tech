import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return [];
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter((item: any) => {
      return (
        item.name.toLowerCase().includes(args) ||
        item.description.toLowerCase().includes(args) ||
        item.price.toLowerCase().includes(args)
      );
    });
  }
}