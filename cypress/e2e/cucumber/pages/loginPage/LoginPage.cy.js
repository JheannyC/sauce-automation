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

  verifyURL() {
    cy.url().should('include', element.route.loggedUser)
  }

  verifyLoginError() {
    cy.get(element.attr.loginError)
    .should('contain.text', element.message.loginError)
  }

  verifyLockedError() {
    cy.get(element.attr.loginError)
    .should('contain.text', element.message.lockedUser)
  }

  login(username, password){
    this.visitLoginPage()
    this.enterUsernameAndPassword(username, password)
    this.clickLoginButton()
    this.verifyURL()
  }

 }

 export default new LoginPage();
