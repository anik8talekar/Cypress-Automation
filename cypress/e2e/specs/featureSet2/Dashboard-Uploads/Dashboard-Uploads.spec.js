import DashboardUploadFunctions from "../../../pages/Dashboard-Uploads.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";

var dashboardUploadFunctions = new DashboardUploadFunctions
var smartK1Functions = new SmartK1Functions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
And("I Click on Upload button and upload a Schedule K1 Pdf File from Upload card on the dashboard",()=>{
    dashboardUploadFunctions.ClickOnUploadButton();
})
Then("I Check the uploaded file under Recently Uploaded Files tab on the card",()=>{
    dashboardUploadFunctions.VerifyFileName();
})
And("I Click on Upload button and upload a Large Exe File from Upload card on the dashboard",()=>{
    dashboardUploadFunctions.UploadEXEFile();
})
Then("I verify the error message",()=>{
    dashboardUploadFunctions.VerifyErrorMessage();
})
And("I Click on Show Details button",()=>{
    dashboardUploadFunctions.ClickOnShowDetailsButton();
})
Then("I verify it is navigating to Upload Files tab",()=>{
    dashboardUploadFunctions.VerifyUploadFilesTab();
})