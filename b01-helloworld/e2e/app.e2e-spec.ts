import { B01HelloworldPage } from './app.po';

describe('b01-helloworld App', () => {
  let page: B01HelloworldPage;

  beforeEach(() => {
    page = new B01HelloworldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
