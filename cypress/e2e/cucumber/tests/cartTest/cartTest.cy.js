import {Before, Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import login from '../../pages/loginPage/LoginPage.cy'
import product from "../../pages/productsPage/ProductsPage.cy"
import cart from '../../pages/cartPage/CartPage.cy'


Before(()=>{

    login.login(
        `${Cypress.env('USERNAME')}`,
        `${Cypress.env('PASSWORD')}`
    )
    cy.visit('/inventory.html')
})

Given('I want to add a product to the cart', (datatable) => {
    datatable.hashes().forEach((element) => {
        product.addproductByIdToCart(
           element.productId,
           element.name
        )
    })
})

And('I want to add another product to the cart', (datatable) => {
    datatable.hashes().forEach((element) => {
        product.addproductByIdToCart(
           element.productId,
           element.name
        )
    })
})

And('click the back button',() => {
    cart.clickBackButton()
})

And('click on the add to cart button',() => {
    cart.addProductToCart()
})


And('click in remove button',() => {
    cart.removeProductFromCart()
})

And('click in checkout button',() => {
    cart.clickCheckoutButton()
})

And('check the list of added products', (datatable) => {
    cart.checkCartProducts()
    cart.checkCartURL()
})

When('check the quantity of products', (datatable) => {
    datatable.hashes().forEach((element) => {
        cart.productsCounter(
           element.productQuantity
        )
    })
})

Then('go to cart list page',()=>{
    cart.clickCartButton()
})
