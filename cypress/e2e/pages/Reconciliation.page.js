import ReconciliationLocators from "../locator files/Reconciliation.locator";
import StateSourceGridLocators from "../locator files/stateSourceGrid.locator";

var stateSourceGridLocator = new StateSourceGridLocators;
var reconciliationLocators = new ReconciliationLocators

class ReconciliationFunctions{
searchK3Document(){
    cy.xpath(reconciliationLocators.SEARCH_FILE).type('K3 Parts 2-10_1_22.pdf')
    cy.xpath(reconciliationLocators.SCHEDULE_DROPDOWN).click();
    cy.xpath(reconciliationLocators.FED_K3).click();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
}
verifyReconciliationTilePartII(){
cy.xpath(reconciliationLocators.PART_II).click();
cy.xpath(reconciliationLocators.SECTION_1).click();
cy.xpath(reconciliationLocators.RECONCILIATION_TILE).should('be.visible').should('have.class','k3-review-reconciliation-tab');
cy.xpath(reconciliationLocators.SECTION_2).click();
cy.xpath(reconciliationLocators.RECONCILIATION_TILE).should('be.visible').should('have.class','k3-review-reconciliation-tab');
}
verifyReconciliationTilePartX(){
cy.xpath(reconciliationLocators.PART_X).click();
cy.xpath(reconciliationLocators.SECTION_1).click();
cy.xpath(reconciliationLocators.RECONCILIATION_TILE).should('be.visible').should('have.class','k3-review-reconciliation-tab');
cy.xpath(reconciliationLocators.SECTION_2).click();
cy.xpath(reconciliationLocators.RECONCILIATION_TILE).should('be.visible').should('have.class','k3-review-reconciliation-tab');
cy.xpath(reconciliationLocators.SECTION_3).click();
cy.xpath(reconciliationLocators.RECONCILIATION_TILE).should('be.visible').should('have.class','k3-review-reconciliation-tab');
}
searchK1Document(){
    cy.xpath(reconciliationLocators.SEARCH_FILE).type('14-STANLEY SITWELL 1 7_1_6.pdf')
    cy.xpath(reconciliationLocators.SCHEDULE_DROPDOWN).click();
    cy.xpath(reconciliationLocators.FED_K1).click();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
}
selectScheduleItems(){
    cy.xpath(stateSourceGridLocator.SELECT_DROPDOWN).click();
    cy.xpath(reconciliationLocators.SCHEDULE_ITEMS).click();   
}
selectScheduleItemDetails(){
    cy.xpath(stateSourceGridLocator.SELECT_DROPDOWN).click();
    cy.xpath(reconciliationLocators.SCHEDULE_ITEM_DETAILS).click();
}
selectFederalFootnotes(){
    cy.xpath(stateSourceGridLocator.SELECT_DROPDOWN).click();
    cy.xpath(reconciliationLocators.FEDERAL_FOOTNOTES).click(); 
}
selectFederalReclasses(){
    cy.xpath(stateSourceGridLocator.SELECT_DROPDOWN).click();
    cy.xpath(reconciliationLocators.FEDERAL_RELCASSES).click(); 
}
selectStateSource(){
    cy.xpath(stateSourceGridLocator.SELECT_DROPDOWN).click();
    cy.xpath(stateSourceGridLocator.STATE_SOURCE).click();
}
verifyReconciliationTileK1(){
    cy.xpath(reconciliationLocators.RECONCILIATION_TILE_K1).should('be.visible').should('have.class','review-reconciliation-tab_reconciliation');
}
}

export default ReconciliationFunctions;