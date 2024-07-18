Feature: Cart page

Scenario: adding a product to the cart
    Given I want to add a product to the cart
    | productId |           name       |
    |   4       | Sauce Labs Backpack  |
    And click on the add to cart button
    When check the quantity of products
        | productQuantity  |
        |       1          |
    Then go to cart list page
    And check the list of added products

Scenario: adding more than one product to the cart
    Given I want to add a product to the cart
        | productId |           name       |
        |   4       | Sauce Labs Backpack  |
        And click on the add to cart button
        And click the back button
        And I want to add another product to the cart
        | productId    |           name       |
        |   0          | Sauce Labs Bike Light|
        And click on the add to cart button
        When check the quantity of products
            | productQuantity  |
            |       2          |
        Then go to cart list page
        And check the list of added products

Scenario: removing a product from the cart
    Given I want to add a product to the cart
        | productId |           name       |
        |   4       | Sauce Labs Backpack  |
        And click on the add to cart button
        And click the back button
        And I want to add another product to the cart
        | productId    |           name       |
        |   0          | Sauce Labs Bike Light|
        And click on the add to cart button
        When check the quantity of products
            | productQuantity  |
            |       2          |
        And click in remove button
        When check the quantity of products
            | productQuantity  |
            |       1          |
        Then go to cart list page
        And check the list of added products

Scenario: adding product and going to checkout screen
    Given I want to add a product to the cart
    | productId |           name       |
    |   4       | Sauce Labs Backpack  |
    And click on the add to cart button
    When check the quantity of products
        | productQuantity  |
        |       1          |
    Then go to cart list page
    And check the list of added products
    And click in checkout button
