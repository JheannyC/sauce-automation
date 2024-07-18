Feature: Products page

Scenario: User views products list after successfully logging in
    Given I login with a valid username and password
    When access the product page
    Then the products list is displayed with image, name, price and description