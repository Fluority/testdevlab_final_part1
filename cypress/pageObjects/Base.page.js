class BasePage {
    static get url() {
        return "https://www.saucedemo.com/";
    }
    static visit() {
        cy.visit(this.url);
    }
}
export default BasePage;