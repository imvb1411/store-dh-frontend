import { Pipe, PipeTransform } from '@angular/core';
import { Color } from 'src/app/core/http/warehouses/warehouse.dto';

@Pipe({
  name: 'colorPipe'
})
export class ColorPipe implements PipeTransform {

  transform(value: Color): string {
    switch(value) {
      case Color.Red:
        return "Rojo";
      case Color.Black:
        return "Negro";
      case Color.Green:
        return "Verde";
      case Color.Yellow:
        return "Amarillo";
      default:
        return "undefined";
    }
  }

}
