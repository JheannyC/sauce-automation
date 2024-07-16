Feature: User login

  Background:Navigate to login page

  Scenario: Login with valid username and password
    Given Navigate to login page
    When I entered valid username and password
    And User click on login button
    Then Validate the URL after login


  Scenario: Login with valid username and invalid password
    Given Navigate to login page
    When I entered username and password
      | email         | password |
      | standard_user | sauce   |
    And User click on login button
    Then Validate the login error message

  Scenario: Login with invalid username and password
    Given Navigate to login page
    When I entered username and password
      | email | password |
      | 4545  | test    |
    And User click on login button
    Then Validate the login error message

  Scenario: Login as locked user
    Given Navigate to login page
    When I entered a locked username and password
    And User click on login button
    Then Validate the locked error message
