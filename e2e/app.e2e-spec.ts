import { SkycastPage } from './app.po';

describe('skycast App', function() {
  let page: SkycastPage;

  beforeEach(() => {
    page = new SkycastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
