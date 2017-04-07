import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { BookNewComponent } from './book-new/book-new.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'book-new',
    component: BookNewComponent
  },
  {
    path: 'books/:id',
    component: BookComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes;)