import ProcessingFunctions from "../../../pages/Processing.page";
import ImportAndExportExpectedDocumentsFunctions from "../../../pages/Import&Export-ExpectedDocuments.page";
import ImportAndExportBusinessEntitiesFunctions from "../../../pages/Import&Export-BusinessEntities.page";

var processingFunctions = new ProcessingFunctions
var importAndExportExpectedDocumentsFunctions = new ImportAndExportExpectedDocumentsFunctions
var importAndExportBusinessEntitiesFunctions = new ImportAndExportBusinessEntitiesFunctions

Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})
When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})

Then("I click on Import & Export Data and open Business Entities section",()=>{
   importAndExportBusinessEntitiesFunctions.openImportAndExportBE();
})

And("I click on Download Blank Import Template button",()=>{
  importAndExportExpectedDocumentsFunctions.downloadBlankImportTemplate();
})

Then("I verify the Import Template is downloaded successfully",()=>{
    importAndExportBusinessEntitiesFunctions.verifyImportTemplate();
})

And("I click on Import Data Button",()=>{
    importAndExportExpectedDocumentsFunctions.clickOnImportData();
})

Then("I upload multiple entities",()=>{
    importAndExportBusinessEntitiesFunctions.uploadMultipleEntities();
})

And("I click on Export All Data Button",()=>{
    importAndExportExpectedDocumentsFunctions.exportAllData();
})

And("I apply and verify those filters",()=>{
   importAndExportBusinessEntitiesFunctions.applyAndVerifyFilters();
})
