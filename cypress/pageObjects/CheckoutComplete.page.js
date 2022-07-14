import BasePage from "./Base.page.js";
 
class CheckoutCompletePage extends BasePage {

    static get headerVali() {
        return cy.get('h2[class="complete-header"]');
    }

}

export default CheckoutCompletePage;