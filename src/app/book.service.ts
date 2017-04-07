import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class BookService {
  books: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.books = af.database.list('books');
  }

  getBooks(){
    return this.books;
  }

  getBook(bookId: string){
    return this.af.database.object('books/' + bookId);
  }

}
