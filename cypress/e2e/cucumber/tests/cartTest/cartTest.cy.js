import {Before, Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import login from '../../pages/loginPage/LoginPage.cy'
import product from '../../pages/productsPage/ProductsPage.cy'
import cart from '../../pages/cartPage/CartPage.cy'

// login and check if the user was redirected to the product page
Before(()=>{
    login.login(
        `${Cypress.env('USERNAME')}`,
        `${Cypress.env('PASSWORD')}`
    )
    product.visitInventoryPage()
})

// select a product
Given('I want to add a product to the cart', (datatable) => {
    datatable.hashes().forEach((element) => {
        product.addProductByIdToCart(
           element.productId,
           element.name
        )
    })
})

// select other product
And('I want to add another product to the cart', (datatable) => {
    datatable.hashes().forEach((element) => {
        product.addProductByIdToCart(
           element.productId,
           element.name
        )
    })
})

// click on the back button on the product details page
And('I click the back button',() => {
    cart.clickBackButton()
})

// click on the add to cart button in the product details page
And('I click on the add to cart button',() => {
    cart.addProductToCart()
})

// click on the remove cart button in the product details page
And('I click the remove button',() => {
    cart.removeProductFromCart()
})

// click the checkout button in the cart checkout
And('I click the checkout button',() => {
    cart.clickCheckoutButton()
})

// checks whether products were added correctly to the cart
And('I check the list of added products', (datatable) => {
    cart.checkCartProducts()
    cart.checkCartURL()
})

// checks the number of products added to the cart
When('I check the quantity of products', (datatable) => {
    datatable.hashes().forEach((element) => {
        cart.productsCounter(
           element.productQuantity
        )
    })
})

// Lists products that have been added to the cart
Then('I go to the cart list page',()=>{
    cart.clickCartButton()
})
