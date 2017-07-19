import { B05RouterPage } from './app.po';

describe('b05-router App', () => {
  let page: B05RouterPage;

  beforeEach(() => {
    page = new B05RouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
