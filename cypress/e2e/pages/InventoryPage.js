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
  getAddProductButton() {
    return cy.get("#add_product_btn");
  }
  getTotal() {
    return cy.get("#total_amount");
  }
  // methods
  goToTheWebPage(url) {
    return cy.visit(url);
  }
  clickAddProductButton() {
    this.getAddProductButton().click();
  }
}

export default InventoryPage;
