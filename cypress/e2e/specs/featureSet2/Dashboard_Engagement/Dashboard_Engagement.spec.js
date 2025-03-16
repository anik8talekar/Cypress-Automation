import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import DashboardEngagFunctions from "../../../pages/Dashboard_Engagement.pages";

var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var smartK1Functions = new SmartK1Functions
var dashboardEngagFunctions = new DashboardEngagFunctions

Given("I Open the Application", () => {
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement", () => {
    smartK1Functions.SearchEngagement();
})
And("I click on dropdown icon besides the Engagement Name from Dashboard", () => {
    dashboardEngagFunctions.ClickOnEngagementDropdown();
})
And("I Select the same Engagement which we are on", () => {
    dashboardEngagFunctions.SelectCurrentEngagement();
})
Then("I Verify we stays on the same Engagement", () => {
    dashboardEngagFunctions.VerifyCurrentEngagement();
})
And("I Choose different Engagement from dropdown", () => {
    dashboardEngagFunctions.ClickOnEngagementDropdown();
    dashboardEngagFunctions.SearchDifferentEngagement();
    dashboardEngagFunctions.SelectDifferentEngagement();
})
Then("I Verify we navigate to that particular Engagement", () => {
    dashboardEngagFunctions.VerifyDifferentEngagement();
})
