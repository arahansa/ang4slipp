import { B02Databinding2Page } from './app.po';

describe('b02-databinding2 App', () => {
  let page: B02Databinding2Page;

  beforeEach(() => {
    page = new B02Databinding2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
