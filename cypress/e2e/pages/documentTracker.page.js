import DocumentTrackerLocators from "../locator files/documentTracker.locator";
import DocumentCenterDocumentsLocators from "../locator files/DocumentCenterDocuments.locator";
import EngagementNameGenerator from "../../support/engagementNameGenerator";

var documentTrackerLocators = new DocumentTrackerLocators
var documentCenterDocumentsLocators = new DocumentCenterDocumentsLocators
var NameData;

class DocumentTrackerFunctions{
    generateName(){
        cy.writeFile(
            "cypress/fixtures/engagementName.json",
            EngagementNameGenerator.generateEngagementName()
           );
           cy.readFile("cypress/fixtures/engagementName.json").then((data)=>{
            NameData = data;
            });
    }
openDocumentTracker(){
    cy.xpath(documentTrackerLocators.DOCUMENT_CENTER).click();
    cy.xpath(documentTrackerLocators.DOCUMENT_TRACKER).click();
    cy.xpath(documentCenterDocumentsLocators.RESET_GRID).click();
    cy.xpath(documentCenterDocumentsLocators.SELECT_TAX_YEAR).click();
    cy.xpath(documentCenterDocumentsLocators.TAX_YEAR).click();
}
verifyRequiredColumns(){
    cy.xpath(documentTrackerLocators.AFS_RECIEVED).should('exist');
    cy.xpath(documentTrackerLocators.APPROVED_FOR_PREP).should('exist');
    cy.xpath(documentTrackerLocators.FUND_RETURN_DELIVERED).should('exist');
    cy.xpath(documentTrackerLocators.TB_RECIEVED).should('exist');
    cy.xpath(documentTrackerLocators.FUND_RETURN_DELIVERED_DATE).should('exist');
    cy.xpath(documentTrackerLocators.AFS_RECIEVED_DATE).should('exist');
    cy.xpath(documentTrackerLocators.APPROVED_FOR_RETURN_DATE).should('exist');
    cy.xpath(documentTrackerLocators.TB_RECIEVED_DATE).should('exist');
}
selectAndVerifyInvestorSummary(){
    cy.xpath(documentTrackerLocators.GEORGE_BLUTH_FUND).click();
    cy.get('.ap-modal-footer > :nth-child(1) > .awm-button > .ap-button').click();
    cy.xpath(documentTrackerLocators.DETAIL_GRID).should('be.visible');
}
verifyNewColumns(){
    cy.xpath(documentTrackerLocators._1042S_RECIEVED).should('exist');
    cy.xpath(documentTrackerLocators._1042S_RECIEVED_DATE).should('exist');
    cy.xpath(documentTrackerLocators._8805_RECIEVED).should('exist');
    cy.xpath(documentTrackerLocators._8805_RECIEVED_DATE).should('exist');   
}
verifyCutOffColumns(){
    cy.xpath(documentTrackerLocators.AGGREGATED_ENDING_CAPITAL).should('exist');
    cy.xpath(documentTrackerLocators.CAPITAL_RECIEVED).should('exist');
    cy.xpath(documentTrackerLocators.AGGREGATED_TAXABLE_INCOME).should('exist');
    cy.xpath(documentTrackerLocators.TAXABLE_INCOME_RECIEVED).should('exist');  
}
verifyFundIsUnselectable(){
    cy.xpath(documentTrackerLocators.FUND).should('have.attr', 'title', 'Underlying fund has no footnotes matched');
}
verifyColumnUpdates(){
    cy.xpath(documentTrackerLocators.COLUMN_RECIEVED).should('have.class','dx-datagrid-text-content dx-text-content-alignment-right')
    cy.xpath(documentTrackerLocators.COLUMN_CUTOFF_DATE).should('have.class','dx-datagrid-text-content dx-text-content-alignment-left')
}
selectColumns(){
    cy.xpath(documentTrackerLocators.COLUMN_CHOOSER).click();
    cy.xpath(documentTrackerLocators.PRIMARY_ID).click();
    cy.xpath(documentTrackerLocators.TOTAL_NAV).click();
}
unselectColumns(){
    cy.xpath(documentTrackerLocators.PRIMARY_ID).click();
    cy.xpath(documentTrackerLocators.TOTAL_NAV).click();
}
openColumnChooser(){
    cy.xpath(documentTrackerLocators.COLUMN_CHOOSER).click();
}
verifyIDAndNAV(){
    cy.xpath(documentTrackerLocators.COLUMN_PRIMARY_ID).should('exist')
    cy.xpath(documentTrackerLocators.COLUMN_TOTAL_NAV).should('exist')
}
verifyInvisibility(){
    cy.xpath(documentTrackerLocators.COLUMN_PRIMARY_ID).should('not.exist')
    cy.xpath(documentTrackerLocators.COLUMN_TOTAL_NAV).should('not.exist')
}
performSearchOperation(){
    cy.wait(3000);
    cy.xpath(documentTrackerLocators.DOMESTIC_DROPDOWN).click();
    cy.xpath(documentTrackerLocators.DOMESTIC_VALUE).click();
    cy.xpath(documentTrackerLocators.CAPITAL_AMT).type('9995459');
    cy.xpath(documentTrackerLocators.CAPITAL_PERCENTAGE).type('100');
    cy.xpath(documentTrackerLocators.INCOME_AMT).type('4833938');
    cy.xpath(documentTrackerLocators.INCOME_PERCENTAGE).type('100');
    cy.xpath(documentTrackerLocators.RECIEVED_PER).type('100');
}
saveSearchPattern(){
    cy.xpath(documentTrackerLocators.SAVE_SEARCH_BUTTON).click();
    cy.xpath(documentTrackerLocators.FILTER_NAME_TEXTBOX).type(NameData.EngagementName)
    cy.xpath(documentTrackerLocators.SAVE_BTN).click();
    cy.xpath(documentTrackerLocators.RESET_GRID).click();
}
applySavedFilter(){
    cy.xpath(documentCenterDocumentsLocators.SELECT_TAX_YEAR).click();
    cy.xpath(documentCenterDocumentsLocators.TAX_YEAR).click();
    cy.xpath(documentTrackerLocators.SELECT_FILTER).click();
    cy.xpath(documentTrackerLocators.SELECT_CORPORTATION).eq(0).click();
}
verifySearchResult(){
    cy.getTestData().then((data)=>{
    cy.xpath(documentTrackerLocators.INVESTOR_NAME).should('have.text', data['DT_investor_name'])
    cy.xpath(documentTrackerLocators.C2_VALUE).should('have.text','Domestic')
    cy.xpath(documentTrackerLocators.C3_VALUE).should('have.text', data['ULFs'])
    cy.xpath(documentTrackerLocators.C4_VALUE).should('have.text',data['AEC'])
    cy.xpath(documentTrackerLocators.C5_VALUE).should('have.text','100%')
    cy.xpath(documentTrackerLocators.C6_VALUE).should('have.text',data['ATI'])
    cy.xpath(documentTrackerLocators.C7_VALUE).should('have.text','100%')
    cy.xpath(documentTrackerLocators.C9_VALUE).should('have.text','100%')
})
}
deleteSavedFilter(){
    cy.xpath(documentTrackerLocators.SELECT_FILTER).click();
    cy.xpath(documentTrackerLocators.DELETE_BTN).eq(0).click();
    cy.xpath(documentTrackerLocators.RESET_GRID).click();
}

}

export default DocumentTrackerFunctions;