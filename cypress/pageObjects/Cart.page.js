import BasePage from "./Base.page.js";
 
class CartPage extends BasePage {

    static get checkout() {
        return cy.get('#checkout');
    }

}

export default CartPage;