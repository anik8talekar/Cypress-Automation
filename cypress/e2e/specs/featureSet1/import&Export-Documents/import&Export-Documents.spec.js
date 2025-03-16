import ProcessingFunctions from "../../../pages/Processing.page";
import ImportAndExportExpectedDocumentsFunctions from "../../../pages/Import&Export-ExpectedDocuments.page";
import ImportAndExportDocumentsFunctions from "../../../pages/Import&Export-Documents.page";

var processingFunctions = new ProcessingFunctions
var importAndExportExpectedDocumentsFunctions = new ImportAndExportExpectedDocumentsFunctions
var importAndExportDocumentsFunctions = new ImportAndExportDocumentsFunctions

Given("I open the application", () => {
   processingFunctions.openTheApp();
})
When("I click on existing engagement", () => {
   processingFunctions.openEngagement();
})

Then("I click on Import & Export Data and open Documents section", () => {
   importAndExportDocumentsFunctions.openImportAndExportDocuments();
})

And("I click on Download Blank Import Template button", () => {
   importAndExportExpectedDocumentsFunctions.downloadBlankImportTemplate();
})

Then("I verify the Import Template is downloaded successfully", () => {
   importAndExportDocumentsFunctions.verifyImportTemplate();
})

And("I click on Import Data Button", () => {
   importAndExportExpectedDocumentsFunctions.clickOnImportData();
})

Then("I upload multiple entities", () => {
   importAndExportDocumentsFunctions.uploadMultipleEntities();
})

And("I click on Export All Data Button", () => {
   importAndExportExpectedDocumentsFunctions.exportAllData();
   cy.wait(6000);
})