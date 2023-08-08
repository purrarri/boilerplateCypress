Feature: Wetwo commerce page

    As a user perform action generate an cart 

    Background: navigate to Wetwo page
    

    Scenario: Perform navigate to Wetwo commerce page
        Given User loading the page, select Yes from allow browser location
        And Select one of the listed location
        Then Will return the following list of location
        When User select one of the product to tambah Keranjang
        Then Return modal dialogue indicate cart quantity 1
        When User procced to add more quantity, select cart
        Then Navigate to cart page
        When User select min cart quntity by 1
        Then Validate return product quantity      
   