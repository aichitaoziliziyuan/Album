import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageLayout',
})
export class ImageLayoutPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let a = value.length >= 2 ? 2 : 1;
    return 24 / a;
  }
}
