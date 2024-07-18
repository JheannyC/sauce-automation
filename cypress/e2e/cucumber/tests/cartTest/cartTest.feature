Feature: Cart Page

Scenario: Adding a product to the cart
    Given I want to add a product to the cart
        | productId |           name       |
        |    4      | Sauce Labs Backpack  |
    And I click on the add to cart button
    When I check the quantity of products
        | productQuantity |
        |        1        |
    Then I go to the cart list page
    And I check the list of added products

Scenario: Adding more than one product to the cart
    Given I want to add a product to the cart
        | productId |           name       |
        |    4      | Sauce Labs Backpack  |
    And I click on the add to cart button
    And I click the back button
    And I want to add another product to the cart
        | productId |           name          |
        |    0      | Sauce Labs Bike Light   |
    And I click on the add to cart button
    When I check the quantity of products
        | productQuantity |
        |        2        |
    Then I go to the cart list page
    And I check the list of added products

Scenario: Removing a product from the cart
    Given I want to add a product to the cart
        | productId |           name       |
        |    4      | Sauce Labs Backpack  |
    And I click on the add to cart button
    And I click the back button
    And I want to add another product to the cart
        | productId |           name          |
        |    0      | Sauce Labs Bike Light   |
    And I click on the add to cart button
    When I check the quantity of products
        | productQuantity |
        |        2        |
    And I click the remove button
    When I check the quantity of products
        | productQuantity |
        |        1        |
    Then I go to the cart list page
    And I check the list of added products

Scenario: Adding a product and going to the checkout screen
    Given I want to add a product to the cart
        | productId |           name       |
        |    4      | Sauce Labs Backpack  |
    And I click on the add to cart button
    When I check the quantity of products
        | productQuantity |
        |        1        |
    Then I go to the cart list page
    And I check the list of added products
    And I click the checkout button
