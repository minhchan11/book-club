import { Pipe, PipeTransform } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BookService } from './book.service';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  bookType:string;

  constructor(private bookService: BookService, private af:AngularFire){}

  transform(value: any, bookType){
    if(bookType != "all"){
      var filteredBooks = this.af.database.list('books',{
        query:{
          orderByChild:'genre',
          equalTo: bookType
        }
      });
      return filteredBooks;
    } else {
      return this.af.database.list('books');
    }
  }
}
