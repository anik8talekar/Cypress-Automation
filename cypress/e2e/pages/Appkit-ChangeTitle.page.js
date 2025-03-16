import AppkitChangeTitleLocators from "../locator files/Appkit-ChangeTitle.locator";

var appkitChangeTitleLocators = new AppkitChangeTitleLocators

class AppkitChangeTitleFucntions{
openPendingRequests(){
    cy.xpath(appkitChangeTitleLocators.PENDING_REQUEST_TAB).eq(0).click();
}
verifyTitles(){
    cy.xpath(appkitChangeTitleLocators.ALL_ENGAGEMENT_TILE).should('exist')
    cy.xpath(appkitChangeTitleLocators.ENGAGEMENT_WITH_SINGLE_ADMIN).should('exist')
}
verifyTileCount(){
    cy.xpath(appkitChangeTitleLocators.TITLE).eq(0).then(function(T1){
        cy.log(T1.text())
        cy.xpath(appkitChangeTitleLocators.TITLE).eq(0).should('have.text', (T1.text()))
        })

    cy.xpath(appkitChangeTitleLocators.TITLE).eq(1).then(function(T2){
         cy.log(T2.text())
         cy.xpath(appkitChangeTitleLocators.TITLE).eq(1).should('have.text', (T2.text()))
        })
}
}
export default AppkitChangeTitleFucntions;