import ProcessingFunctions from "../../../pages/Processing.page";
import MaskedEINFunctions from "../../../pages/MaskedEIN.page";
import DocumentCenterDocumentsFunctions from "../../../pages/DocumentCenterDocuments.page";
import ReviewDocumentScreenFunctions from "../../../pages/ReviewDocumentScreen.page";

var processingFunctions = new ProcessingFunctions
var maskedEINFunctions = new MaskedEINFunctions
var documentCenterDocumentsFunctions = new DocumentCenterDocumentsFunctions
var reviewDocumentScreenFunctions = new ReviewDocumentScreenFunctions

Given("I open the application", () => {
  processingFunctions.openTheApp();
})
When("I click on existing engagement", () => {
  processingFunctions.openEngagement();
})
Then("I click on document Center and open documents section", () => {
  maskedEINFunctions.openDocuments();
  documentCenterDocumentsFunctions.resetGrid();
})
And("I click on review icon to open the review document screen", () => {
  reviewDocumentScreenFunctions.clickOnReviewIcon();
})
Then("I open schedule item details", () => {
  reviewDocumentScreenFunctions.openScheduleItemDetails();
})
And("I expand the reporting group", () => {
  reviewDocumentScreenFunctions.expandReportingGroup();
})
Then("I type the original values from the input document", () => {
  reviewDocumentScreenFunctions.typeOriginalvalues();
})
Then("I clear the original values from the input document", () => {
  reviewDocumentScreenFunctions.clearOriginalValues();
})

Then("I unhide and verify zero values are visible by turning toggle button yes from no", () => {
  reviewDocumentScreenFunctions.unhideAndVerify();
})
And("I hide and verify zero values are not visible by turning toggle button no from yes", () => {
  reviewDocumentScreenFunctions.hideAndVerify();
})

Then("I click on notes icon to open Add a note slideout", () => {
  reviewDocumentScreenFunctions.openAddNote();
})

And("I enter appropriate Comment and click on add button", () => {
  reviewDocumentScreenFunctions.addComment();
})

Then("I verify the comments are added successfully and click on close button", () => {
  reviewDocumentScreenFunctions.verifyComment();
})

Then("I click on Old Review Page button", () => {
  reviewDocumentScreenFunctions.openOldReviewPage();
})

And("I click on Document Notes icon", () => {
  reviewDocumentScreenFunctions.openDocumentNotes();
})

Then("I enter appropriate Comment and click on save button", () => {
  reviewDocumentScreenFunctions.addDocumentNote();
})

Then("I verify the comments are saved successfully and click on close button", () => {
  reviewDocumentScreenFunctions.verifyDocumentNote();
})

Then("I expand the Reporting Group", () => {
  reviewDocumentScreenFunctions.expandGroup();
})

And("I type the extracted values from the input document", () => {
  reviewDocumentScreenFunctions.typeExtractedValues();
})

Then("I click on more options and select Download PDF in View Option from the dropdown", () => {
  reviewDocumentScreenFunctions.downloadPDFInView();
})

Then("I click on more options and select Download Original PDF from the dropdown", () => {
  reviewDocumentScreenFunctions.downloadOriginalPDF();
})

And("I filter out the approved documents", () => {
  reviewDocumentScreenFunctions.filterApprovedDocuments();
})

Then("I verify that the edit icon is not present for approved documents", () => {
  reviewDocumentScreenFunctions.verifyEditIconDisability();
})

And("I verify and click on unapprove button", () => {
  reviewDocumentScreenFunctions.unapproveDocument();
})

Then("I approve the the document again for prerequisite of this scenario", () => {
  reviewDocumentScreenFunctions.approvePrerequisite();
})
And("I filter out the correct document to review", () => {
  documentCenterDocumentsFunctions.filterPendingDocuments();
  reviewDocumentScreenFunctions.searchDocument();
})

Then("I click on Attachments Icon and add attachment", () => {
  reviewDocumentScreenFunctions.addAttachments();
})