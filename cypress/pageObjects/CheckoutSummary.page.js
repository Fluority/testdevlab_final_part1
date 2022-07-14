import BasePage from "./Base.page.js";
 
class CheckoutSummaryPage extends BasePage {

    static get nameVali() {
        return cy.get('div[class="inventory_item_name"]');
    }

    static get finish() {
        return cy.get('#finish');
    }

}

export default CheckoutSummaryPage;