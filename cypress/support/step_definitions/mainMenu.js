import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import mainMenu from "../../e2e/pages/mainMenu";

Given("User loading the page, select Yes from allow browser location", ()=>{
    
    mainMenu.visit();
    
});

And("Select one of the listed location", ()=>{
    mainMenu.locationPick();
});

Then("Will return the following list of location", ()=>{
    mainMenu.navigateLocation();
});

When("User select one of the product to tambah Keranjang", ()=>{ 
    mainMenu.selectProduct();
});

// And("User procced to add note", ()=>{
//     mainMenu.test();
// });  

Then("Return modal dialogue indicate cart quantity 1", ()=>{
    mainMenu.addQuantity();
});

When("User procced to add more quantity, select cart", ()=>{
    mainMenu.moreQuantity();
});


Then("Navigate to cart page", ()=>{
    mainMenu.navCartPage();
});

Then("User select min cart quntity by 1", ()=>{
    mainMenu.minQuantity();
});

Then("Validate return product quantity", ()=>{
    mainMenu.countQuantity();
});






