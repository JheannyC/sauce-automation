import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import login from '../../pages/loginPage/LoginPage.cy';

Given('Navigate to login page', () => {
    login.visitLoginPage()
});

When('I entered valid username and password', (datatable) => {
    login.enterUsernameAndPassword(
      `${Cypress.env('USERNAME')}`,
      `${Cypress.env('PASSWORD')}`
    )
})

When('I entered a locked username and password', (datatable) => {
    login.enterUsernameAndPassword(
      `${Cypress.env('USERNAME_LOCKED')}`,
      `${Cypress.env('PASSWORD')}`
    )
})

When('I entered username and password', (datatable) => {
    datatable.hashes().forEach((element) => {
        login.enterUsernameAndPassword(
            element.email, 
            element.password);
    })
})

And('User click on login button', () => {
    login.clickLoginButton();
})

Then('Validate the URL after login', () => {
    login.verifyURL();
})

Then('Validate the login error message', () => {
    login.verifyLoginError();
})

Then('Validate the locked error message', () => {
    login.verifyLockedError();
})
