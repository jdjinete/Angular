import { AngularQuizJinetePage } from './app.po';

describe('angular-quiz-jinete App', () => {
  let page: AngularQuizJinetePage;

  beforeEach(() => {
    page = new AngularQuizJinetePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
