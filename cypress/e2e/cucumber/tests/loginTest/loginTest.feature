Feature: User Login

  Scenario: Login with valid username and password
    Given I navigate to the login page
    When I enter a valid username and password
    And I click on the login button
    Then I should be redirected to the inventory page

  Scenario: Login with valid username and invalid password
    Given I navigate to the login page
    When I enter the following credentials
      | email         | password |
      | standard_user | 34334    |
    And I click on the login button
    Then I should see an error message for invalid credentials

  Scenario: Login with invalid username and password
    Given I navigate to the login page
    When I enter the following credentials
      | email | password |
      | 4545  | test     |
    And I click on the login button
    Then I should see an error message for invalid credentials

  Scenario: Login as a locked user
    Given I navigate to the login page
    When I entered a locked username and password
    And I click on the login button
    Then I should see an error message indicating the user is locked
