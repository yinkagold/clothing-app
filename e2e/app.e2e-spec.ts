import { ClothingAppPage } from './app.po';

describe('clothing-app App', () => {
  let page: ClothingAppPage;

  beforeEach(() => {
    page = new ClothingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
