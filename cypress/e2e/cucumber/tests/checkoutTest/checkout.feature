Feature: Checkout page

Scenario: checkout with empty name field
    Given I added products to the cart
    When click on the continue button
    Then I see an error message from the name field

Scenario: checkout with empty last name field
    Given I added products to the cart
    And entered my name
    When click on the continue button
    Then I see an error message from the last name field

Scenario: checkout with empty zip code field
    Given I added products to the cart
    And entered my name
    And entered my last name
    When click on the continue button
    Then I see an error message from the zip code field

Scenario: filling in correct data
    Given I added products to the cart
    And entered my name
    And entered my last name
    And entered my zip code
    When click on the continue button
    Then I will be directed to the second part of the checkout

Scenario: filling in correct data and completing the purchase
    Given I added products to the cart
    And filled in the data correctly
    When click on the continue button
    And check selected products
    And check payment method
    And click in finish button
    Then I am redirected to the thank you screen
    


   