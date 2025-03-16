import ExpDocumentsRolloverLocators from "../locator files/ExpDocumentsRollover.locators"

var expDocumentsRolloverLocators = new ExpDocumentsRolloverLocators

class ExpDocumentsRolloverFunctions{
    openTheApp(){
        cy.visit(Cypress.env('baseURL'))
     }
     openEngagement(){
        cy.xpath(expDocumentsRolloverLocators.EXISTING_ENGAGEMENT).click()
     }
     ClickOnAdminTab(){
         cy.get(expDocumentsRolloverLocators.ADMIN_TAB).contains(' Admin ').click()
     }
     ClickOnEngagementSettingsTab(){
      cy.xpath(expDocumentsRolloverLocators.ENGAGEMENT_SETTINGS_TAB).click()
      }
      ClickOnExpectedDocumentsRolloverTab(){
         cy.getTestData().then((data)=>{
         cy.xpath(data['EXPECTED_DOCUMENTS_ROLLOVER_TAB']).click()
         cy.wait(4000)
         })
      }
      ClickOnTaxYearDropDown(){
         cy.getTestData().then((data)=>{
         cy.wait(4000)
         cy.get(data['TAX_YEAR_DROPDOWN']).eq(0).click()
         })
      }
      ClickOnTaxYear(){
         cy.getTestData().then((data)=>{
         cy.get(expDocumentsRolloverLocators.TAX_YEAR).contains(data['TAXYEAR']).click()
         })
      }
      ClickOnScheduleCheckBox(){
         cy.get(expDocumentsRolloverLocators.SCHEDULE_CHECKBOX).eq(1).click()
      }
      ClickOnRollOverButton(){
         cy.get(expDocumentsRolloverLocators.ROLL_OVER_BUTTON).contains(' Roll Over ').click()
         cy.wait(4000)
      }
      ClickOnYesPopup(){
         cy.wait(4000)
         cy.get(expDocumentsRolloverLocators.YES_POPUP_OPTION).click()
      }
      ClickOnDirectConnectProfileDropDown(){
         cy.get(expDocumentsRolloverLocators.DIRECT_CONNECT_PROFILE_DROPDOWN).eq(0).click()
      }
      ClickOnOption1(){
         cy.getTestData().then((data)=>{
         cy.contains(data['OPTION1_DIRECT_CONNECT_BULK_ASSIGN']).click()
         })
      }
      ClickOnBulkAssignCheckBox(){
         cy.get(expDocumentsRolloverLocators.BULK_ASSIGN_CHECKBOX).eq(0).click( {force:true} )
      }
      ClickOnBulkAssignButton(){
         cy.get(expDocumentsRolloverLocators.BULK_ASSIGN_BUTTON).contains(' Bulk Assign ').click()
      }
      ClickOnDirectConnectProfile(){ 
         cy.get(expDocumentsRolloverLocators.DIRECT_CONNECT_PROFILE_BULK_ASSIGN).click()
      }
      ClickOnOption1BulkAssign(){
         cy.getTestData().then((data)=>{
         cy.contains(data['OPTION1_DIRECT_CONNECT_BULK_ASSIGN']).click()
      })
      }
      ClickOnAssignButton(){
         cy.get(expDocumentsRolloverLocators.ASSIGN_BUTTON).contains(' Assign ').click()
      }
      ClickOnOption1Popup(){ 
         cy.getTestData().then((data)=>{
         cy.get(expDocumentsRolloverLocators.OPTION1_DIRECT_CONNECT).contains(data['OPTION1_DIRECT_CONNECT_BULK_ASSIGN']).click()
         })
      }
}
export default ExpDocumentsRolloverFunctions;