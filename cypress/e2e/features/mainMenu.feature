Feature: Perform login as in Saucedemo

    As a user perform action generate an cart 

    Background: navigate to Saucedemo login session
    
    @logintest
    Scenario Outline: Perform navigate to Saucedemo commerce page
        Given User navigate to following page
        When User input the following credential
            |   username        |   password        |
            |   standard_user   |   secret_sauce    |
        And Select button Submit
        Then Return the following result indicate the login result
   