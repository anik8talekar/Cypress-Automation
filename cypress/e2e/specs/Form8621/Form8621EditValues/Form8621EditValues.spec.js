import Form8621EditFunctions from "../../../pages/Form8621EditValues.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";

var form8621EditFunctions = new Form8621EditFunctions
var engagementSetupFunctions = new EnagegementSetupFunctions

Given("I Open the Application", () => {
    engagementSetupFunctions.openTheApp();
})

When("I click on existing engagement", () => {
    form8621EditFunctions.openEngagement();
})

And("I click on Document Center tab", () => {
    form8621EditFunctions.OpenDocumentCenter();
})

Then("I open review page for a K-3 document", () => {
    form8621EditFunctions.OpenReviewPage();
})

And("I edit values in K-3 Part VII Grid", () => {
    form8621EditFunctions.EditValuesOfPartVII();
})

Then("I open review page for a K-1 document", () => {
    form8621EditFunctions.OpenK1ReviewPage();
})

And("I click on the K-1 footnotes", () => {
    form8621EditFunctions.ClickOnK1Footnotes();
})

Then("I edit the values in K-1 footnotes grid", () => {
    form8621EditFunctions.EditValuesOfK1FootNotes();
    form8621EditFunctions.EditNumericalValues();
    form8621EditFunctions.EditDateValues();
})

