import StandardDescriptionsFunctions from "../../../pages/DirectConnectStandardDescriptions.page";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import DirectConnectFunctions from "../../../pages/directConnect.pagesP2";

var standardDescriptionsFunctions = new StandardDescriptionsFunctions();
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions();
var smartK1Functions = new SmartK1Functions();
var directConnectFunctions = new DirectConnectFunctions();


Given("I Open the Application", () => {
    expDocumentsRolloverFunctions.openTheApp();
})

When("I click on existing engagement", () => {
    smartK1Functions.SearchEngagement();
})

And("I click on Admin side menu and click on engagaement settings tab", () => {
    expDocumentsRolloverFunctions.ClickOnAdminTab();
    expDocumentsRolloverFunctions.ClickOnEngagementSettingsTab();
})

Then("I click on Direct Connect tab", () => {
    directConnectFunctions.ClickOnDirectConnectTab();
})

And("I add a new Direct Connect Profile", () => {
    standardDescriptionsFunctions.AddDirectConnectProfile();
})

Then("I verify the Standard Descriptions Checkbox is enabled or not", () => {
    standardDescriptionsFunctions.VerifyStandardDescriptionsCheckbox();
    standardDescriptionsFunctions.VerifyStandardDescriptionsInfoIcon();
    standardDescriptionsFunctions.VerifyStandardDescriptionsCheckbox2();
})

And("I save the Direct Connect Profile", () => {
    standardDescriptionsFunctions.SaveDirectConnectProfile();
})