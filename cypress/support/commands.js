//Login
//Get element
Cypress.Commands.add("getSingInButton", () => {
  cy.get('[id="form"]').find('input[type="submit"]');
});

//Click
Cypress.Commands.add("clickSingInButton", () => {
  cy.get('[id="form"]').find('input[type="submit"]').click();
});

//Enter data
Cypress.Commands.add("enterPassword", (password) => {
  cy.get('[id="form"]').find('input[type="password"]').type(password);
});

Cypress.Commands.add("enterUsername", (username) => {
  cy.get('[id="form"]').find('input[type="text"]').type(username);
});

//Employee List
//Get Elemnt
Cypress.Commands.add("getFirstEmployeeName", () => {
  return cy.get('.jqx-tree-grid-title.jqx-grid-cell-wrap').first();
});

Cypress.Commands.add("getAllEmployeeRows", () => {
  return cy.get('.jqx-tree-grid-title.jqx-grid-cell-wrap');
});

Cypress.Commands.add("getListOfNamesAndCities", () => {
  return cy.get('.jqx-listitem-state-normal')
});

//Click

Cypress.Commands.add("clickViewSelectedData", (employeeAndCity) => {
  cy.get('[id="btn"]').click();
});

Cypress.Commands.add("clickEmployeeByName", (name) => {
  cy.contains('.jqx-tree-grid-title', name).parent().children('.jqx-tree-grid-checkbox').first().click();
});

Cypress.Commands.add("clickRowsDropDown", () => {
  cy.get('[id="gridpagerlistbottomtreeGrid"]').click();
});

Cypress.Commands.add("clickRowsDropDown5Option", () => {
  cy.get('[id="listitem0innerListBoxgridpagerlistbottomtreeGrid"]').first().click();
});

Cypress.Commands.add("clickNextPageButton", () => {
  cy.get('[id="pagertreeGrid"]').find('.jqx-icon-arrow-right').click();
});

//Assert
Cypress.Commands.add("getErrorMessage", () => {
});

Cypress.Commands.add("checkIfPageIsLoaded", (employeeAndCity) => {
  cy.get('[id="contenttreeGrid"]').should('exist');
});