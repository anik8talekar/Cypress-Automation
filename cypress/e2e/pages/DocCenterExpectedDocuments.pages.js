import DocCenterExpectedDocumentsLocators from "../locator files/DocCenterExpectedDocuments.locators";
import DirectConnectLocators from "../locator files/directConnect.locatorsP2"
import Smartk1Locators from "../locator files/Smart-k1.locators";
 
var directConnectLocators = new DirectConnectLocators
var docCenterExpectedDocuments = new DocCenterExpectedDocumentsLocators
var smartK1Locators = new Smartk1Locators
 
class DocCenterExpectedDocumentsFunctions{
    SearchEngagement(){
        cy.xpath(smartK1Locators.SEARCH_ENGAGEMENT).type('DATAFLOW_QA_AUTOMATION')
        cy.get(smartK1Locators.CLICK_ENGAGEMENT).click()
    }
    TypeTaxYear(){
        cy.get(directConnectLocators.TAX_YEAR_FIELD).type('2023')
    }
    SearchTaxYear(){
        cy.get(directConnectLocators.INVESTOR_SEARCH_FIELD).eq(0).click({force: true})
        cy.get(directConnectLocators.EXPECTED_DOCUMENT_PAGE).click()
        cy.xpath(directConnectLocators.RESET_GRID_BUTTON).click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
        cy.get(directConnectLocators.SEARCH_TAX_YEAR).eq(0).type('2023')
    }
    SelectInvestor(){
        cy.get(directConnectLocators.FEDERAL_K1).contains(' MADISON').click()
    }
    SelectInvestment(){
        cy.get(directConnectLocators.FEDERAL_K1).contains(' MADISON').click()
    }
    TypeInvestorNameToSearch(){
        cy.get(directConnectLocators.INVESTOR_SEARCH_FIELD).eq(1).click()
    }
    VerifyInvestorName(){
        cy.get(directConnectLocators.VERIFY_INVESTOR_NAME).should('contain','STANLEY SITWELL')
    }
    VerifyInvestmentName(){
        cy.get(directConnectLocators.VERIFY_INVESTOR_NAME).should('contain','STANLEY SITWELL')
    }
    ClickOnDirectConnectDropDown(){
        cy.get(docCenterExpectedDocuments.DIRECT_CONNECT_DROPDOWN).eq(1).click()
    }
    ClickOnNoOption(){
        cy.get(docCenterExpectedDocuments.CLICK_NO_OPTION).contains('No').click()
    }
    ClickOnEditButton(){
        cy.get(docCenterExpectedDocuments.EDIT_BUTTON).click()
    }
    EditInvestment(){
        cy.get(directConnectLocators.VERIFY_INVESTOR_NAME).should('contain',' STANLEY SITWELL FUND')
    }
    ClickOnExportAllDataButton(){
        cy.wait(3000)
        cy.xpath(docCenterExpectedDocuments.EXPORT_ALL_DATA_BUTTON).click()
    }
    ClickOnProjectedDate(){
        cy.get(docCenterExpectedDocuments.CALENDAR_ICON).click()
        cy.get(docCenterExpectedDocuments.EDIT_PROJECTED_DATE).click()
    }
}
export default DocCenterExpectedDocumentsFunctions;