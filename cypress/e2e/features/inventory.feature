Feature: Inventory Page Validation
  Background:
    Given the user is on 'https://techglobal-training.com/frontend/project-4'

  Scenario: Validate the default content of the inventory table
    Then the user should see the "Inventory" heading
    And the user should see the table with the headers below

      | Quantity | Product | Price $ | Total $ |
    And the user should see the table with the rows below

      | 1 | iPhone  | 1,000 | 1,000 |
      | 3 | Airpods | 100   | 300   |
      | 2 | iPad    | 500   | 1,000 |
    And the user should see the 'ADD PRODUCT' button is enabled
    And the user should see the "Total = $2,300" text displayed