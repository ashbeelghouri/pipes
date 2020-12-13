import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits:string ): any {
    if(!value){
      return '';
    }

    switch (targetUnits) {
      case 'km':
        return value * 1.60931;
      case 'm':
        return value * 1.60931 * 1000;
      case 'm':
        return value * 1.60931 * 1000 * 1000;
      default:
        throw new Error("Target unit not supported");
    }
    return value * 1.60931;
  }

}
