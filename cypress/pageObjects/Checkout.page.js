import BasePage from "./Base.page.js";
 
class CheckoutPage extends BasePage {

    static get firstName() {
        return cy.get('#first-name');
    }

    static get lastName() {
        return cy.get('#last-name');
    }

    static get zipCode() {
        return cy.get('#postal-code');
    }

    static get continue() {
        return cy.get('#continue');
    }

}

export default CheckoutPage;