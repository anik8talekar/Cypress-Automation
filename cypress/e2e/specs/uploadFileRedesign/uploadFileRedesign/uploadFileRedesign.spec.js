import UploadFileRedesignFunctions from "../../../pages/UploadFile-Redesign.page";

var uploadFileRedesignFunctions = new UploadFileRedesignFunctions

Given("I open the application", () => {
    uploadFileRedesignFunctions.openTheApp()
})

When("I click on existing engagement", () => {
    uploadFileRedesignFunctions.openEngagement()
})

And("I Click on Upload Files Section", () => {
    uploadFileRedesignFunctions.openUploadFiles()
})

Then("I verify the counts of all Documents and Processing Documents", () => {
    uploadFileRedesignFunctions.VerifyAllDocumentsCount()
})

And("I verify the counts of the Success Documents", () => {
    uploadFileRedesignFunctions.VerifySuccessDocumentsCount()
})

Then("I verify the counts of the Deleted Documents", () => {
    uploadFileRedesignFunctions.VerifyDeletedDocumentsCount()
})

Then("I Upload a Document in the Upload Section", () => {
    uploadFileRedesignFunctions.UploadDocument()
})

And("I search the uploaded file name in the grid", () => {
    uploadFileRedesignFunctions.SearchFileNameInGrid()
})


Then("I verify the Name and Tax Year of the file in grid", () => {
    uploadFileRedesignFunctions.VerifyTaxYear()
})

Then("I Upload a Document under the Upload Section", () => {
    uploadFileRedesignFunctions.UploadDocument2()
})

And("I verify the Floating Panel of the Upload Page", () => {
    uploadFileRedesignFunctions.VerifyFloatingPanel()
})

Then("I verify the Header of the Floating Panel", () => {
    uploadFileRedesignFunctions.VerifyFloatingPanelHeader()
})

And("I close the Floating Panel Slideout", () => {
    uploadFileRedesignFunctions.CloseFloatingPanel()
})