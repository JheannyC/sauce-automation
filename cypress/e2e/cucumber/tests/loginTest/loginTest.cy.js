import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import login from '../../pages/loginPage/LoginPage.cy';

// visit the login page
Given('I navigate to the login page', () => {
    login.visitLoginPage()
});

// enter valid user data (username and password)
When('I enter a valid username and password', (datatable) => {
    login.enterUsernameAndPassword(
      `${Cypress.env('USERNAME')}`,
      `${Cypress.env('PASSWORD')}`
    )
})

// insert data of a blocked user (username and password)
When('I entered a locked username and password', (datatable) => {
    login.enterUsernameAndPassword(
      `${Cypress.env('USERNAME_LOCKED')}`,
      `${Cypress.env('PASSWORD')}`
    )
})

// insert a random user (username, password)
When('I enter the following credentials', (datatable) => {
    datatable.hashes().forEach((element) => {
        login.enterUsernameAndPassword(
            element.email, 
            element.password)
    })
})

// click on the login button
And('I click on the login button', () => {
    login.clickLoginButton()
})

// checks if you were redirected to the products page
Then('I should be redirected to the inventory page', () => {
    login.checkInventoryURL()
})

// checks for error when invalid data is entered
Then('I should see an error message for invalid credentials', () => {
    login.verifyLoginErrorMessage()
})

// checks error when a user is blocked
Then('I should see an error message indicating the user is locked', () => {
    login.ckeckLockedUserErrorMessage()
})
