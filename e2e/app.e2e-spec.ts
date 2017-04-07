import { BookClubPage } from './app.po';

describe('book-club App', () => {
  let page: BookClubPage;

  beforeEach(() => {
    page = new BookClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
