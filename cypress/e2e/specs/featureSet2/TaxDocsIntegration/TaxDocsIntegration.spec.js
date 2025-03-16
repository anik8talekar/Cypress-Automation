import TaxDocsIntegrationFunctions from "../../../pages/TaxDocsIntegration.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import DocumentCenterDocumentsFunctions from "../../../pages/DocumentCenterDocuments.page";
import MaskedEINFunctions from "../../../pages/MaskedEIN.page";

var taxDocsIntegrationFunctions = new TaxDocsIntegrationFunctions
var smartK1Functions = new SmartK1Functions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var documentCenterDocumentsFunctions = new DocumentCenterDocumentsFunctions
var maskedEINFunctions = new MaskedEINFunctions

Given("I open the application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
Then("I click on document Center and open documents section", ()=>{
    maskedEINFunctions.openDocuments();
})
And("I select the documents for comparison", ()=>{
    documentCenterDocumentsFunctions.selectDocuments();
 })
Then("I file them to tax docs",()=>{
    documentCenterDocumentsFunctions.exportToTaxDocs();
   taxDocsIntegrationFunctions.ClickOnEngagementDropdown();
   taxDocsIntegrationFunctions.SelectEngagement();
})
Then("I click on document Center and open download extracts section", ()=>{
    maskedEINFunctions.openDocuments();
    taxDocsIntegrationFunctions.ClickOnDownloadExtractsTab();
})
And("I Click on Export to Tax Docs Icon under actions column for specific document", ()=>{
    taxDocsIntegrationFunctions.ClickOnExportToTaxDocsIcon();
 })
 Then("I Select engagement and click on save button", ()=>{
    taxDocsIntegrationFunctions.ClickOnEngagementDropdown();
    taxDocsIntegrationFunctions.SelectEngagement();
    taxDocsIntegrationFunctions.ClickOnSaveButton();
})