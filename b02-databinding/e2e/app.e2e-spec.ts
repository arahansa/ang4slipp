import { B02DatabindingPage } from './app.po';

describe('b02-databinding App', () => {
  let page: B02DatabindingPage;

  beforeEach(() => {
    page = new B02DatabindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
