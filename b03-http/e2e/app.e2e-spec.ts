import { B03HttpPage } from './app.po';

describe('b03-http App', () => {
  let page: B03HttpPage;

  beforeEach(() => {
    page = new B03HttpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
