import { A01HelloworldPage } from './app.po';

describe('a01-helloworld App', function() {
  let page: A01HelloworldPage;

  beforeEach(() => {
    page = new A01HelloworldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
