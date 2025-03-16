import DashboardDocumentsFunctions from "../../../pages/Dashboard-Documents.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";

var smartK1Functions = new SmartK1Functions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var dashboardDocumentsFunctions = new DashboardDocumentsFunctions

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
And("I verify Top Saved Searches and Recently Updated Documents under the Documents card on Dashboard",()=>{
    dashboardDocumentsFunctions.TopSavedSearchTab();
})
And("I Click on Show Details button",()=>{
    dashboardDocumentsFunctions.ClickOnShowDetailsButton();
})
Then("I verify it is navigating to Document Center Documents tab",()=>{
    dashboardDocumentsFunctions.VerifyDocumentsTab();
})

