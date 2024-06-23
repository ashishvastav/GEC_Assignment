import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;
    console.log(value,'hello');
    console.log(args,'hi');
    args = args.toLowerCase();
    return value.filter(function(item:any){
      return JSON.stringify(item).toLowerCase().includes(args);
    })

  }

}
