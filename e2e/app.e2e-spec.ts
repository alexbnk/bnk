import { BnkPage } from './app.po';

describe('bnk App', function() {
  let page: BnkPage;

  beforeEach(() => {
    page = new BnkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
