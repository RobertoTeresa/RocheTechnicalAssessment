describe("Automation Suite for Employee List Functionality", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.checkIfPageIsLoaded();
  });

  it("Can see the data of one employee", () => {
    cy.clickEmployeeByName('Andrew')
    cy.clickViewSelectedData()
    cy.getListOfNamesAndCities().its('length').should('eq', 1)
    cy.getListOfNamesAndCities().should('contains.text', 'Andrew is from Tacoma')
  });

  it("Can see the data of two employees", () => {
    cy.clickEmployeeByName('Andrew')
    cy.clickEmployeeByName('Nancy')
    cy.clickViewSelectedData()
    cy.getListOfNamesAndCities().its('length').should('eq', 2)
    cy.getListOfNamesAndCities().should('contains.text', 'Andrew is from Tacoma')
    cy.getListOfNamesAndCities().should('contains.text', 'Nancy is from Seattle')
  });

  it("Should return only the data of one employee if the other one is deselected", () => {
    cy.clickEmployeeByName('Andrew')
    cy.clickEmployeeByName('Nancy')
    cy.clickViewSelectedData()
    cy.clickEmployeeByName('Andrew')
    cy.clickViewSelectedData()
    cy.getListOfNamesAndCities().its('length').should('eq', 1)
  });

  it("Should display different data after changing the page", () => {
    cy.clickNextPageButton()
    cy.getFirstEmployeeName().should('not.have.text', 'Andrew')
  });

  it("Should display only 5 rows", () => {
    cy.clickRowsDropDown()
    cy.clickRowsDropDown5Option()
    cy.getAllEmployeeRows().should('have.length.at.most', 5);
  });

});
