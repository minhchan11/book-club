import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'books/:id',
    component: BookComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
