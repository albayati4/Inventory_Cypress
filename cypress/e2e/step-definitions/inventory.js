const { default: InventoryPage } = require("../pages/InventoryPage");
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const inventory = new InventoryPage();

Given("the user is on {string}", (url) => {
  inventory.goToTheWebPage(url);
});

Then(/^the user should see the "([^"]*)" heading$/, (mainHeading) => {
  inventory.getMainHeading().should("have.text", mainHeading);
});

Then(/^the user should see the table with the headers below$/, (dataTable) => {
  const tableHeaders = dataTable.rawTable.flat();
  inventory.getItemsList().each(($el, index) => {
    cy.wrap($el).should("have.text", tableHeaders[index]);
  });
});

Then(/^the user should see the table with the rows below$/, (dataTable) => {
  const tableInfo = dataTable.rawTable.flat();
  inventory.getItemsDetalis().each(($el, index) => {
    cy.wrap($el).should("have.text", tableInfo[index]);
  });
});

Then(/^the user should see the 'ADD PRODUCT' button is enabled$/, () => {
  inventory.getAddProductButton().should("be.enabled");
});

Then(/^the user should see the "([^"]*)" text displayed$/, (total) => {
  inventory.getTotal().should("have.text", total);
});
