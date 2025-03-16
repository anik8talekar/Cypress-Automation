import ProcessingFunctions from "../../../pages/Processing.page";
import ImportAndExportExpectedDocumentsFunctions from "../../../pages/Import&Export-ExpectedDocuments.page";
import ImportAndExportContactsFunctions from "../../../pages/Import&Export-Contacts.page";

var processingFunctions = new ProcessingFunctions
var importAndExportExpectedDocumentsFunctions = new ImportAndExportExpectedDocumentsFunctions
var importAndExportContactsFunctions = new ImportAndExportContactsFunctions

Given("I open the application", () => {
    processingFunctions.openTheApp();
})
When("I click on existing engagement", () => {
    processingFunctions.openEngagement();
})

Then("I click on Import & Export Data and open Contacts section", () => {
    importAndExportContactsFunctions.openImportAndExportContacts();
})

And("I click on Download Blank Import Template button", () => {
    importAndExportExpectedDocumentsFunctions.downloadBlankImportTemplate();
})

Then("I verify the Import Template is downloaded successfully", () => {
    importAndExportContactsFunctions.verifyImportTemplate();
})

And("I click on Import Data Button", () => {
    importAndExportExpectedDocumentsFunctions.clickOnImportData();
})

Then("I upload multiple entities", () => {
    importAndExportContactsFunctions.uploadMultipleEntities();
})

And("I click on Export All Data Button", () => {
    importAndExportExpectedDocumentsFunctions.exportAllData();
})
