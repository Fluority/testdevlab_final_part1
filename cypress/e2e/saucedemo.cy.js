// Part 1 - Swag Labs - https://www.saucedemo.com/
// Author: Liene Neimane

import BasePage from "../pageObjects/Base.page.js";
import LoginPage from "../pageObjects/Login.page.js";
import InventoryPage from "../pageObjects/Inventory.page.js";
import ItemsPage from "../pageObjects/Items.page.js";
import CartPage from "../pageObjects/Cart.page.js";
import CheckoutPage from "../pageObjects/Checkout.page.js";
import CheckoutSummaryPage from "../pageObjects/CheckoutSummary.page.js";
import CheckoutCompletePage from "../pageObjects/CheckoutComplete.page.js";

describe('Final task part 1', () => {

  beforeEach(() => {
    BasePage.visit();
  });

  // Scenario 1
  it('Login with locked_out_user', () => {
    LoginPage.username.type("locked_out_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    LoginPage.error.should("have.text","Epic sadface: Sorry, this user has been locked out.");
  });

  // Scenario 2
  it('Login with wrong password', () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("password");
    LoginPage.loginButton.click();
    LoginPage.error.should("have.text","Epic sadface: Username and password do not match any user in this service");
  });

  // Scenario 3
  it('Validate item amount', () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    InventoryPage.amountVali.find('div[class="inventory_item"]').should('have.length', 6);
  });

  // Scenario 4
  it('Sort items - Price high to low', () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    InventoryPage.filter.select('Price (high to low)');
    InventoryPage.itemName.first().should("have.text","Sauce Labs Fleece Jacket");
    InventoryPage.itemPrice.first().should("have.text","$49.99");
  });

  // Scenario 5
  it('Sort items - Price low to High', () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    InventoryPage.filter.select('Price (low to high)');
    InventoryPage.itemName.first().should("have.text","Sauce Labs Onesie");
    InventoryPage.itemPrice.first().should("have.text","$7.99");
  });

  // Scenario 6
  it('Sort items - Name (Z to A)', () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    InventoryPage.filter.select('Name (Z to A)');
    InventoryPage.itemName.first().should("have.text","Test.allTheThings() T-Shirt (Red)");
  });

  // Scenario 7
  it('Validate shopping cart badge amount', () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    InventoryPage.itemName.contains("Sauce Labs Bolt T-Shirt").click();
    ItemsPage.addToCart.click();
    ItemsPage.cartBadge.should("have.text","1");
    ItemsPage.backToProducts.click();
    InventoryPage.itemName.contains("Sauce Labs Bike Light").click();
    ItemsPage.addToCart.click();
    ItemsPage.cartBadge.should("have.text","2");
  });

  // Scenario 8
  it('Reset App State', () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    InventoryPage.itemName.contains("Sauce Labs Bolt T-Shirt").click();
    ItemsPage.addToCart.click();
    ItemsPage.cartBadge.should("have.text","1");
    ItemsPage.backToProducts.click();
    InventoryPage.stackButton.click();
    InventoryPage.resetState.click();
    ItemsPage.cartBadge.should('not.exist');
  });

  // Scenario 9
  it('Validate shopping cart remove button functionality', () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    InventoryPage.itemName.contains("Sauce Labs Bolt T-Shirt").click();
    ItemsPage.addToCart.click();
    ItemsPage.cartBadge.should("have.text","1");
    ItemsPage.removeFromCart.click();
    ItemsPage.cartBadge.should('not.exist');
  });

  // Scenario 10
  it('Buy a T-shirt', () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginButton.click();
    InventoryPage.itemName.contains("Test.allTheThings() T-Shirt (Red)").click();
    ItemsPage.addToCart.click();
    ItemsPage.shoppingCart.click();
    CartPage.checkout.click();
    CheckoutPage.firstName.type("Liene");
    CheckoutPage.lastName.type("Neimane");
    CheckoutPage.zipCode.type("3601");
    CheckoutPage.continue.click();
    CheckoutSummaryPage.nameVali.should("have.text","Test.allTheThings() T-Shirt (Red)");
    CheckoutSummaryPage.finish.click();
    CheckoutCompletePage.headerVali.should("have.text","THANK YOU FOR YOUR ORDER");
  });
})