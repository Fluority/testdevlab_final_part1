import BasePage from "../pageObjects/Base.page.js";
 
class LoginPage extends BasePage {

    static get username() {
        return cy.get('#user-name');
    }

    static get password() {
        return cy.get('#password');
    }

    static get loginButton() {
        return cy.get('#login-button');
    }

    static get error() {
        return cy.get('h3[data-test="error"]');
    }
}

export default LoginPage;