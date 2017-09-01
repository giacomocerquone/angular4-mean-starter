import { MeanPage } from './app.po';

describe('mean App', () => {
  let page: MeanPage;

  beforeEach(() => {
    page = new MeanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
