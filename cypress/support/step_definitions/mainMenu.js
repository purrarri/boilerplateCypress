import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import mainMenu from "../../e2e/pages/mainMenu";

Given("testing", ()=>{
    mainMenu.visit();
    mainMenu.locationPick();
    mainMenu.navigateLocation();
    mainMenu.selectProduct();
    mainMenu.addQuantity();
    mainMenu.moreQuantity();
    mainMenu.navCartPage();
    mainMenu.minQuantity();
    mainMenu.countQuantity();
    
    
});

Given("User navigate to following page", ()=>{
    mainMenu.navigateMain();
});

When("User input the following credential", (datatable)=>{
    mainMenu.navigateInput();
    datatable.hashes().forEach((element) => {
        cy.get('#user-name').type(element.username);
        cy.get('#password').type(element.password);
    })
});

And("Select button Submit", ()=>{
    mainMenu.submitForm();
})

Then("Return the following result indicate the login result", ()=>{
    mainMenu.validateLogin();
})








