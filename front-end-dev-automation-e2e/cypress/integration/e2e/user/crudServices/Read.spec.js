const uri = "localhost:3001/";
import user from "../../../../fixtures/user.json";

describe("Given I want to read a user", () => {
  before(() => {
    //arrange
    cy.visit(uri);
    cy.get("#btn-register").click();

    cy.get("#name").click().type(`${user.name}`);
    cy.get("#mail").click().type(`${user.mail}`);
    cy.get("#password").click().type(`${user.password}`);
    cy.get("#confirmPSW").click().type(`${user.password}`);
    cy.get("#institution").click().type(`${user.institution}`);
    cy.get("#conditions").click();

    cy.get("#register").click();
  });

  it("Read happy path", () => {
    //Act
    cy.get("#mail").click().type(`${user.mail}`);
    cy.get("#password").click().type(`${user.password}`);
    cy.get("#btn-logIn").click();

    //assert
    cy.get("#btn-user").should("exist");
  });
  after(() => {
    cy.get("#btn-user").click();
    cy.get("#delete").click();
  });
});
