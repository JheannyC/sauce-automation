Feature: Products Page

  Scenario: User views the products list after successfully logging in
    Given I login with a valid username and password
    When I access the products page
    Then the products list should be displayed with an image, name, price, and description for each product