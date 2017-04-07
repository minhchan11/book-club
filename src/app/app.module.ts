import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { masterFirebaseConfig } from './api-keys';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    BooksComponent,
    BookComponent,
    BookNewComponent,
    BookEditComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }