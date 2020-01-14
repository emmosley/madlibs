import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceholderPipe implements PipeTransform {

  transform(value: any, placeholder?: string): any {
    if(!value) {
      if (placeholder) {
        return placeholder;
      }
      return '-';
    }
    return value;
  }

}