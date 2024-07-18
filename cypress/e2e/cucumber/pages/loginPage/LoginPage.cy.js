import element from "./element";

class LoginPage {

    visitLoginPage() {
        cy.visit("/")
    }

    enterUsernameAndPassword(username, password) {
        cy.get(element.attr.username)
            .should('have.attr', 'placeholder', element.placeholder.username)
            .type(username);

        cy.get(element.attr.password)
            .should('have.attr', 'placeholder', element.placeholder.password)
            .type(password);
    }

    clickLoginButton() {
        cy.get(element.attr.loginButton)
            .should('contain.value', element.placeholder.loginButton)
            .click();
    }

    checkInventoryURL() {
        cy.url()
            .should('include', element.route.inventory)
    }

    verifyLoginErrorMessage() {
        cy.get(element.attr.loginError)
            .should('contain.text', element.message.loginError)
    }

    ckeckLockedUserErrorMessage() {
        cy.get(element.attr.loginError)
            .should('contain.text', element.message.lockedUser)
    }

    login(username, password) {
        cy.session([username, password], () => {
            this.visitLoginPage()
            this.enterUsernameAndPassword(username, password)
            this.clickLoginButton()
            this.checkInventoryURL()
        })
    }
}

export default new LoginPage();
