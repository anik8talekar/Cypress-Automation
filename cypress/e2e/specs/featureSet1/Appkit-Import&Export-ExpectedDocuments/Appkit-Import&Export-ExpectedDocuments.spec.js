import ProcessingFunctions from "../../../pages/Processing.page";
import AppkitSecAuthFunctions from "../../../pages/Appkit-SecAuth.page"
import AppkitImportAndExportExpectedDocumentsFunctions from "../../../pages/Appkit-Import&Export-ExpectedDocuments.page";

var processingFunctions = new ProcessingFunctions
var appkitSecAuthFunctions = new AppkitSecAuthFunctions
var appkitImportAndExportExpectedDocumentsFunctions = new AppkitImportAndExportExpectedDocumentsFunctions


Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})

When("I click on Admin and open Expected Documents Tab", ()=>{
  processingFunctions.openEngagement();
  appkitImportAndExportExpectedDocumentsFunctions.openImportExportExpectedDocument();
})

Then("I verify new look and feel is implemented", ()=>{
appkitImportAndExportExpectedDocumentsFunctions.verifyExpectedDocUI();
})

And("I apply some filters",()=>{
appkitImportAndExportExpectedDocumentsFunctions.applyFilters();
})

Then("I verify filter results",()=>{
appkitImportAndExportExpectedDocumentsFunctions.verifyFilters();
})

And("I scroll to bottom of the page",()=>{
  appkitSecAuthFunctions.scrollToBottom();
 })

Then("I verify site provider is visible at the bottom of the page",()=>{
appkitSecAuthFunctions.verifySiteProvider();
 })