import ExpectedDocumentsEditsFunctions from "../../../pages/ExpectedDocumentsEdits.page";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";


var expectedDocumentsEditsFunctions = new ExpectedDocumentsEditsFunctions();
var enagegementSetupFunctions = new EnagegementSetupFunctions();
var smartK1Functions = new SmartK1Functions();
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions();

Given("I Open the Application", () => {
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement", () => {
    smartK1Functions.SearchEngagement();
})
And("I Click on Document Center Section", () => {
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
})

Then("I Click on Expected Documents Section", () => {
    expectedDocumentsEditsFunctions.ClickOnExpectedDocuments()
})

And("I add a new Expected Document", () => {
    expectedDocumentsEditsFunctions.AddExpectedDocument()
})

Then("I select the Unmatched Document", () => {
    expectedDocumentsEditsFunctions.SelectUnMatchedDocument()
})

And("I edit the Unmatched Document", () => {
    expectedDocumentsEditsFunctions.EditUnmatchedDocument()
})

Then("I edit the Matched Document", () => {
    expectedDocumentsEditsFunctions.SelectMatchedDocument()
    expectedDocumentsEditsFunctions.EditMatchedDocument()

})