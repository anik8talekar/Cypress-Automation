import AllocableItemReviewGridFunctions from "../../../pages/AllocableItemReviewGrid.page";
import AllocableItemTemplateFunctions from "../../../pages/AllocableItemTemplate.page";
import UploadFileRedesignFunctions from "../../../pages/UploadFile-Redesign.page";
import ExpectedDocumentsEditsFunctions from "../../../pages/ExpectedDocumentsEdits.page";
import SSIGridFunctions from "../../../pages/SSIGrid.pages";

var allocableItemReviewGridFunctions = new AllocableItemReviewGridFunctions();
var allocableItemTemplateFunctions = new AllocableItemTemplateFunctions();
var expectedDocumentsEditsFunctions = new ExpectedDocumentsEditsFunctions();
var ssiGridFunctions = new SSIGridFunctions();
var uploadFileRedesignFunctions = new UploadFileRedesignFunctions();

Given("I Open the Application", () => {
    allocableItemTemplateFunctions.openTheApp()
})

When("I click on existing engagement", () => {
    allocableItemTemplateFunctions.openEngagement()
})

And("I click on the Admin section", () => {
    ssiGridFunctions.ClickOnAdmin();
})

Then("I click on the Direct Connect", () => {
    ssiGridFunctions.ClickOnDirectConnect();
})

And("I add the Direct Connect Profile", () => {
    ssiGridFunctions.AddDirectConnectProfile();
})

And("I edit the Direct Connect profile", () => {
    ssiGridFunctions.EditProfile();
})

Then("I create BE from TRACK FTE and import it", () => {
    ssiGridFunctions.CreateAndImportTrackFTE();
})

Then("I go to Allocable Item Template section", () => {
    allocableItemTemplateFunctions.GoToAllocableItemTemplate();
})

And("I add and edit new Allocable Template", () => {
    allocableItemTemplateFunctions.AddAllocableItemTemplate();
    allocableItemTemplateFunctions.EditAllocableItemTemplate();
})

Then("I verify the default Standard Description mapping in the Allocable Item Template", () => {
    allocableItemTemplateFunctions.VerifyStandardDescription();
})

And("I add and edit new Allocable Template without Standard Description", () => {
    allocableItemTemplateFunctions.AddAllocableItemTemplate2();
    allocableItemTemplateFunctions.EditAllocableItemTemplate2();
})

Then("I upload a file under the Upload Files section", () => {
    uploadFileRedesignFunctions.openUploadFiles()
    uploadFileRedesignFunctions.ClickOnUploadButton()
    allocableItemReviewGridFunctions.UploadFiles()
    allocableItemReviewGridFunctions.GoToFileProcessingSection()
})

And("I Click on Expected Documents Section", () => {
    allocableItemReviewGridFunctions.GoToDocumentCenter()
    allocableItemReviewGridFunctions.GoToExpectedDocuments()
    expectedDocumentsEditsFunctions.ClickOnExpectedDocuments()
})

Then("I add a new Expected Document", () => {
    expectedDocumentsEditsFunctions.AddExpectedDocument2()
})

Then("I add a new Expected Document for without Standard Description", () => {
    expectedDocumentsEditsFunctions.AddExpectedDocument3()
})

Then("I map the Allocable Item Templates", () => {
    allocableItemTemplateFunctions.MapAllocableItemTemplate();
    allocableItemTemplateFunctions.WaitForAPICall();
})

Then("I map the Allocable Item Templates without Standard Description", () => {
    allocableItemTemplateFunctions.MapAllocableItemTemplate2();
})

And("I navigate to the Documents Section", () => {
    allocableItemReviewGridFunctions.GoToDocumentsSections()
})

Then("I Match the Document with Expected Document", () => {
    allocableItemReviewGridFunctions.MatchDocument()
})

Then("I Match the Document with Expected Document for without Standard Description", () => {
    allocableItemReviewGridFunctions.MatchDocument2()
})

And("I review the document", () => {
    allocableItemReviewGridFunctions.ReviewDocument()
})

Then("I verify and edit the Standard Description in the Document Grid", () => {
    allocableItemReviewGridFunctions.VerifyStandardDescriptionInDocument()
})

And("I add the Direct Connect Profile without Standard Description", () => {
    ssiGridFunctions.AddDirectConnectProfile2();
})

Then("I edit the Direct Connect profile without Standard Description", () => {
    ssiGridFunctions.EditProfile2();
})

Then("I verify and edit the TRACk Taxonomy Description in the Document Grid", () => {
    allocableItemReviewGridFunctions.VerifyTrackTaxonomyDescriptionInDocument()
})