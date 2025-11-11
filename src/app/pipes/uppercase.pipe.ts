import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
