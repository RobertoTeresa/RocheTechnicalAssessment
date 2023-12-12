describe("Automation Suite for Employee List Functionality", () => {
  let employee1;
  let employee2;

  beforeEach(() => {
    cy.fixture('employee.json').then(employeeData => {
      employee1 = employeeData.employee1;
      employee2 = employeeData.employee2;
    });
    cy.visit("/");
    cy.checkIfPageIsLoaded();
  });

  it("Can see the data of one employee", () => {
    cy.clickEmployeeByName(employee1.name)
    cy.clickViewSelectedData()
    cy.getListOfNamesAndCities().its('length').should('eq', 1)
    cy.getListOfNamesAndCities().should('contains.text', employee1.city)
  });

  it("Can see the data of two employees", () => {
    cy.clickEmployeeByName(employee1.name)
    cy.clickEmployeeByName(employee2.name)
    cy.clickViewSelectedData()
    cy.getListOfNamesAndCities().its('length').should('eq', 2)
    cy.getListOfNamesAndCities().should('contains.text', employee1.city)
    cy.getListOfNamesAndCities().should('contains.text', employee2.city)
  });

  it("Should return only the data of one employee if the other one is deselected", () => {
    cy.clickEmployeeByName(employee1.name)
    cy.clickEmployeeByName(employee2.name)
    cy.clickViewSelectedData()
    cy.clickEmployeeByName(employee1.name)
    cy.clickViewSelectedData()
    cy.getListOfNamesAndCities().its('length').should('eq', 1)
  });

  it("Should display different data after changing the page", () => {
    cy.clickNextPageButton()
    cy.getFirstEmployeeName().should('not.have.text', employee1.name)
  });

  it("Should display only 5 rows", () => {
    cy.clickRowsDropDown()
    cy.clickRowsDropDown5Option()
    cy.getAllEmployeeRows().should('have.length.at.most', 5);
  });

});
