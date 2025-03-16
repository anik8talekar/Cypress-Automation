import Form8621Functions from "../../../pages/Form8621.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import AuditLogsFunctions from "../../../pages/AuditLogs.pages";
import ExecutiveReviewFunctions from "../../../pages/ExecutiveReview.pages";
import DocumentCenterDocumentsFunctions from "../../../pages/DocumentCenterDocuments.page";
import ConsolidatedReportsFunctions from "../../../pages/consolidatedReport.pages";

var consolidatedReportsFunctions = new ConsolidatedReportsFunctions
var form8621Functions = new Form8621Functions
var enagegementSetupFunctions = new EnagegementSetupFunctions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var smartK1Functions = new SmartK1Functions
var auditLogsFunctions = new AuditLogsFunctions
var executiveReviewFunctions = new ExecutiveReviewFunctions
var documentCenterDocumentsFunctions = new DocumentCenterDocumentsFunctions

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
And("I go to Executive Review page and Select any document",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    auditLogsFunctions.ClickOnExecutiveReviewTab();
    cy.wait(2000);
    form8621Functions.ClickOnExecutiveReviewCheckBox();
    cy.wait(2000);
})
 And("I Click on Details Button",()=>{
    form8621Functions.ClickOnDetailsButton();
})
And("I Select all the Footnotes type one by one & Verify data in the grid",()=>{
    executiveReviewFunctions.VerifyUBTI_ECI_PASSIVE_FDAP_Grid();
    executiveReviewFunctions.ClickOnSSI_SSWFootnote();
    executiveReviewFunctions.ClickOnFootnote926();
    executiveReviewFunctions.Verify926Grid();
    executiveReviewFunctions.ClickOnFootnote8865();
    cy.wait(4000);
    executiveReviewFunctions.Verify926Grid();
    form8621Functions.ClickOn8621();
    cy.wait(4000);
    executiveReviewFunctions.Verify926Grid();
    executiveReviewFunctions.ClickOnFootnote8886();
    cy.wait(4000);
    executiveReviewFunctions.Verify926Grid();
    executiveReviewFunctions.ClickOnFootnoteInstallSale();
    cy.wait(4000);
    executiveReviewFunctions.Verify926Grid();
    executiveReviewFunctions.ClickOnFootnoteEIPTransfers();
    cy.wait(4000);
    executiveReviewFunctions.Verify926Grid();
    executiveReviewFunctions.ClickOnFootnote199A();
    cy.wait(4000);
    executiveReviewFunctions.Verify926Grid();
})
And("I go to Executive Review tab from Document Center",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    auditLogsFunctions.ClickOnExecutiveReviewTab();
    cy.wait(4000);
})
Then("I Click on Export all Data Button & download the file",()=>{
    documentCenterDocumentsFunctions.exportAllData();
})
And("I Hover on the eye icon from Investment & Investor Tax ID & Click on eye icon",()=>{
    executiveReviewFunctions.ClickOnEyeIconInvestmentTaxID();
})
Then("I Verify whole Investment & Investor Tax ID is visible without X sign",()=>{
    executiveReviewFunctions.VerifyInvestmentTaxID();
})
And("I Select two or more documents",()=>{
    executiveReviewFunctions.selectDocuments();
})
Then("I click on view side by side button",()=>{
    executiveReviewFunctions.compareDocuments();
})
And("I Click on any column header to sort",()=>{
    executiveReviewFunctions.ClickOnInvestmentNameHeadingSorting();
    executiveReviewFunctions.ClickOnFileNameSorting();
})
Then("I Verify column header sorting",()=>{
    executiveReviewFunctions.VerifyExecutiveReviewGrid();
})
And("I Select & Unselect column headers from dropdown",()=>{
    executiveReviewFunctions.ClickOnColumnChooser();
    executiveReviewFunctions.ClickOnColumnChooserDropdown();
    executiveReviewFunctions.ClickOnDocNameDropdown();
})
Then("I Verify Columns are present or not",()=>{
    executiveReviewFunctions.VerifyDocNameGrid();
})
And("I Search Filename & Filter Tax year from dropdown",()=>{
    executiveReviewFunctions.SelectSchedule();   
    executiveReviewFunctions.SelectTaxYearGrid();
    executiveReviewFunctions.TypeFileName();
})
Then("I Verify Filename & Tax year in the grid",()=>{
    executiveReviewFunctions.VerifyExecutiveReviewGrid();
})
And("I Click on Save Search Button & give name to saved Search and click on save button",()=>{
    enagegementSetupFunctions.ClickOnSaveSearchButton();
    enagegementSetupFunctions.TypeSearchName();
    executiveReviewFunctions.ClickOnSaveButton();
    cy.wait(2000)
    enagegementSetupFunctions.ClickOnSearchByDropdown();
    cy.wait(2000)
    executiveReviewFunctions.VerifySavedSearch();
})
Then("I Search the Saved Search from Saved Search bar on the top and above the grid",()=>{
    cy.wait(2000)
    executiveReviewFunctions.ClickOnSavedSearchTop();
    cy.wait(2000)
})
And("I Select two or more documents from Executive Review tab",()=>{
    auditLogsFunctions.ClickOnExecutiveReviewTab();
    cy.wait(2000);
    executiveReviewFunctions.selectDocuments();
})
And("I Select Tax Year from Tax Year dropdown",()=>{
    executiveReviewFunctions.ClickOnTaxYearDropdown();
    executiveReviewFunctions.SelectTaxYear();
})
Then("I Verify Selected Tax Year in grid",()=>{
    executiveReviewFunctions.VerifyTaxYearGrid();
})
And("I Select Multiple Investors from Executive Review grid",()=>{
    form8621Functions.ClickOnExecutiveReviewCheckBox();
    cy.wait(2000);
    executiveReviewFunctions.ClickOnExecutiveReviewCheckBox();
})
And("I verify them in Executive Review details page & also in grid",()=>{
    executiveReviewFunctions.VerifyDocumentsCount();
    executiveReviewFunctions.VerifySelectedDocs();
})
Then("I Click on Export all Data Button from Executive Review Details tab",()=>{
    executiveReviewFunctions.ClickOnExportAllDataButton();
})
Then("I Verify Summary Information from Fund Summary tab",()=>{
    documentCenterDocumentsFunctions.verifyCounterElements();
})
Then("I Verify Fund Details Summary Information from Executive Review Details tab",()=>{
    cy.wait(5000);
    executiveReviewFunctions.verifyDetailsCounterElements();
})
Then("I Scroll the Executive Review Summary grid to view all data",()=>{
    cy.wait(2000);
    executiveReviewFunctions.ScrollExecReviewGrid();
    cy.wait(2000);
})
And("I Check Custom Column Settings Button above grid",()=>{
    executiveReviewFunctions.VerifyCustomColumnBtn();
})
And("I Check Saved Search Button above grid",()=>{
    executiveReviewFunctions.VerifySaveSearchBtn();
})
Then("I Check Masked EIN Button above grid",()=>{
    executiveReviewFunctions.VerifyMaskedEINBtn();
})
Then("I click on Show 0 Values & Show Final Values Button",()=>{
    cy.wait(2000);
    executiveReviewFunctions.ClickOnShow0ValuesBtn();
    cy.wait(2000);
    executiveReviewFunctions.ClickOnShowFinalValuesBtn();
    cy.wait(2000);
})
And("I Verify Final Value Column & 0 Values in grid",()=>{
    executiveReviewFunctions.VerifyFinalValueColumn();
    executiveReviewFunctions.Verify0ValueinGrid();
})
Then("I Verify Column Headings of Executive Review Details grid",()=>{
    executiveReviewFunctions.VerifyExecReviewDetailsColumn();
})
Then("I Verify totals displayed on Totals bar",()=>{
    cy.wait(5000);
    executiveReviewFunctions.verifyDetailsCounterElements();
})
And("I Click on Document Center Section",()=>{
    consolidatedReportsFunctions.ClickOnDocumentCenterTab();
})
Then("I Click on Documents tab",()=>{
    consolidatedReportsFunctions.ClickOnDocuments();
})
And("I Select bulk documents and click on generate consolidated comparison report",()=>{
    consolidatedReportsFunctions.SelectBulkDocuments();
})
Then("I Click on Download Extract tab",()=>{
    consolidatedReportsFunctions.VerifySuccessMessage();
    consolidatedReportsFunctions.ClickOnDownloadExtract();
})
And("I click on download button",()=>{
    consolidatedReportsFunctions.ClickOnDownloadButton();
})
Then("I open 8621 details for both the documents selected",()=>{
    form8621Functions.ClickOnDetailsButton();
    form8621Functions.ClickOn8621();
 })
 Then("I verify the total number of 8621 instances",()=>{
    cy.wait(2000);
    executiveReviewFunctions.Verify8621TotalInstances();
 })
 And("I Reset the Executive Review grid",()=>{
    executiveReviewFunctions.ClickOnResetGridButton();
})
Then("I Click on Click on Saved Search dropdown and select newly created saved Search",()=>{
    enagegementSetupFunctions.ClickOnSearchByDropdown();
    cy.wait(2000);
    executiveReviewFunctions.ClickOnSavedSearch()
 })
 Then("I Favorite a Saved Search",()=>{
    enagegementSetupFunctions.ClickOnSearchByDropdown();
    cy.wait(2000);
    executiveReviewFunctions.ClickOnFavoriteIcon();
  })

