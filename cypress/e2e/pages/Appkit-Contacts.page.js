import AppkitContactsLocators from "../locator files/Appkit-Contacts.locator";

var appkitContactsLocators = new AppkitContactsLocators

class AppkitContactsFunctions{
verifySlideout(){
    cy.xpath(appkitContactsLocators.ADD_CONTACT_SLIDEOUT).should('exist')
}
editExistingContact(){
    cy.xpath(appkitContactsLocators.EDIT_ICON).eq(0).dblclick({force: true});
    cy.xpath(appkitContactsLocators.NAME).eq(0).click().clear().type('Name Edited');
    cy.xpath(appkitContactsLocators.EMAIL).eq(0).click().clear().type('email@edited.com')
    cy.xpath(appkitContactsLocators.COMPANY_NAME).eq(0).click().clear().type('Company Name Edited')
    cy.xpath(appkitContactsLocators.PORTAL_URL).eq(0).click().clear().type('www.dummyurl.com')
}
saveEditedContact(){
    cy.xpath(appkitContactsLocators.SAVE_EDIT).eq(0).click();
    cy.wait(1000);
}
clickSaveForcefully(){
    cy.xpath(appkitContactsLocators.NAME).eq(0).click().clear();
    cy.xpath(appkitContactsLocators.EMAIL).eq(0).click().clear();
    cy.xpath(appkitContactsLocators.SAVE_BUTTON).click({force:true});
    cy.wait(1000);
}
validateRequiredFields(){
    cy.xpath(appkitContactsLocators.REQUIRED_FIELD).eq(0).should('have.text',' This field is required. ')
    cy.xpath(appkitContactsLocators.REQUIRED_FIELD).eq(1).should('have.text',' This field is required. ')
}
openAuditLogs(){
    cy.xpath(appkitContactsLocators.ADMIN).click();
    cy.xpath(appkitContactsLocators.AUDIT_LOGS).click();
}
clickOnScheduleChangeLogs(){
    cy.wait(1000);
    cy.xpath(appkitContactsLocators.SCHEDULE_CHANGE_LOGS).click();
}
interactWithTheGrid(){
    cy.wait(3000);
    cy.xpath(appkitContactsLocators.SEARCH_USER).type('DataFlow Automation')
    cy.xpath(appkitContactsLocators.FOOTER).click();
    cy.xpath(appkitContactsLocators.TAX_YEAR_DROPDOWN).click();
    cy.xpath(appkitContactsLocators.TAXYEAR_2023).click();
}
}

export default AppkitContactsFunctions;