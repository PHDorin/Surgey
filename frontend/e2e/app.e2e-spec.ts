import { LauradocPage } from './app.po';

describe('lauradoc App', function() {
  let page: LauradocPage;

  beforeEach(() => {
    page = new LauradocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
