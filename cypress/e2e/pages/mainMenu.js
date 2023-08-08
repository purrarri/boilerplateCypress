import { faker } from '@faker-js/faker';

const headerExist = '.css-1oex9n8';
const buttonCP = ':nth-child(3) > .MuiButtonBase-root > .css-10hhgxr';
const buttonProduct = '.css-nkwue8 > .css-17pxf9o > :nth-child(2) > .css-1773by3 > :nth-child(1) > .css-1vc4j1p > .css-16kpiz3 > .css-167c46v > .MuiButton-root';
const buttonAdd = ':nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(2)';
const buttonAdd2 = ':nth-child(2) > :nth-child(3) > div';
const buttonCart = '.css-1xe5izx';
const countCart = ':nth-child(2) > :nth-child(2) > :nth-child(2)';
const buttomMin = ':nth-child(1) > .MuiBox-root';

class MainMenu {

    visit() {
        // cy.visit('/', {
        //     onBeforeLoad: (win) => {
        //       win.sessionStorage.clear()
        //     }
        //   });

        // cy.visit('/', {
        //   onBeforeLoad (win) {
        //     // e.g., force CP geolocation
        //     const latitude = 6.1774;
        //     const longitude = 106.7907;
        //     cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((cb) => {
        //       return cb({ coords: { latitude, longitude } });
        //     });
        //   },
        // });

        cy.window().then(win => {
          cy.visitWithCustomGeoLoc(win, "/", 16.1774, 106.7907);
        })
          
    }
    

    locationPick() {
      cy.get(headerExist).should('exist');
      cy.wait(10000);
      
    }

    navigateLocation(){
      cy.get(buttonCP).click();
      cy.wait(3000);
      // cy.get('.css-pm2bee > .css-17pxf9o > .css-nwvtde').should('have.attr', 'class');
      // cy.get('.css-pm2bee > .css-17pxf9o > .css-nwvtde').should('exist');

    }

    selectProduct(){
      cy.wait(3000);
      cy.get(buttonProduct).click();
      cy.wait(3000);
      
    }

    addQuantity(){
      cy.get(buttonAdd).contains('1');
      cy.wait(3000);
      
    }

    moreQuantity(){
      cy.get(buttonAdd2).click();
      cy.wait(3000);
      cy.get(buttonAdd).contains('2');
    }

    navCartPage(){
      cy.wait(3000);
      // cy.get(buttonCart).click();

      cy.get(buttonCart).should('be.visible')
      cy.get(buttonCart, { timeout: 10000 }).eq(0).click({ force: true })


      cy.wait(3000);
      cy.get(countCart).contains('2');

      

    }

    minQuantity(){
      cy.get(buttomMin).click();
    }

    countQuantity(){
      cy.get(countCart).contains('1');
      cy.log('Return total cart 1');

    }

}

const mainMenu = new MainMenu();
export default mainMenu;