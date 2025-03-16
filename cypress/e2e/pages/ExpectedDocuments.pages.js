import ExpectedDocumentsLocators from "../locator files/ExpectedDocuments.locators"
import ApprovalLocators from "../locator files/Approval.locators";
import EngagementSetupLocators from "../locator files/EngagementSetup.locators";

var expectedDocumentsLocators = new ExpectedDocumentsLocators
var approvalLocators = new ApprovalLocators
var engagementSetupLocators = new EngagementSetupLocators

class ExpectedDocumentsFunctions{
    ClickOnExistingEngagement(){
        cy.xpath(expectedDocumentsLocators.SWARAJ_AUTOMATION_TEST).click
    }
    ClickOnExpectedDocumentsDropdown(){
       cy.xpath(expectedDocumentsLocators.EXPECTED_DOCUMENTS_DROPDOWN).click()
    }
    SelectExpectedDocument(){
        cy.get(expectedDocumentsLocators.EXPECTED_DOCUMENT_NAME_CELL).contains('  Federal K-1 (2020) ABC PARTNERSHIP - Automation  ').click()
    }
    VerifyMatchedDocument(){
        cy.get(expectedDocumentsLocators.VERIFY_MATCHED_EXPECTED_DOCUMENTS).should('contain',' Matched ')
    }
    ClickOnThumbsUpIcon(){
        cy.getTestData().then((data)=>{
        cy.get(expectedDocumentsLocators.INTELLIGENT_MATCHING).contains(data['ClickOnThumbsUpIcon']).click()
        })
    }
    ClickOnExpectedDocumentsDC(){
        cy.getTestData().then((data)=>{
        cy.xpath(data['EXPECTED_DOCUMENTS_DC']).click()
        })
    }
    ClickOnBulkCheckbox(){
        cy.get(expectedDocumentsLocators.BULK_ACTIONS_CHECKBOX).eq(0).click()
    }
    ClickOnActionsButton(){
        cy.get(expectedDocumentsLocators.ACTIONS_MENU_BUTTON).contains(' Actions ').click()
    }
    ClickOnUnmatchOption(){
        cy.get(expectedDocumentsLocators.UNMATCH_DROPDOWN_OPTION).click()
    }
    ClickOnUnmatchPopup(){
        cy.get(expectedDocumentsLocators.UNMATCH_POPUP).contains(' Unmatch ').click()
    }
    SelectExpectedDocument(){
        cy.get(expectedDocumentsLocators.SELECT_EXPECTED_DOCUMENT).eq(1).click({force: true})
    }
    ClickOnSetDatesOption(){
        cy.get(expectedDocumentsLocators.SET_DATES_OPTION).click()
    }
    ClickOnCutOffDates(){
        cy.get(expectedDocumentsLocators.CALENDAR_LOGO).eq(1).click()
        cy.get(expectedDocumentsLocators.CALENDAR).contains('21').click()
        cy.get(expectedDocumentsLocators.CLOSE_BUTTON).click({force: true})
    }
    ClickOnProjectedReceiveDate(){
        cy.get(expectedDocumentsLocators.CALENDAR_LOGO).eq(0).click()
        cy.get(expectedDocumentsLocators.CALENDAR).contains('15').click()
        cy.get(expectedDocumentsLocators.CLOSE_BUTTON).click()
    }
    ClickOnSaveButton(){
        cy.contains(' Save ').click()
    } 
    ChooseExpectedDocName(){
        cy.getTestData().then((data)=>{
            cy.get(expectedDocumentsLocators.EXPECTED_DOCUMENT_NAME_DROPDOWN).contains(data['ExpectedDocumentName']).click()
            })
    }   
    ClickOnMatchButton(){
        cy.get(expectedDocumentsLocators.MATCH_BTN).contains(' Match ').click()
    }
    TypeFileName(){
        cy.get(expectedDocumentsLocators.SEARCH_FILE_NAME).click().type('2021 Lucille Bluth K1_1_14.pdf')
    }
    SelectTaxYear(){
        cy.get(expectedDocumentsLocators.SELECT_TAX_YEAR).eq(4).click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnResetGridButton(){
        cy.xpath(expectedDocumentsLocators.RESET_GRID_BUTTON).click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    SelectTaxYear2021() {
        cy.get(approvalLocators.SELECT_TAX_YEAR).eq(3).click()
        cy.xpath(expectedDocumentsLocators.SELECT_2021_YEAR).click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnReviewButton(){
        cy.get(engagementSetupLocators.SELECT_FED_K1).eq(4).click()
        cy.get(engagementSetupLocators.FED_K1_OPTION).contains('Federal K-1').click({force: true})
        cy.get(engagementSetupLocators.REVIEW_BUTTON).eq(0).click({force: true})
      }

}
export default ExpectedDocumentsFunctions