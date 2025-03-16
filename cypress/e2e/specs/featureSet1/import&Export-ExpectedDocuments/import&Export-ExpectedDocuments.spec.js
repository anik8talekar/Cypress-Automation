import ProcessingFunctions from "../../../pages/Processing.page";
import ImportAndExportExpectedDocumentsFunctions from "../../../pages/Import&Export-ExpectedDocuments.page";

var processingFunctions = new ProcessingFunctions
var importAndExportExpectedDocumentsFunctions = new ImportAndExportExpectedDocumentsFunctions

Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})
When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})

Then("I click on Import & Export Data and open Expected Documents section",()=>{
   importAndExportExpectedDocumentsFunctions.openExpectedDocumentsSection();
})

And("I click on Download Blank Import Template button",()=>{
  importAndExportExpectedDocumentsFunctions.downloadBlankImportTemplate();
})

Then("I verify the Import Template is downloaded successfully",()=>{
    importAndExportExpectedDocumentsFunctions.verifyImportTemplateDownload();
})

And("I click on Import Data Button",()=>{
    importAndExportExpectedDocumentsFunctions.clickOnImportData();
})

Then("I upload multiple entities",()=>{
    importAndExportExpectedDocumentsFunctions.uploadMultipleEntities();
})

And("I click on Export All Data Button",()=>{
    importAndExportExpectedDocumentsFunctions.exportAllData();
})

And("I apply and verify all the filters",()=>{
  importAndExportExpectedDocumentsFunctions.applyAndVerifyFilters();
})

