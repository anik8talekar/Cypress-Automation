import EngagementNameGenerator from "../../support/engagementNameGenerator";
import DirectConnectLocators from "../locator files/DirectConnect.locator";
import EngagementCreationLocators from "../locator files/EngagementCreation.locator";

var directConnectLocators = new DirectConnectLocators
var engagementCreationLocators = new EngagementCreationLocators
var NameData;

class EngagementCreationFunctions{
    generateName(){
        cy.writeFile(
            "cypress/fixtures/engagementName.json",
            EngagementNameGenerator.generateEngagementName()
           );
           cy.readFile("cypress/fixtures/engagementName.json").then((data)=>{
            NameData = data;
            });
    }
    createEngagement(){
        cy.getTestData().then((data)=>{
        cy.xpath(directConnectLocators.ADMIN).eq(0).click();
        cy.xpath(directConnectLocators.ADD_ENGAGEMENT).click();
        cy.wait(3000);
        cy.xpath(directConnectLocators.CLIENT_NAME_2).eq(0).type('AIS_QA_NEW')
        cy.xpath(engagementCreationLocators.AIS_QA_NEW).click();
        cy.xpath(directConnectLocators.ENGAGEMENT_NAME).type(NameData.EngagementName)
        cy.xpath(engagementCreationLocators.LOCATION).click();
        cy.xpath( data['LOCATION_OPTION']).click();
        cy.xpath(directConnectLocators.LINE_OF_BUSINESS).type('Testing')
        cy.xpath(engagementCreationLocators.TESTING).eq(0).click();
        cy.xpath(directConnectLocators.ENGAGEMENT_TYPE).click();
        cy.xpath(directConnectLocators.TESTORTRAIN).click();
        cy.xpath(directConnectLocators.OK).click();
        cy.xpath(directConnectLocators.SAVE).click();
        cy.xpath(directConnectLocators.SAVE,{timeout:60000}).should('not.be.visible');
    })
    }
    searchNewEngagement(){
        cy.xpath(directConnectLocators.SEARCH).type(NameData.EngagementName)
    }
    clickOnEditEngagement(){
        cy.wait(3000);
        cy.xpath(engagementCreationLocators.EDIT).click();
    }
    verifyLocationDisability(){
        cy.xpath(engagementCreationLocators.DISABLED_LOCATION).should('be.disabled')
    }
}

export default EngagementCreationFunctions;
