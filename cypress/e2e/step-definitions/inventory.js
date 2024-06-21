const { default: InventoryPage } = require("../pages/InventoryPage");
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const inventory = new InventoryPage();

// First Scenario

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

// Second Scenario

When(/^the user clicks on the "ADD PRODUCT" button$/, () => {
  inventory.clickAddProductButton();
});

Then(/^the user should see the "([^"]*)" modal with its heading$/, (model) => {
  inventory.getModelTitle().should("have.text", model);
});

Then(/^the user should see the "([^"]*)" button is enabled$/, () => {
  inventory.getXbutton().should("be.visible").and("be.enabled");
});

Then(/^the user should see the "([^"]*)" label$/, () => {
  const arr = ["Please select the quantity", "Please enter the name of the product", "Please enter the price of the product"];
  inventory.getProductsLabels().each(($el, index) => {
    cy.wrap($el).should("have.text", arr[index]);
  });
});

Then(/^the user should see the "([^"]*)" input box is enabled$/, (inputName) => {
  inventory.getAllInputBoxes().each(($el) => {
    cy.wrap($el).should("be.enabled", inputName);
  });
});

When(/^the user clicks on the "X" button$/, () => {
  inventory.clickXbutton();
});

Then(/^the user should not see the "([^"]*)" modal$/, () => {
  inventory.getAddProductButton().should("be.visible");
});

Then(/^the user enters the "([^"]*)" as "([^"]*)"$/, (type, value) => {
  if (type === "quantity") {
    inventory.getQuantityInputBox().type(value);
  }
  if (type === "product") {
    inventory.getProductNameInputBox().type(value);
  }
  if (type === "price") {
    inventory.getPriceInputBox().type(value);
  }
});

Then(/^the user clicks on the "SUBMIT" button$/, () => {
  inventory.clickSubmitButton();
});

Then(/^the user should see the table with the new row below$/, (dataTable) => {
  const newTable = dataTable.rawTable.flat();
  inventory.getNewItemsDetalis().each(($el, index) => {
    cy.wrap($el).should("have.text", newTable[index]);
  });
});
