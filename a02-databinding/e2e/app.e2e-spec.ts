import { A02DatabindingPage } from './app.po';

describe('a02-databinding App', function() {
  let page: A02DatabindingPage;

  beforeEach(() => {
    page = new A02DatabindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
