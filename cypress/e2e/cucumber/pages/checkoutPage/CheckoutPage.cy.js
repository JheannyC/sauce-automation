import element from './element'

class CheckoutPage {

    checkStepOneURL() {
        cy.url()
            .should('include', element.route.stepOneURL)
    }

    checkStepTwoURL() {
        cy.url()
            .should('include', element.route.stepTwoURL)
    }

    checkoutCompleteURL() {
        cy.url()
            .should('include', element.route.checkoutComplete)
    }

    clickContinueButton() {
        cy.get(element.attr.continueButton)
            .should('have.value', element.label.continue)
            .click()
    }

    inputFirstName(name) {
        cy.get(element.attr.firstName)
            .should('have.attr', 'placeholder', element.placeholder.firstName)
            .type(name)
    }

    inputLastName(lastName) {
        cy.get(element.attr.lastName)
            .should('have.attr', 'placeholder', element.placeholder.lastName)
            .type(lastName)
    }

    inputZipCode(zipCode) {
        cy.get(element.attr.zipCode)
            .should('have.attr', 'placeholder', element.placeholder.zipCode)
            .type(zipCode)

    }

    clickFinishButton() {
        cy.get(element.attr.finishButton)
            .should('contain.text', element.label.finish)
            .click()
    }

    firstNameError() {
        cy.get(element.attr.errorMessage)
            .should('contain.text', element.message.errorFirstName)
    }

    lastNameError() {
        cy.get(element.attr.errorMessage)
            .should('contain.text', element.message.errorLastName)
    }

    zipCodeError() {
        cy.get(element.attr.errorMessage)
            .should('contain.text', element.message.errorZipCode)
    }

    checkoutPayment() {
        cy.get(element.attr.summaryInfo).each(($id, index, $list) => {

            cy.wrap($id)
                .should('be.visible')
                .and('exist')
                .and('not.be.empty')

            cy.wrap($id)
                .should('be.visible')
                .and('exist')
                .and('not.be.empty')
        })

        cy.get(element.attr.itemTotal)
            .should('be.visible')
            .and('exist')
            .and('not.be.empty')

        cy.get(element.attr.tax)
            .should('be.visible')
            .and('exist')
            .and('not.be.empty')

        cy.get(element.attr.total)
            .should('be.visible')
            .and('exist')
            .and('not.be.empty')
    }

    checkThanksScreen() {
        cy.get(element.attr.checkoutCompleteTitle)
            .should('be.visible')
            .and('exist')
            .and('not.be.empty')

        cy.get(element.attr.checkoutCompletSubTitle)
            .should('be.visible')
            .and('exist')
            .and('not.be.empty')

        cy.get(element.attr.checkoutCompleteImg)
            .should('have.prop', 'naturalWidth')
            .and('be.greaterThan', 0)
    }

}
export default new CheckoutPage()
