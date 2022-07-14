import BasePage from "../pageObjects/Base.page.js";
 
class InventoryPage extends BasePage {

    static get amountVali() {
        return cy.get('div[class="inventory_list"]');
    }

    static get filter() {
        return cy.get('select[class="product_sort_container"]');
    }

    static get itemName() {
        return cy.get('div[class="inventory_item_name"]');
    }

    static get itemPrice() {
        return cy.get('div[class="inventory_item_price"]');
    }

    static get stackButton() {
        return cy.get('#react-burger-menu-btn');
    }

    static get resetState() {
        return cy.get('#reset_sidebar_link');
    }

}

export default InventoryPage;