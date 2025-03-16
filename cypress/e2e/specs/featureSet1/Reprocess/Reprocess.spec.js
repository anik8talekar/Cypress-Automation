import UploadFileScreenFS1Functions from "../../../pages/Reprocess.pages";
import ProcessingFunctions from "../../../pages/Processing.page";

var uploadFileScreenFS1Functions = new UploadFileScreenFS1Functions
var processingFunctions = new ProcessingFunctions

Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})
When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})
And("I open upload files section", ()=>{
    processingFunctions.openUploadFiles();
    processingFunctions.verifyProcessingDocs();
})
Then("I click on upload files button and upload single file", ()=>{
   processingFunctions.clickUploadFilesButton();
   processingFunctions.upload100MBFile();
})
And("I open upload files section for Reprocessing", ()=>{
   processingFunctions.openUploadFiles();
})
Then("I Select a 2023 File that has been processed Successfully", ()=>{
   uploadFileScreenFS1Functions.ClickOnStatusDropdown();
   uploadFileScreenFS1Functions.SelectSuccessOption();
   cy.wait(3000);
})
And("I Click On Reprocess Button besides that file name", ()=>{
  uploadFileScreenFS1Functions.clickOnReprocessButton();
})
And("I Click on Yes popup", ()=>{
  uploadFileScreenFS1Functions.ClickOnYesPopup();
})
Then("I Check Reprocessing is Started for that file", ()=>{
   uploadFileScreenFS1Functions.VerifyReprocessingStarted();
})
Then("I Select a 2023 File that has an Error while processing", ()=>{
   uploadFileScreenFS1Functions.ClickOnStatusDropdown();
   uploadFileScreenFS1Functions.SelectErrorOption();
   cy.wait(3000);
})
Then("I Select a 2023 File that has been processed Successfully & Approved", ()=>{
   uploadFileScreenFS1Functions.ClickOnStatusDropdown();
   uploadFileScreenFS1Functions.SelectSuccessOption();
   cy.wait(3000);
   uploadFileScreenFS1Functions.SearchFileName();
   cy.wait(3000);
})
And("I Open the Review Page of that by Clicking the Doc Name after Expanding File Name", ()=>{
   uploadFileScreenFS1Functions.ClickOnExpandIcon();
   uploadFileScreenFS1Functions.ClickOnDocName();
})
Then("I Approve the Document by Clicking on Approve Button", ()=>{
   uploadFileScreenFS1Functions.ClickOnApproveButton();
   uploadFileScreenFS1Functions.ClickOnApprovePopup();
})
And("I Go to Upload Files Section & Check the Reprocess Button is disabled", ()=>{
   processingFunctions.openUploadFiles();
   uploadFileScreenFS1Functions.SearchFileName();
   uploadFileScreenFS1Functions.VerifyDisabledReprocessButton();
   uploadFileScreenFS1Functions.ClickOnExpandIcon();
   uploadFileScreenFS1Functions.ClickOnDocName();
   uploadFileScreenFS1Functions.ClickOnUnApproveButton();
   uploadFileScreenFS1Functions.ClickOnUnApprovePopup();
})
And("I Click on the Expand Icon besides the File Name", ()=>{
   uploadFileScreenFS1Functions.SearchFileNameSchedule();
   cy.wait(3000);
   uploadFileScreenFS1Functions.ClickOnExpandIcon();
})
Then("I Check for Tax Year Column is not editable", ()=>{
   uploadFileScreenFS1Functions.VerifyTaxYearDropDown();
})
And("I Check for Schedule Column is not editable", ()=>{
   uploadFileScreenFS1Functions.VerifyScheduleDropDown();
})
Then("I Check the status for an Successfully Uploaded Document", ()=>{
   uploadFileScreenFS1Functions.ClickOnStatusDropdown();
   uploadFileScreenFS1Functions.SelectSuccessOption();
   cy.wait(3000);
   uploadFileScreenFS1Functions.VerifySuccessStatus();
   uploadFileScreenFS1Functions.VerifySuccessIcon();
})
And("I Check the status for an Error in Uploaded Document", ()=>{
   uploadFileScreenFS1Functions.ClickOnStatusDropdown();
   uploadFileScreenFS1Functions.SelectErrorOption();
   cy.wait(3000);
   uploadFileScreenFS1Functions.VerifyErrorStatus();
   uploadFileScreenFS1Functions.VerifyErrorIcon();
})
Then("I Check the status for an Deleted Uploaded Document", ()=>{
   uploadFileScreenFS1Functions.ClickOnStatusDropdown();
   uploadFileScreenFS1Functions.SelectDeletedOption();
   cy.wait(3000);
   uploadFileScreenFS1Functions.VerifyDeletedStatus();
   uploadFileScreenFS1Functions.VerifyDeletedIcon();
})
And("I Check the status for an Password Locked Document", ()=>{
   uploadFileScreenFS1Functions.ClickOnStatusDropdown();
   uploadFileScreenFS1Functions.SelectPasswordLockedOption();
   cy.wait(3000);
   uploadFileScreenFS1Functions.VerifyPasswordLockedStatus();
   uploadFileScreenFS1Functions.VerifyErrorIcon();
})
Then("I Check the status for an Processing Document", ()=>{
   uploadFileScreenFS1Functions.ClickOnStatusDropdown();
   uploadFileScreenFS1Functions.SelectProcessingOption();
   cy.wait(3000);
})
Then("I Verify the Default Columns in the grid at File Level", ()=>{
   uploadFileScreenFS1Functions.VerifyDefaultColumnsHeading();
})
And("I try to hide the Default Columns through Columns dropdown for File Level", ()=>{
   uploadFileScreenFS1Functions.ClickOnColumnDropdown();
   uploadFileScreenFS1Functions.UnselectDefaultColumns();
})
And("I Click on the Expand Icon besides the File Name for Document Level", ()=>{
   uploadFileScreenFS1Functions.ClickOnStatusDropdown();
   uploadFileScreenFS1Functions.SelectSuccessOption();
   cy.wait(3000);
   uploadFileScreenFS1Functions.ClickOnExpandIcon();
})
Then("I Verify the Default Columns in the grid at Document Level", ()=>{
   uploadFileScreenFS1Functions.VerifyDefaultColumnsHeadingDoc();
})
And("I try to hide the Default Columns through Columns dropdown for Document Level", ()=>{
   uploadFileScreenFS1Functions.ClickOnColumnDropdown();
   uploadFileScreenFS1Functions.UnselectDefaultColumns();
})

Then("I go to Document Level Grid", ()=>{
uploadFileScreenFS1Functions.goToDocLevelGrid();
})

And("I choose column from column chooser", ()=>{
uploadFileScreenFS1Functions.chooseColumn();
})

Then("I verify that column is present in Document Level Grid", ()=>{
   uploadFileScreenFS1Functions.verifyDocIDColumn();
})




