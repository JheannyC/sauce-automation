import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../../pages/loginPage/LoginPage.cy'
import products from '../../pages/productsPage/ProductsPage.cy'

/* 
    login with valid data
    If a user with a problem is added, the tests should fail
*/
Given('I login with a valid username and password', () => {
    loginPage.login(
        `${Cypress.env('USERNAME')}`,
        `${Cypress.env('PASSWORD')}`
    )
    products.visitInventoryPage()
})

//checks if the product listing page loaded correctly
When('I access the products page', () => {
    products.checkAllHeaderElements()
})

//checks if the product listing is displayed correctly
Then('the products list should be displayed with an image, name, price, and description for each product', ()=> {
    products.checkProductsList()
})
