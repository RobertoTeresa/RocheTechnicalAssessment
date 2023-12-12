describe("Automation Suite for Login Functionality", () => {
  let login;
  
  beforeEach(() => {
    cy.fixture('login.json').then(loginData => {
      login = loginData;
    });
    cy.visit("/");
    cy.checkIfPageIsLoaded();
  });

  it("Should be able to log in", () => {
    cy.enterUsername(login.username)
    cy.enterPassword(login.password)
    cy.clickSingInButton();
    cy.getSingInButton().should('not.exist');
  });

  it.skip("Should be able to see the error massage when log in", () => {
    cy.enterUsername(login.usernameFake)
    cy.enterPassword(login.password)
    cy.clickSingInButton();
    cy.getErrorMessage().should('exist');
  });

});
