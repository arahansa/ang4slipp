/**
 * Created by jarvis on 2017. 7. 19..
 */

import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name:'honor'})
export class HonorPipe implements PipeTransform{
  transform(value: string): string{
    return `${value}님`;
  }
}
