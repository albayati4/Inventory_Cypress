![Image](https://media.licdn.com/dms/image/C5112AQEi3UU4OEjOzA/article-cover_image-shrink_600_2000/0/1580304392113?e=2147483647&v=beta&t=p7dkkyO4guUHym_Ee-cizoYaqPPgu7IP9mjx3-pPXMU)

## Date: 06/25/2024

### By: Abdullah Albayati

### Testing Front end project-04

#### Validating 4 test scenarios for all the components of an Inventory page.

#### Creator Linkedin page

[Abdullah Albayati](https://www.linkedin.com/in/albayati-abdullah/)

---

#### This project was creatated and executed with the use of JaveScript, Node.js, Cypress, CSS selectors, POM, BDD with Cucumber.

---

### _Getting Started_

- In all test scenarios we are required to visit this page [project-4](https://www.techglobal-training.com/frontend/project-4)
- So I used `Background` In my features file with `Given the user is on` to handel visiting this website before each test scenario.
- I Created a separate folder called Pages with a InventoryPage.js file inside to be able to use POM (Page Object Model)
- In my InventoryPage.js I created a class called InventoryPage and I added all my locators and methods then I exported this class with
  ```JavaScript
  export default InventoryPage
  ```
- In order to use this page I had to imported in my pagination.js and create a new instance of this object to use it.
  ```JavaScript
  import InventoryPage from "../pages/InventoryPage";
  const inventory = new InventoryPage();
  ```
- I created few methods inside my page to handel clicking actions for certain buttons everytime it's called.

  ```JavaScript
  // Methods

  /**
   * These functions clicks on a button when called
   */

  clickAddProductButton() {
    this.getAddProductButton().click();
  }
  clickXbutton() {
    this.getXbutton().click();
  }
  clickSubmitButton() {
    this.getSubmitButton().click();
  }
  ```

- I created an array from my data table in my feature file that I would use few times so I made it global

  ```JavaScript
  const tableInfo = dataTable.rawTable.flat();
  ```

- I used each to handel validating multiple detalis with their text from an array

  ```JavaScript
  Then(/^the user should see the table with the rows below$/, (dataTable) => {
  const tableInfo = dataTable.rawTable.flat();
  inventory.getItemsDetalis().each(($el, index) => {
    cy.wrap($el).should("have.text", tableInfo[index]);
  });
  });
  ```

- I used `inventory.getAddProductButton().should("be.enabled");` to check if a button is clickable.
  ```JavaScript
  Then(/^the user should see the 'ADD PRODUCT' button is enabled$/, () => {
    inventory.getAddProductButton().should("be.enabled");
  });
  ```

### _Screenshots_

![Image](https://i.ibb.co/8smgnM4/Screenshot-2024-06-21-at-6-08-03-PM.png)
