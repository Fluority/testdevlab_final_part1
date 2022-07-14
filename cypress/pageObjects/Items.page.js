import BasePage from "./Base.page.js";
 
class ItemsPage extends BasePage {

    static get addToCart() {
        return cy.get('button').contains("Add to cart");
    }

    static get cartBadge() {
        return cy.get('span[class="shopping_cart_badge"]');
    }

    static get backToProducts() {
        return cy.get('#back-to-products')
    }

    static get removeFromCart() {
        return cy.get('#remove-sauce-labs-bolt-t-shirt');
    }

    static get shoppingCart() {
        return cy.get('a[class="shopping_cart_link"]');
    }

}

export default ItemsPage;