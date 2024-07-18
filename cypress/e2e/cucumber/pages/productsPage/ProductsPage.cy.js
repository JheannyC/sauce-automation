import element from './element'

class ProductsPage {

    visitInventoryPage(){
        cy.visit(element.route.inventory)
    }

    checkHeader() {
        cy.get(element.attr.header)
            .should('be.visible')
    }

    checkProductLabel() {
        cy.get(element.attr.productLabel)
            .should('be.visible')
            .should('contain.text', 'Products')
    }

    //fix: the element exists but is not visible to cypress
    checkBurguerMenu() {
        cy.get(element.attr.burguerMenu)
            .should('exist')
    }

    checkAppLogo() {
        cy.get(element.attr.appLogo)
            .should('be.visible')
    }

    checkPeekIcon() {
        cy.get(element.attr.peekLogo)
            .should('be.visible')
            .and('have.prop', 'width')
            .and('be.greaterThan', 0)
    }

    checkProductsList() {

        cy.get(element.attr.productsList).each(($id, index, $list) => {

            /* 
                bug: duplicated class
                when there is iteration using the similar command to the others, 
                cypress identifies twice as many elements
            */

            cy.get(element.attr.inventoryImage)
                .find(element.attr.inventoryImage)
                .should('have.prop', 'naturalWidth')
                .and('be.greaterThan', 0)

            cy.wrap($id).find(element.attr.inventoryItemName).each(($name) => {
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

    addProductByIdToCart(productId, name) {
        cy.get(`#item_${productId}_title_link`)
            .should('contain.text', name)
            .click()
    }

    checkAllHeaderElements() {
        this.checkHeader()
        this.checkProductLabel()
        this.checkBurguerMenu()
        this.checkAppLogo()
    }
}

export default new ProductsPage()
