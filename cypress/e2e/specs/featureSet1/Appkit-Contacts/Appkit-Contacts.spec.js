import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import DocCenterExpectedDocumentsFunctions from "../../../pages/DocCenterExpectedDocuments.pages";
import AppkitContactsFunctions from "../../../pages/Appkit-Contacts.page";

var enagegementSetupFunctions = new EnagegementSetupFunctions
var docCenterExpectedDocumentsFunctions = new DocCenterExpectedDocumentsFunctions
var appkitContactsFunctions = new AppkitContactsFunctions

Given("I Open the Application",()=>{
    enagegementSetupFunctions.openTheApp();
})

When("I click on existing engagement",()=>{
    docCenterExpectedDocumentsFunctions.SearchEngagement();
})

And("I Click on Contacts Section",()=>{
    enagegementSetupFunctions.ClickOnContactsTab()
})

Then("I Click on Add Contacts Button and verify the slideout",()=>{
    enagegementSetupFunctions.ClickOnAddContactsButton()
    appkitContactsFunctions.verifySlideout();
})

Then("I navigate and fill values in the slideout",()=>{
    enagegementSetupFunctions.ClickOnNameField()
    enagegementSetupFunctions.ClickOnEmailField()
    enagegementSetupFunctions.ClickPhoneNumberField()
    enagegementSetupFunctions.ClickOnCompanyField()
    enagegementSetupFunctions.ClickOnPortalURLField()
})

Then("I click on save button to save new contact",()=>{
    enagegementSetupFunctions.ClickOnSaveButton();
    enagegementSetupFunctions.WaitForAPICall();
})

And("I edit the existing contact",()=>{
   appkitContactsFunctions.editExistingContact();
})

Then("I click on save button to save edited contact",()=>{
    appkitContactsFunctions.saveEditedContact();
})

And("I click on save button forcefully",()=>{
   appkitContactsFunctions.clickSaveForcefully();
})

Then("I validate the required field error message for Name and Email",()=>{
   appkitContactsFunctions.validateRequiredFields();
})

Then("I search and verify new contact is created",()=>{
   enagegementSetupFunctions.searchAndVerifyNewContact();
})

Then("I click on admin to open audit logs",()=>{
   appkitContactsFunctions.openAuditLogs();
 })

Then("I click on Schedule change logs",()=>{
    appkitContactsFunctions.clickOnScheduleChangeLogs();
 })

 Then("I interact with the grid",()=>{
   appkitContactsFunctions.interactWithTheGrid();
 })