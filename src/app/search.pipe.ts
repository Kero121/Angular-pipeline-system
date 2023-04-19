import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any, term:string){
  if (!value || value.length == 0) {
    return value;
  }
  else{
        return value.filter((item:any) => {
        return item.email.toLowerCase().includes(term.toLowerCase()) || item.first_name.toLowerCase().includes(term.toLowerCase()) || item.last_name.toLowerCase().includes(term.toLowerCase());
    });
  }

}

}
