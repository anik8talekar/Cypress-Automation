import ConsolidatedReportsFunctions from "../../../pages/consolidatedReport.pages";
import DocCenterExpectedDocumentsFunctions from "../../../pages/DocCenterExpectedDocuments.pages";

var consolidatedReportsFunctions = new ConsolidatedReportsFunctions
var docCenterExpectedDocumentsFunctions = new DocCenterExpectedDocumentsFunctions

Given("I Open the Application",()=>{
    consolidatedReportsFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    docCenterExpectedDocumentsFunctions.SearchEngagement();
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
    consolidatedReportsFunctions.VerifyCompleteMessage();
})