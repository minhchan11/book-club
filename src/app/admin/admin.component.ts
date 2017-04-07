import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable} from 'angularfire2';

import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BookService]
})
export class AdminComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  addBook(title: string, genre: string, content: string){
    var newBook = new Book(title, genre, content);
    this.bookService.addBook(newBook);
  }
}
