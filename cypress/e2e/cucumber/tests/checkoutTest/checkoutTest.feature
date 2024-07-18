Feature: Checkout page

Scenario: Checkout with an empty first name field
    Given I choose a product
        | productId |           name       |
        |   4       | Sauce Labs Backpack  |
    And I go to the checkout screen after adding the product to the cart
    When I click on the continue button
    Then I should see an error message for the first name field

Scenario: checkout with empty last name field
    Given I choose a product
        | productId |           name       |
        |   4       | Sauce Labs Backpack  |
    And I go to the checkout screen after adding the product to the cart
    When I click on the continue button
    And I enter my first name "Joana"
    When I click on the continue button
    Then I should see an error message for the last name field

Scenario: checkout with empty zip code field
    Given I choose a product
        | productId |           name       |
        |   4       | Sauce Labs Backpack  |
    And I go to the checkout screen after adding the product to the cart
    When I click on the continue button
    And I enter my first name "Josefina"
    And I enter my last name "Tadeu"
    When I click on the continue button
    Then I should see an error message for the zip code field
    
Scenario: filling in correct data
    Given I choose a product
        | productId |           name       |
        |   4       | Sauce Labs Backpack  |
    And I go to the checkout screen after adding the product to the cart
    When I click on the continue button
    And I enter my first name "Maria"
    And I enter my last name "Cordeiro"
    And I enter my zip code "5555-555"
    When I click on the continue button
    Then I should be directed to the second part of the checkout

Scenario: filling in correct data and completing the purchase
    Given I choose a product
        | productId |           name       |
        |   4       | Sauce Labs Backpack  |
    And I go to the checkout screen after adding the product to the cart
    When I click on the continue button
    And I enter my first name "Donald"
    And I enter my last name "McDonald"
    And I enter my zip code "7777-777"
    When I click on the continue button
    And I check the selected products
    And I check the payment method
    And I click on the finish button
    Then I should be redirected to the thank you screen
    


   