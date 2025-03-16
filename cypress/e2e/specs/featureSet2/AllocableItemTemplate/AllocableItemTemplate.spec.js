import AllocableItemTemplateFunctions from "../../../pages/AllocableItemTemplate.page";
import SSIGridFunctions from "../../../pages/SSIGrid.pages";

var allocableItemTemplateFunctions = new AllocableItemTemplateFunctions()
var ssiGridFunctions = new SSIGridFunctions();

Given("I Open the Application", () => {
    allocableItemTemplateFunctions.openTheApp()
})

When("I click on existing engagement", () => {
    allocableItemTemplateFunctions.openEngagement()
})

And("I click on the Admin section", () => {
    ssiGridFunctions.ClickOnAdmin();
})

Then("I click on the Direct Connect", () => {
    ssiGridFunctions.ClickOnDirectConnect();
})

And("I add the Direct Connect Profile", () => {
    ssiGridFunctions.AddDirectConnectProfile();
})

And("I edit the Direct Connect profile", () => {
    ssiGridFunctions.EditProfile();
})

Then("I create BE from TRACK FTE and import it", () => {
    ssiGridFunctions.CreateAndImportTrackFTE();
})

Then("I go to Allocable Item Template section", () => {
    allocableItemTemplateFunctions.GoToAllocableItemTemplate();
})

And("I add a new Allocable Template", () => {
    allocableItemTemplateFunctions.AddAllocableItemTemplate();
})	

Then("I map the Allocable Item Templates", () => {
    allocableItemTemplateFunctions.MapAllocableItemTemplate();
})

And("I add the Direct Connect Profile without Standard Description", () => {
    ssiGridFunctions.AddDirectConnectProfile2();
})

Then("I edit the newly added Direct Connect profile", () => {
    ssiGridFunctions.EditProfile2();
})

Then("I map the Allocable Item Templates without Standard Description", () => {
    allocableItemTemplateFunctions.MapAllocableItemTemplate2();
})