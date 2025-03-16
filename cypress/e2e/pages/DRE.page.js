import DRELocators from "../locator files/DRE.locator";

var dRELocator = new DRELocators

class DREFunctions{
enableDREFunction(){
    cy.get(dRELocator.DRE_DROPDOWN).click();
    cy.xpath(dRELocator.DRE_ENABLED).click();
}
searchDREDocument(){
   cy.xpath(dRELocator.FILE_NAME_SEARCHBOX).clear().type('2023 K-1 DRE File2_1_6.pdf');
   cy.xpath(dRELocator.TAX_YEAR_DROPDOWN).click();
   cy.xpath(dRELocator.TAX_YEAR_2023).click();
   cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
}
verifyH2UnderPartII(){
    cy.xpath(dRELocator.REVIEW_ICON).eq(0).click({force: true});
    cy.xpath(dRELocator.II).eq(0).click();
    cy.xpath(dRELocator.H2).should('exist');
}
verifyCircleIndicator(){
    cy.xpath(dRELocator.CIRCLE_INDICATOR_1).should('exist');
    cy.xpath(dRELocator.CIRCLE_INDICATOR_NAME).should('have.text','HASLEM PTRS VI ACQ. Q, LP');

    cy.xpath(dRELocator.CIRCLE_INDICATOR_2).should('exist');
    cy.xpath(dRELocator.CIRCLE_INDICATOR_NAME_2).should('have.text',' xx-xxxx4444 ');   
}
}
export default DREFunctions;