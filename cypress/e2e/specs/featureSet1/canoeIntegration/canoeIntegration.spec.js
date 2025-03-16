import ProcessingFunctions from "../../../pages/Processing.page";
import CanoeIntegrationFunctions from "../../../pages/CanoeIntegration.page";

var processingFunctions = new ProcessingFunctions
var canoeIntegrationFunctions = new CanoeIntegrationFunctions

Given("I open the application", () => {
  processingFunctions.openTheApp();
})
When("I click on existing engagement", () => {
  processingFunctions.openEngagement();
})

Then("I click on Admin and open Engagement Settings", () => {
  canoeIntegrationFunctions.openEngagementSettings();
})

And("I open Document Import and Export section", () => {
  canoeIntegrationFunctions.openDocumentImportAndExport();
})

Then("I verify that only manager and above can change engagement settings", () => {
  canoeIntegrationFunctions.verifyToggleRights();
  canoeIntegrationFunctions.turnOnToggleIfOff();
})

Then("I click on Canoe Settings", () => {
  canoeIntegrationFunctions.openCanoeSettings();
})

And("I click on Add Client Credential Button", () => {
  canoeIntegrationFunctions.clickOnAddClientCredential();
})

And("I click on Add Client Credential button", () => {
  // cy.get('.mezz-notification__action').click();
  canoeIntegrationFunctions.clickOnAddClientCredential();
})

Then("I type Client ID and Client Secret and click on Save button", () => {
  canoeIntegrationFunctions.addClientCredential();
})

And("I select the Client ID and Secret", () => {
  canoeIntegrationFunctions.selectClientIDAndSecret();
})

Then("I delete that Client ID and Secret", () => {
  canoeIntegrationFunctions.deleteClientIDAndSecret();
})

And("I make sure that Client secret is not visible", () => {
  canoeIntegrationFunctions.verifyClientSecretInvisibility();
})

And("I turn the Configuration switch on", () => {
  canoeIntegrationFunctions.turnOnConfigurationSwitch();
})

Then("I verify that Documents are processing", () => {
  canoeIntegrationFunctions.verifyDocumentProcessing();
})

And("I go to Available Documents to send a Document to process", () => {
  canoeIntegrationFunctions.sendDocumentToProcess();
  canoeIntegrationFunctions.verifyCanoeDocStatus();
})
