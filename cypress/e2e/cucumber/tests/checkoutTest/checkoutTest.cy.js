import {Given, When, Then, And, Before} from 'cypress-cucumber-preprocessor/steps'
import login from '../../pages/loginPage/LoginPage.cy';
import product from '../../pages/productsPage/ProductsPage.cy';
import cart from '../../pages/cartPage/CartPage.cy';
import checkout from '../../pages/checkoutPage/CheckoutPage.cy';

// login and check if the user was redirected to the product page
Before(()=>{
    login.login(
        `${Cypress.env('USERNAME')}`,
        `${Cypress.env('PASSWORD')}`
    )
    product.visitInventoryPage()
})

// select a product
Given('I choose a product', (datatable) => {
    datatable.hashes().forEach((element) => {
        product.addProductByIdToCart(
           element.productId,
           element.name
        )
    })
})

// add a product to the cart and go to the checkout page
And('I go to the checkout screen after adding the product to the cart', ()=> {
    cart.addProductToCart()
    cart.clickCartButton()
    cart.clickCheckoutButton()
    checkout.checkStepOneURL()
})

// insert name
And('I enter my first name {string}', (name)=> {
    checkout.inputFirstName(name)
})

// insert last name
And('I enter my last name {string}', (lastName)=> {
    checkout.inputLastName(lastName)
})

// insert zip code
And('I enter my zip code {string}', (zipCode)=> {
    checkout.inputZipCode(zipCode)
})

// click the continue button
When('I click on the continue button', ()=> {
    checkout.clickContinueButton()
})

// checks error message if name field is empty
And('I should see an error message for the first name field', ()=> {
    checkout.firstNameError()
})

// checks error message if last name field is empty
And('I should see an error message for the last name field', ()=> {
    checkout.lastNameError()
})

// checks error message if zip code field is empty
And('I should see an error message for the zip code field', ()=> {
    checkout.zipCodeError()
})

// checks selected products in the checkout list
And('I check the selected products', ()=> {
    cart.checkCartProducts()
})

// check payment details
And ('I check the payment method', ()=> {
    checkout.checkoutPayment()
})

// click the checkout button
And ('I click on the finish button', ()=> {
    checkout.clickFinishButton()
})

// checks whether the user was correctly redirected to the order check
Then('I should be directed to the second part of the checkout', ()=> {
    checkout.checkStepTwoURL()
})

// checks if the user was correctly redirected to the thank you page
Then('I should be redirected to the thank you screen', ()=> {
    checkout.checkoutCompleteURL()
    checkout.checkThanksScreen()
})
