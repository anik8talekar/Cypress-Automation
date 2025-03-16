import TaxDocsIntegrationLocators from "../locator files/TaxDocsIntegration.locators";

var taxDocsIntegrationLocators = new TaxDocsIntegrationLocators

class TaxDocsIntegrationFunctions{

    ClickOnDownloadExtractsTab(){
        cy.xpath(taxDocsIntegrationLocators.DOWNLOAD_EXTRACT_TAB).click()
    }
    ClickOnExportToTaxDocsIcon(){
        cy.get(taxDocsIntegrationLocators.EXPORT_TO_TAX_DOC_ICON).eq(0).click({force: true})
    }
    ClickOnEngagementDropdown(){
        cy.xpath(taxDocsIntegrationLocators.ENGAGEMENT_DROPDOWN).click()
    }
    SelectEngagement(){
        cy.contains(' PwC Demo Client, DataFlow Testing Engagement').click()
    }
    ClickOnSaveButton(){
        cy.contains(' Save ').click()
    }
}
export default TaxDocsIntegrationFunctions