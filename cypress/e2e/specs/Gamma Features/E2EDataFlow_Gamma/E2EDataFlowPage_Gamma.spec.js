import UploadFileScreenFunctions from "../../../pages/UploadFileScreen.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import UploadFilesFunctionsGamma from "../../../pages/UploadFile_Gamma.page";
import ReviewDocumentScreenFunctionsGamma from "../../../pages/ReviewDocumentScreen_GAMMA.page";

var smartK1Functions = new SmartK1Functions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var uploadFileScreenFunctions = new UploadFileScreenFunctions
var uploadFileFunctionsGamma = new UploadFilesFunctionsGamma
var reviewDocumentScreenFunctions = new ReviewDocumentScreenFunctionsGamma

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
And("I Upload a file {string}", (fileName) =>{
    uploadFileFunctionsGamma.uploadFile(fileName);
})
And("I Click on Upload Files Section",()=>{
    uploadFileScreenFunctions.ClickOnUploadFilesTab();
})
And("I verify the status until gets complete",()=>{
    uploadFileFunctionsGamma.verifyStatus();
})
Then("I verify the values on the status table",()=>{
    uploadFileFunctionsGamma.expand();
    uploadFileFunctionsGamma.verifyValues();
})
And("I click on the File link",()=>{
    uploadFileFunctionsGamma.clickFileLink();
})
And("I validate the extraction of {string}", (option) =>{
    reviewDocumentScreenFunctions.verifyInputOutput()
    reviewDocumentScreenFunctions.selectDropdown(option)
})





Then("I Click on Search icon under File Name Column and choose contains option",()=>{
    uploadFileScreenFunctions.ClickOnSearchIconFileName();
    uploadFileScreenFunctions.ClickOnContainsOption();
    uploadFileScreenFunctions.TypeFileName();
})
And("I Verify the searched file name",()=>{
    uploadFileScreenFunctions.VerifyFileName();
})
Then("I Click on Search icon under Pages Column and choose equals option",()=>{
    uploadFileScreenFunctions.ClickOnSearchIconPages();
    uploadFileScreenFunctions.ClickOnEqualOption();
    uploadFileScreenFunctions.TypeNoOfPages();
    uploadFileScreenFunctions.ClickOnUser();
    uploadFileScreenFunctions.TypeUserName();
})
And("I Verify the page nos are equals in the grid",()=>{
    uploadFileScreenFunctions.VerifyPageNo();
    uploadFileScreenFunctions.VerifyUser();
})
Then("I Click on Column Chooser logo",()=>{
    uploadFileScreenFunctions.ClickOnColumnChooserLogo();
})
And("I Check a Checkbox which is unchecked for column name field",()=>{
    uploadFileScreenFunctions.ClickOnUploadIdCheckbox();
    uploadFileScreenFunctions.ClickOnCloseOption();
})
Then("I Verify column name is added in the grid",()=>{
    uploadFileScreenFunctions.VerifyUploadId();
})
And("I Uncheck a Checkbox which is checked for column name field",()=>{
    uploadFileScreenFunctions.ClickOnDocumentsCheckbox();
})
Then("I Verify column name is removed in the grid",()=>{
    uploadFileScreenFunctions.VerifyRemovedColumn();
})
Then("I Click on Export to Excel Button",()=>{
    cy.wait(5000)
    uploadFileScreenFunctions.ClickOnExportToExcelButton();
})



