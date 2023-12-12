describe("Automation Suite for Login Functionality", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.checkIfPageIsLoaded();
    });
  
    it("Should be able to log in", () => {
      cy.enterUsername("user")
      cy.enterPassword("password")
      cy.clickSingInButton();
      cy.getSingInButton().should('not.exist');
    });
  
    it.skip("Should be able to see the error massage when log in", () => {
      cy.enterUsername("userFalse")
      cy.enterPassword("password")
      cy.clickSingInButton();
      cy.getErrorMessage().should('exist');
    });

  });
  