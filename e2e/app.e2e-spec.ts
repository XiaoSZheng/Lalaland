import { LalalandPage } from './app.po';

describe('lalaland App', () => {
  let page: LalalandPage;

  beforeEach(() => {
    page = new LalalandPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
