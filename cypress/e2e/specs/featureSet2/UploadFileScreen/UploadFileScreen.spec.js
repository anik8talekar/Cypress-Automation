import UploadFileScreenFunctions from "../../../pages/UploadFileScreen.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";

var smartK1Functions = new SmartK1Functions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions

var uploadFileScreenFunctions = new UploadFileScreenFunctions

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
And("I Click on Upload Files Section",()=>{
    uploadFileScreenFunctions.ClickOnUploadFilesTab();
})
Then("I Click on Search icon under File Name Column and choose contains option",()=>{
    uploadFileScreenFunctions.ClickOnSearchIconFileName();
    uploadFileScreenFunctions.TypeFileName();
})
And("I Verify the searched file name",()=>{
    uploadFileScreenFunctions.VerifyFileName();
})
Then("I Click on Search icon under Pages Column and choose equals option",()=>{
    uploadFileScreenFunctions.TypeUserName();
})
And("I Verify the page nos are equals in the grid",()=>{
    uploadFileScreenFunctions.ClickOnColumnChooserLogo();
    uploadFileScreenFunctions.ClickOnPagesCheckBox();
    uploadFileScreenFunctions.VerifyPageNo();
    uploadFileScreenFunctions.VerifyUser();
})
Then("I Click on Column Chooser logo",()=>{
    uploadFileScreenFunctions.ClickOnColumnChooserLogo();
})
And("I Check a Checkbox which is unchecked for column name field",()=>{
    uploadFileScreenFunctions.ClickOnUploadIdCheckbox();
})
Then("I Verify column name is added in the grid",()=>{
    uploadFileScreenFunctions.VerifyUploadId();
})
And("I Uncheck a Checkbox which is checked for column name field",()=>{
    uploadFileScreenFunctions.ClickOnUploadIdCheckboxUncheck();
})
Then("I Verify column name is removed in the grid",()=>{
    uploadFileScreenFunctions.ClickOnColumnChooserLogo();
    uploadFileScreenFunctions.VerifyRemovedColumn();
})
Then("I Click on Export to Excel Button",()=>{
    uploadFileScreenFunctions.ClickOnExportToExcelButton();
})



