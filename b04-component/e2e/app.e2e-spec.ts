import { B04ComponentPage } from './app.po';

describe('b04-component App', () => {
  let page: B04ComponentPage;

  beforeEach(() => {
    page = new B04ComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
