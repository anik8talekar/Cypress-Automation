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

Then("I click on the Upload button", () => {
    uploadFileRedesignFunctions.ClickOnUploadButton()
})

And("I verify the HTML text for the file type and limitations", () => {
    uploadFileRedesignFunctions.VerifyHTMLTextOfUploadSection()
})

Then("I verify the upload file type with the supported format", () => {
    uploadFileRedesignFunctions.VerifySupportedFileFormat()
})

And("I verify the upload file type with the unsupported format", () => {
    uploadFileRedesignFunctions.VerifyNonSupportedFileFormat()
})

And("I upload the multiple files under the upload section", () => {
    uploadFileRedesignFunctions.UploadMultipleFiles()
})

Then("I verify the uploaded file count under the upload section", () => {
    uploadFileRedesignFunctions.VerifyUploadedFileCount()
})

And("I verify the uploaded file with the error", () => {
    uploadFileRedesignFunctions.UploadeMultipleUnsuppportedFiles()
    uploadFileRedesignFunctions.VerifyUploadedFileError()
})

Then("I verify the buttons of the Upload Page", () => {
    uploadFileRedesignFunctions.VerifyPageComponents()
})

And("I verify the spinner while uploading the file", () => {
    uploadFileRedesignFunctions.VerifyUploadFileSpinner()
})

Then("I verify the spinner of the processing file", () => {
    uploadFileRedesignFunctions.VerifyProcessingFileSpinner()
})
