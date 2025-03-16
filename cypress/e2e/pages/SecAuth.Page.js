import DataGenerator from "../../support/faker_test";
import SecAuthLocators from "../locator files/SecAurth.locator";

var secAuthLocators = new SecAuthLocators
var testdata;

before(()=>{
  cy.writeFile("cypress/fixtures/testdata.json",
  DataGenerator.generatetestData()
  );
  cy.readFile("cypress/fixtures/testdata.json").then((data)=>{
    testdata=data;
  });
});

class SecAuthFunctions{
openSecAuth(){
    cy.xpath(secAuthLocators.ADMIN).eq(0).click();
    cy.xpath(secAuthLocators.SECURITY_AUTHORIZATION).click();
}
verifyUserGrid(){
    cy.xpath(secAuthLocators.HEADER_SECURITY_AUTHORIZATION).should('be.visible');
    cy.xpath(secAuthLocators.USER_GRID).should('be.visible');
}
searchUser(){
    cy.wait(3000);
    cy.xpath(secAuthLocators.SEARCH_GUID_TEXTBOX).type('secauthtest004')
    cy.wait(5000);
    cy.xpath(secAuthLocators.EDIT_USER).click();
}
editDetails(){
   cy.xpath(secAuthLocators.USERNAME).should('have.class','trux-input-accent trux-input-accent--disabled')
   cy.xpath(secAuthLocators.FIRST_NAME).clear().type(testdata.firstName);
   cy.xpath(secAuthLocators.LAST_NAME).clear().type(testdata.lastName);
   cy.xpath(secAuthLocators.EMAIL).clear().type(testdata.email);
   cy.xpath(secAuthLocators.SAVE_BTN).click();
}
giveAccess(){
    cy.xpath(secAuthLocators.ENGAGEMENT_ACCESS).click();
    cy.xpath(secAuthLocators.ADD_ENGAGEMENT_ACCESS).click();
    cy.xpath(secAuthLocators.SELECT).eq(0).click();
    cy.xpath(secAuthLocators.SEARCH_ENGAGEMENT).type('QA Testing, DATAFLOW_QA_AUTOMATION')
    cy.xpath(secAuthLocators.DATAFLOW_QA_AUTOMATION).click();
 
    cy.xpath(secAuthLocators.SELECT).eq(1).click();
    cy.xpath(secAuthLocators.ENGAGEMENT_ADMIN).click();
 
    cy.xpath(secAuthLocators.SELECT).eq(2).click();
    cy.xpath(secAuthLocators.ONE_DAY).click();
    cy.xpath(secAuthLocators.SAVE_BTN).click();
}
editUserGroup(){
    cy.xpath(secAuthLocators.ENGAGEMENT_ACCESS).click();
    cy.xpath(secAuthLocators.EDIT_ENGAGEMENT_ACCESS_ICON).eq(0).click();
    cy.xpath(secAuthLocators.SELECT).eq(0).click();
    cy.xpath(secAuthLocators.ENGAGEMENT_USER_OPTION).click();
    cy.xpath(secAuthLocators.EDIT_ENGAGEMENT_ACCESS_ICON).eq(0).click();
    cy.xpath(secAuthLocators.SAVE_BTN).click();
}
extendAccess(){
    cy.xpath(secAuthLocators.ENGAGEMENT_ACCESS).click();
    cy.xpath(secAuthLocators.EDIT_ENGAGEMENT_ACCESS_ICON).eq(0).click();
    cy.xpath(secAuthLocators.SELECT).eq(1).click();
    cy.xpath(secAuthLocators.ONE_YEAR_OPTION).click();
    cy.xpath(secAuthLocators.EDIT_ENGAGEMENT_ACCESS_ICON).eq(0).click();
    cy.xpath(secAuthLocators.SAVE_BTN).click();
}
removeAccess(){
    cy.xpath(secAuthLocators.ENGAGEMENT_ACCESS).click();
    cy.xpath(secAuthLocators.EDIT_ENGAGEMENT_ACCESS_ICON).eq(1).click();
    cy.xpath(secAuthLocators.REMOVE).click();
}
provideNewPermission(){
    cy.xpath(secAuthLocators.PERMISSIONS).click();
   cy.xpath(secAuthLocators.ADD_PERMISSIONS).click();

   cy.xpath(secAuthLocators.SELECT).eq(0).click();
   cy.xpath(secAuthLocators.DATAFLOW_OPTION).click();

   cy.xpath(secAuthLocators.SELECT).eq(1).click();
   cy.xpath(secAuthLocators.STAR_OPTION).click();

   cy.xpath(secAuthLocators.SELECT).eq(2).click();
   cy.xpath(secAuthLocators.STAR_OPTION).click();

   cy.xpath(secAuthLocators.SELECT).eq(3).click();
   cy.xpath(secAuthLocators.DATAFLOW_QA_AUTOMATION).click();

   cy.xpath(secAuthLocators.SELECT).eq(4).click();
   cy.xpath(secAuthLocators.ONE_DAY_PERMISSION).click();
   cy.xpath(secAuthLocators.SAVE_BTN).click();
}
proideAdditionalPermission(){
    cy.xpath(secAuthLocators.PERMISSIONS).click();
   cy.xpath(secAuthLocators.ADD_PERMISSIONS).click();

   cy.xpath(secAuthLocators.SELECT).eq(0).click();
   cy.xpath(secAuthLocators.DATAFLOW_OPTION).click();

   cy.xpath(secAuthLocators.SELECT).eq(1).click();
   cy.xpath(secAuthLocators.BE_OPTION).click();

   cy.xpath(secAuthLocators.SELECT).eq(2).click();
   cy.xpath(secAuthLocators.CAN_VIEW_OPTION).click();

   cy.xpath(secAuthLocators.SELECT).eq(3).click();
   cy.xpath(secAuthLocators.DATAFLOW_QA_AUTOMATION).click();

   cy.xpath(secAuthLocators.SELECT).eq(4).click();
   cy.xpath(secAuthLocators.ONE_DAY_PERMISSION).click();
   cy.xpath(secAuthLocators.SAVE_BTN).click();
}
removePermissions(){
    cy.xpath(secAuthLocators.PERMISSIONS).click();
    cy.xpath(secAuthLocators.EDIT_ENGAGEMENT_ACCESS_ICON).eq(1).click();
    cy.xpath(secAuthLocators.REMOVE).click();

    cy.xpath(secAuthLocators.PERMISSIONS).click();
    cy.xpath(secAuthLocators.EDIT_ENGAGEMENT_ACCESS_ICON).eq(1).click();
    cy.xpath(secAuthLocators.REMOVE).click();
}
}
export default SecAuthFunctions;