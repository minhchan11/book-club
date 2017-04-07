import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable} from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {
  bookId: string;
  book: FirebaseObjectObservable<any>;

  constructor(private route: ActivatedRoute, private location: Location, private bookService: BookService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.bookId = urlParameters['id'];
    });
    this.book = this.bookService.getBook(this.bookId);
  }

}
