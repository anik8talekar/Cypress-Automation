
import ProcessingFunctions from "../../../pages/Processing.page";

var processingFunctions = new ProcessingFunctions
Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})
When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})
And("I open upload files section", ()=>{
    processingFunctions.openUploadFiles();
})

Then("I click on upload files button and upload single file", ()=>{
   processingFunctions.clickUploadFilesButton();
   processingFunctions.uploadSingleFile();
})

Then("I click on upload files button and upload multiple files", ()=>{
   processingFunctions.clickUploadFilesButton();
   processingFunctions.uploadMultipleFiles();
})

Then("I click on upload files button and upload zip file", ()=>{
    processingFunctions.clickUploadFilesButton();
    processingFunctions.uploadZipFile();
})

Then("I click on upload files button and upload K-3 file", ()=>{
    processingFunctions.clickUploadFilesButton();
    processingFunctions.uploadK3File();
})

Then("I click on upload files button and upload PFIC Statement", ()=>{
    processingFunctions.clickUploadFilesButton();
    processingFunctions.uploadPFICStatement();
})

And("I go to executive review under document center",()=>{
  processingFunctions.openExecutiveReview();
})

Then("I verify the processing of files gets completed successfully",()=>{
   processingFunctions.verifyProcessCompletion();
   //processingFunctions.verifyProcessedFiles();
})

Then("I click on upload files button and upload file with invalid Format",()=>{
  processingFunctions.uploadUnsupportedFile();
})

And("I verify the proper error message",()=>{
   processingFunctions.verifyErrorMessage();
 })

And("I select columns from thr column chooser",()=>{
  processingFunctions.selectColumn();
})

Then("I verify that the columns are visible in the grid",()=>{
   processingFunctions.VerifyColumn();
 })
