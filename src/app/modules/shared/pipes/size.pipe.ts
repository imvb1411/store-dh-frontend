import { Pipe, PipeTransform } from '@angular/core';
import { Size } from 'src/app/core/http/warehouses/warehouse.dto';

@Pipe({
  name: 'sizePipe'
})
export class SizePipe implements PipeTransform {

  transform(value: Size): string {
    switch(value) {
      case Size.XSmall:
        return "XSmall";
      case Size.Small:
        return "Small";
      case Size.Medium:
        return "Medium";
      case Size.Large:
        return "Large";
      case Size.XLarge:
        return "XLarge";
      default:
        return "undefined";
    }
  }

}
