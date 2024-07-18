Feature: Checkout page

Scenario: checkout with empty name field
    Given I want to add a product to the cart
        | productId |           name       |
        |   4       | Sauce Labs Backpack  |
    And add product to cart
    When click on the continue button
    Then I see an error message from the name field

Scenario: checkout with empty last name field
    Given I want to add a product to the cart
        | productId |           name       |
        |   4       | Sauce Labs Backpack  |
    And add product to cart
    When click on the continue button
    And entered my name
    When click on the continue button
    Then I see an error message from the last name field

Scenario: checkout with empty zip code field
    Given I want to add a product to the cart
        | productId |           name       |
        |   4       | Sauce Labs Backpack  |
    And add product to cart
    When click on the continue button
    And entered my name
    And entered my last name
    When click on the continue button
    Then I see an error message from the zip code field

Scenario: filling in correct data
    Given I want to add a product to the cart
        | productId |           name       |
        |   4       | Sauce Labs Backpack  |
    And add product to cart
    When click on the continue button
    And entered my name
    And entered my last name
    And entered my zip code
    When click on the continue button
    Then I will be directed to the second part of the checkout

Scenario: filling in correct data and completing the purchase
    Given I want to add a product to the cart
        | productId |           name       |
        |   4       | Sauce Labs Backpack  |
    And add product to cart
    When click on the continue button
    And filled in the data correctly
    When click on the continue button
    And check selected products
    And check payment method
    And click in finish button
    Then I am redirected to the thank you screen
    


   