import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';

import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  providers: [BookService]
})
export class BookEditComponent implements OnInit {
  @Input() book;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  editBook(book){
    this.bookService.editBook(book);
    this.router.navigate(['books', book.$key]);
  }

  deleteBook(book){
    if(confirm("Are you sure you want to delete this book?")){
      this.bookService.deleteBook(book)
    }
  }
}
