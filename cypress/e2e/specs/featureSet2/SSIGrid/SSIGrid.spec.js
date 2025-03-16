import SSIGridFunctions from "../../../pages/SSIGrid.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import DirectConnectFunctions from "../../../pages/DirectConnect.page";
import smartK1Functions from "../../../pages/Smart-k1.pages";
import AllocableItemTemplateFunctions from "../../../pages/AllocableItemTemplate.page";
import UploadFileRedesignFunctions from "../../../pages/UploadFile-Redesign.page";
import AllocableItemReviewGridFunctions from "../../../pages/AllocableItemReviewGrid.page";
import ExpectedDocumentsEditsFunctions from "../../../pages/ExpectedDocumentsEdits.page";

var directConnectFunctions = new DirectConnectFunctions();
var enagegementSetupFunctions = new EnagegementSetupFunctions();
var ssiGridFunctions = new SSIGridFunctions();
var smartK1Function = new smartK1Functions();
var allocableItemTemplateFunctions = new AllocableItemTemplateFunctions();
var uploadFileRedesignFunctions = new UploadFileRedesignFunctions();
var allocableItemReviewGridFunctions = new AllocableItemReviewGridFunctions();
var expectedDocumentsEditsFunctions = new ExpectedDocumentsEditsFunctions();

Given("I Open the Application", () => {
    enagegementSetupFunctions.openTheApp();
    directConnectFunctions.generateName();
})

When("I create a new engagement", () => {
    directConnectFunctions.createEngagement();
    directConnectFunctions.openNewEngagement();
    directConnectFunctions.importBusinessEntities();
})

When("I click on existing engagement", () => {
    allocableItemTemplateFunctions.openEngagement()
})

And("I click on Upload files section", () => {
    ssiGridFunctions.OpenUploadFiles();
})

Then("I upload the file under Upload Files section", () => {
    ssiGridFunctions.uploadSingleFile();
})

Then("I click on the Admin section", () => {
    ssiGridFunctions.ClickOnAdmin();
})

And("I click on the Direct Connect", () => {
    ssiGridFunctions.ClickOnDirectConnect();
})

And("I add the Direct Connect Profile", () => {
    ssiGridFunctions.AddDirectConnectProfile();
})

And("I edit the newly added Direct Connect profile", () => {
    ssiGridFunctions.EditProfile();
})

Then("I create BE from TRACK FTE and import it", () => {
    ssiGridFunctions.CreateAndImportTrackFTE();
})

And("I upload a file under the Upload Files section", () => {
    uploadFileRedesignFunctions.openUploadFiles()
    uploadFileRedesignFunctions.ClickOnUploadButton()
    allocableItemReviewGridFunctions.UploadFiles()
    allocableItemReviewGridFunctions.GoToFileProcessingSection()
})

Then("I Click on Expected Documents Section", () => {
    allocableItemReviewGridFunctions.GoToDocumentCenter()
    allocableItemReviewGridFunctions.GoToExpectedDocuments()
    expectedDocumentsEditsFunctions.ClickOnExpectedDocuments()
})

And("I add a new Expected Document for without Standard Description", () => {
    expectedDocumentsEditsFunctions.AddExpectedDocument3()
})

And("I add a new Taxonomy template", () => {
    ssiGridFunctions.AddTaxonomyTemplate();
})

And("I add a new Allocable Template", () => {
    allocableItemTemplateFunctions.AddAllocableItemTemplate2();
})

And("I add the expected documents", () => {
    ssiGridFunctions.AddExpectedDocument();
})

And("I add the custom Taxonomy Mapping", () => {
    ssiGridFunctions.CustomTaxonomyMapping();
})

Then("I upload the Fed K-1 file under Upload Files section", () => {
    ssiGridFunctions.uploadSingleFile();
})

And("I open the Document Center section", () => {
    ssiGridFunctions.OpenDocumentCenter();
})

When("I click on existing engagement", () => {
    smartK1Function.SearchEngagement();
})

Then("I open Fed K-1 PDF in new tab", () => {
    ssiGridFunctions.OpenK1Pdf();
})

Then("I upload the Fed K-3 file under Upload Files section", () => {
    ssiGridFunctions.uploadSingleFile2();
})

Then("I open Fed K-3 PDF in new tab", () => {
    ssiGridFunctions.OpenK3Pdf();
})

Then("I add the Direct Connect Profile without Standard Description", () => {
    ssiGridFunctions.AddDirectConnectProfile2();
})

And("I edit the Direct Connect profile without Standard Description", () => {
    ssiGridFunctions.EditProfile2();
})

Then("I go to Allocable Item Template section", () => {
    allocableItemTemplateFunctions.GoToAllocableItemTemplate();
})

And("I add a new Allocable Template", () => {
    allocableItemTemplateFunctions.AddAllocableItemTemplate2();
})

Then("I complete a TRACK Taxonomy Mapping", () => {
    // ssiGridFunctions.TrackTaxonomyMapping();
    allocableItemTemplateFunctions.MapAllocableItemTemplate2()
})