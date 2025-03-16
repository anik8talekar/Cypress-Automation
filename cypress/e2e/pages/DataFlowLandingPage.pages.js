import DataFlowLandingPageLocators from "../locator files/DataFlowLandingPage.locators";

var dataFlowLandingPageLocators = new DataFlowLandingPageLocators();

class DataFlowLandingPageFunctions{
    openTheApp(){
        cy.visit(Cypress.env('baseURL'))
     }
     VerifyClientEngagementPage(){
        cy.contains('Client Engagements').should('have.text','Client Engagements')
     }
     AdminButton(){
        cy.contains('Admin').click()
      }
      VerifyClientName(){
         cy.get(dataFlowLandingPageLocators.VERIFY_CLIENT_NAME).should("contain","abcd")
      }
      VerifyEngagementTitle(){
         cy.get(dataFlowLandingPageLocators.VERIFY_ENGAGEMENT_TITLE).eq(0).should('have.text',' Engagement Name ')
      }
      VerifyEngagementName(){
         cy.xpath(dataFlowLandingPageLocators.SEARCH_ENGAGEMENT).type("DATAFLOW_QA_AUTOMATION")
         cy.get(dataFlowLandingPageLocators.VERIFY_ENGAGEMENT_NAME).should("contain","DATAFLOW_QA_AUTOMATION")
      }
      VerifyEngagementType(){
         cy.get(dataFlowLandingPageLocators.VERIFY_ENGAGEMENT_TYPE).should("contain","Client")
      }
      VerifyLineOfBusiness(){
         cy.xpath(dataFlowLandingPageLocators.VERIFY_ENGAGEMENT_LineOfBusiness).eq(0).should("have.text","Testing")
      }
      AddEngagementButton(){
         cy.get(dataFlowLandingPageLocators.ADD_ENGAGEMENT_BUTTON).contains(' Add Engagement ').click()
      }
      ClickOnClientName(){
         cy.xpath(dataFlowLandingPageLocators.CLIENT_NAME).click()
      }
      ClickOnAbcd(){
         cy.get(dataFlowLandingPageLocators.ABCD_CLIENT).click()
      }
      TypeEngagementName(){
         cy.xpath(dataFlowLandingPageLocators.ENGAGEMENT_NAME).clear().type("Test Engagement for DF Landing Page")
      }
      SelectLocation(){
         cy.getTestData().then((data)=>{
         cy.xpath(dataFlowLandingPageLocators.LOCATION_DROPDOWN).eq(1).click()
         cy.get(dataFlowLandingPageLocators.LOCATION).contains(data['SelectLocation']).click()
         })
      }
      ClickOnLineOfBusiness(){
         cy.xpath(dataFlowLandingPageLocators.LINE_OF_BUSINESS).click()
      }
      ClickOnTesting(){
         cy.get(dataFlowLandingPageLocators.TESTING_LINE_OF_BUSINESS).contains(' Testing').click()
      }
      SelectEngagementType(){
         cy.xpath(dataFlowLandingPageLocators.ENGAGEMENT_TYPE).click()
         cy.xpath(dataFlowLandingPageLocators.SELECT_ENGAGEMENT_TYPE).click()
         cy.xpath(dataFlowLandingPageLocators.OK).click();
      }
      ClickOnSaveButton(){
         cy.get(dataFlowLandingPageLocators.SAVE_BUTTON).click()
         cy.wait(3000);
      }
      ClickOnAdminButton(){
         cy.contains('Admin').click({force: true})
      }
      ClickOnEditButton(){
         cy.get(dataFlowLandingPageLocators.EDIT_BUTTON).eq(0).click()
      }
      TypeInSearchBox(){
         cy.get(dataFlowLandingPageLocators.SEARCH_BOX).type("Test Engagement for DF Landing Page")
      }
      TypeEditedEngagementName(){
         cy.xpath(dataFlowLandingPageLocators.ENGAGEMENT_NAME).clear().type("Test Engagement for DF Landing Page Edited")
      }
      VerifyEngagementNameAfterEdit(){
         cy.xpath(dataFlowLandingPageLocators.ENGAGEMENT_TITLE).eq(1).should("have.text","Test Engagement for DF Landing Page")
      }

}
export default DataFlowLandingPageFunctions
