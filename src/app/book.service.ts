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

  addBook(newBook: Book){
    this.books.push(newBook);
  }

  editBook(book){
    var editedBook = this.getBook(book.$key);
    editedBook.update({title:book.title,
                       genre: book.genre,
                       content: book.content
                        })
  }

  deleteBook(book){
    var deletedBook = this.getBook(book.$key);
    deletedBook.remove();
  }
}
