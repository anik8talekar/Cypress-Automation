import ProcessingFunctions from "../../../pages/Processing.page";
import ImportAndExportExpectedDocumentsFunctions from "../../../pages/Import&Export-ExpectedDocuments.page";
import ImportAndExportReclassesFunctions from "../../../pages/Import&Export-Reclasses.page";

var processingFunctions = new ProcessingFunctions
var importAndExportExpectedDocumentsFunctions = new ImportAndExportExpectedDocumentsFunctions
var importAndExportReclassesFunctions = new ImportAndExportReclassesFunctions

Given("I open the application", ()=>{
    processingFunctions.openTheApp();
 })
 When("I click on existing engagement", ()=>{
    processingFunctions.openEngagement();
 })
 
 Then("I click on Import & Export Data and open Reclasses section",()=>{
    importAndExportReclassesFunctions.openImportAndExportReclasses();
 })
 
 And("I click on Download Blank Import Template button",()=>{
   importAndExportExpectedDocumentsFunctions.downloadBlankImportTemplate();
 })
 
 Then("I verify the Import Template is downloaded successfully",()=>{
    importAndExportReclassesFunctions.verifyImportTemplate();
 })
 
 And("I click on Import Data Button",()=>{
     importAndExportExpectedDocumentsFunctions.clickOnImportData();
 })
 
 Then("I upload multiple entities",()=>{
    importAndExportReclassesFunctions.uploadMultipleEntities();
 })
 
 And("I click on Export All Data Button",()=>{
     importAndExportExpectedDocumentsFunctions.exportAllData();
 })
 
