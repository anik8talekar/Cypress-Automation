import StandardDescriptionsLocators from "../locator files/DirectConnectStandardDescriptions.locator";
import SSIGridLocators from "../locator files/SSIGrid.locators";

var ssiGridLocators = new SSIGridLocators();
var standardDescriptionsLocators = new StandardDescriptionsLocators();

class StandardDescriptionsFunctions {

    AddDirectConnectProfile() {
        cy.xpath(ssiGridLocators.ADDPROFILE).click();
        cy.xpath(ssiGridLocators.CLIENTNAME).click();
        cy.wait(3000);
        cy.xpath(ssiGridLocators.SELECTCLIENTNAME).click();
        cy.xpath(ssiGridLocators.DIRECTCONNECTTAXYEARDROPDOWN).click();
        cy.wait(2000);
        cy.xpath(ssiGridLocators.SELECTTAXYEAR).click();
        cy.xpath(ssiGridLocators.DATABASENAME).click();
        cy.xpath(ssiGridLocators.SELECTDATABASENAME).click();
    }

    VerifyStandardDescriptionsCheckbox() {
        cy.xpath(standardDescriptionsLocators.STANDARDDESCRIPTIONSCHECKBOX_1).should('be.visible');
        cy.xpath(standardDescriptionsLocators.STANDARDDESCRIPTIONSCHECKBOX_1).click();
        cy.wait(3000);
    }

    VerifyStandardDescriptionsInfoIcon() {
        cy.xpath(standardDescriptionsLocators.STANDARDDESCRIPTIONSINFOICON).should('be.visible');
    }

    VerifyStandardDescriptionsCheckbox2() {
        cy.xpath(standardDescriptionsLocators.PAGECLICK).click({ force: true });
        cy.wait(3000);
        cy.xpath(standardDescriptionsLocators.STANDARDDESCRIPTIONSCHECKBOX_2).should('be.visible');
    }

    SaveDirectConnectProfile() {
        cy.xpath(ssiGridLocators.DIRECTCONNECTSAVEBUTTON).click();
        cy.xpath(ssiGridLocators.CLOSEBUTTON).click();
        cy.reload();
    }

}
export default StandardDescriptionsFunctions;