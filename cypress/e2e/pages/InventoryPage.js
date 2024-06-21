class InventoryPage {
  // locators
  getMainHeading() {
    return cy.get(".is-size-3");
  }
  getItemsList() {
    return cy.get(".DynamicTables_tableHeaders__k53h5 > th");
  }
  getItemsDetalis() {
    return cy.get("tr > td");
  }
  getNewItemsDetalis() {
    return cy.get("tr").last().find("td");
  }
  getAddProductButton() {
    return cy.get("#add_product_btn");
  }
  getTotal() {
    return cy.get("#total_amount");
  }
  getModelTitle() {
    return cy.get("#modal_title");
  }
  getXbutton() {
    return cy.get(".delete");
  }
  getProductsLabels() {
    return cy.get("[for]");
  }
  getAllInputBoxes() {
    return cy.get(".input");
  }
  getQuantityInputBox() {
    return cy.get("#quantity");
  }
  getProductNameInputBox() {
    return cy.get("#product");
  }
  getPriceInputBox() {
    return cy.get("#price");
  }
  getSubmitButton() {
    return cy.get("#submit");
  }

  // methods

  goToTheWebPage(url) {
    return cy.visit(url);
  }
  clickAddProductButton() {
    this.getAddProductButton().click();
  }
  clickXbutton() {
    this.getXbutton().click();
  }
  clickSubmitButton() {
    this.getSubmitButton().click();
  }
}

export default InventoryPage;
