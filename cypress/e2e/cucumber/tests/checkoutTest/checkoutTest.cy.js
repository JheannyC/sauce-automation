import {Given, When, Then, And, Before} from 'cypress-cucumber-preprocessor/steps'
import login from '../../pages/loginPage/LoginPage.cy';
import product from '../../pages/productsPage/ProductsPage.cy';
import cart from '../../pages/cartPage/CartPage.cy';
import checkout from '../../pages/checkoutPage/CheckoutPage.cy';

Before(()=>{
    
    product.addproductByIdToCart(4, 'Sauce Labs Backpack')
    cart.addProductToCart()
    cart.clickCartButton()
    cart.clickCheckoutButton()
})

Given('I added products to the cart', ()=> {
    checkout.checkStepOneURL()
})

And('entered my name', ()=> {
    checkout.inputFirstName('joaquina')
})

And('entered my last name', ()=> {
    checkout.inputLastName('francisca')
})

And('entered my zip code', ()=> {
    checkout.inputZipCode('223')
})

When('click on the continue button', ()=> {
    checkout.clickContinueButton()
})

And('I see an error message from the name field', ()=> {
    checkout.firstNameError()
})

And('I see an error message from the last name field', ()=> {
    checkout.lastNameError()
})
And('I see an error message from the zip code field', ()=> {
    checkout.zipCodeError()
})

And('filled in the data correctly', ()=> {
    checkout.inputFirstName('dsfasd')
    checkout.inputLastName('fdssad')
    checkout.inputZipCode('6656')
})

And('check selected products', ()=> {
    cart.checkCartProducts()
})

And ('check payment method', ()=> {
    checkout.checkoutPayment()
})

And ('click in finish button', ()=> {
    checkout.clickFinishButton()
})

Then('I will be directed to the second part of the checkout', ()=> {
    checkout.checkStepTwoURL()
})

Then('I am redirected to the thank you screen', ()=> {
    checkout.checkoutCompleteURL()
    checkout.checkMessage()
})
