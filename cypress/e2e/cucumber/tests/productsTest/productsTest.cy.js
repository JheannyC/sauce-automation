import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../../pages/loginPage/LoginPage.cy'
import productsPage from '../../pages/productsPage/ProductsPage.cy'

Given('I login with a valid username and password', () => {
    loginPage.login(
        `${Cypress.env('USERNAME')}`,
        `${Cypress.env('PASSWORD')}`
    )
    cy.visit('/inventory.html')
})

When('access the product page', () => {
    productsPage.checkAllHeaderElements()
})

When('choose product by name', () => {
    productsPage.addproductByIdToCart(4, 'Sauce Labs Backpack')
})


Then('the products list is displayed with image, name, price and description', ()=> {
    productsPage.checkProductsList()
})

Then('click in add to cart', () => {
    productsPage.clickAddToCartButton()
})
