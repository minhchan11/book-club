import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers:[BookService]
})

export class BooksComponent implements OnInit {
  allBooks: FirebaseListObservable<any[]>;
  bookType: string = "All";
  currentRoute = this.router.url;

  constructor( private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.allBooks = this.bookService.getBooks();
  }

  bookDetail(bookId: string){
    this.router.navigate(['books', bookId]);
  }

  filter(option){
    this.bookType = option;
  }
  
  panelColor(book){
    if(book.genre === "Teens"){
      return "panel panel-success";
    } else if (book.genre === "Children"){
      return "panel panel-warning"
    } else {
      return "panel panel-info"
    }
  }

}
