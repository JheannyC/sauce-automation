import element from "./element"

class CartPage {

    checkCart(){
        cy.get(element.attr.cartIcon)
        .should('be.visible')
        .click()
    }

    addProductToCart (){
        cy.get(element.attr.addToCart)
        .should('contain.text', element.label.addToCart)
        .click()
    }
    removeProductFromCart (){
        cy.get(element.attr.removeCartButton)
        .should('contain.text', element.label.remove)
        .click()
    }

    clickBackButton(){
        cy.get(element.attr.backButton)
        .should('contain.text', 'Back')
        .click()
    }
    productsCounter(productQuantity){
        cy.get(element.attr.productsCounter)
        .should('contain.text', productQuantity)
       
    }

    clickCartButton(){
        cy.get(element.attr.cartIconButton)
        .click()
    }

    clickCheckoutButton(){
        cy.get(element.attr.checkoutButton)
        .should('contain.text', element.label.checkout)
        .click()
    }

    checkCartProducts(){

            cy.get('.cart_list').each(($id, index, $list) => {
                    
                cy.wrap($id).find('.inventory_item_name').each(($name) => {
                    cy.wrap($name)
                    .should('be.visible')
                    .and('exist')
                    .and('not.be.empty')
                })

                cy.wrap($id).find('.inventory_item_desc').each(($description) => {
                    cy.wrap($description)
                    .should('be.visible')
                    .and('exist')
                    .and('not.be.empty')
                })

                cy.wrap($id).find('.inventory_item_price').each(($price) => {
                    cy.wrap($price)
                    .should('be.visible')
                    .and('exist')
                    .and('not.be.empty')
            })
    
        })
    }

    checkCartURL(){
        cy.url()
        .should('include', element.route.cartUrl)
    }


}

export default new CartPage()
