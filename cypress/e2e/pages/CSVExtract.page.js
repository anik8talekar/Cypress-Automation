import DocumentCenterDocumentsLocators from "../locator files/DocumentCenterDocuments.locator";
import CSVExtractLocators from "../locator files/CSVExtract.locator";

var documentCenterDocumentsLocators = new DocumentCenterDocumentsLocators
var cSVExtractLocators = new CSVExtractLocators

class CSVExtractFunctions{
    extractCSVData(){
        cy.xpath(documentCenterDocumentsLocators.ACTIONS_DROPDOWN).eq(0).click();
        cy.xpath(cSVExtractLocators.GENERATE_CSV_DATA_EXTRACT).click();
        cy.xpath(cSVExtractLocators.EXPORT).click();
    }
    selectK1andK3(){
        cy.xpath(cSVExtractLocators.TAX_YEAR_DROPDOWN).click();
        cy.xpath(cSVExtractLocators.TAX_YEAR).click();
        cy.get(cSVExtractLocators.SCHEDULE_DROPDOWN).click();
        cy.xpath(cSVExtractLocators.FILTER_FEDERAL_K1).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
        cy.xpath(documentCenterDocumentsLocators.DOCUMENT1_CHECKBOX).click({force: true});
        cy.get(cSVExtractLocators.SCHEDULE_DROPDOWN).click();
        cy.xpath(cSVExtractLocators.FILTER_FEDERAL_K3).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
        cy.xpath(documentCenterDocumentsLocators.DOCUMENT1_CHECKBOX).click({force: true});
        cy.get(cSVExtractLocators.SCHEDULE_DROPDOWN).click();
    }
    verifySuccessMessage(){
        cy.get(cSVExtractLocators.SUCCESS_MESSAGE).should('have.text', 'SUCCESS Process to generate CSV Data Extract has started ') 
        cy.get(cSVExtractLocators.SUCCESS_MESSAGE,{timeout:60000}).should('have.text', 'SUCCESS File extract completed ')
    }
    openDownloadExtracts(){
        cy.xpath(cSVExtractLocators.DOWNLOAD_EXTRACTS).click();
    }
    downloadExtract(){
        cy.xpath(cSVExtractLocators.DOWNLOAD_ICON).eq(0).click({force: true});
    }
    verifyStatusIcon(){
        cy.xpath(cSVExtractLocators.GENERATED_BY).should('have.text','dautomatio004');
        cy.xpath(cSVExtractLocators.GREEN_CIRCLE).should('have.class','ap-text-green ng-star-inserted');
        cy.xpath(cSVExtractLocators.STATUS).should('have.text',' Complete ');
    }
}
export default CSVExtractFunctions;