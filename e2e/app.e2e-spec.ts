import { TesterPage } from './app.po';

describe('tester App', () => {
  let page: TesterPage;

  beforeEach(() => {
    page = new TesterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
