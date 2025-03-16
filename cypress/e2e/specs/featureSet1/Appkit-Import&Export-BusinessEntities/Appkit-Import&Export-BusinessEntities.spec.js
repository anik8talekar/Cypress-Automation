import ProcessingFunctions from "../../../pages/Processing.page";
import AppkitSecAuthFunctions from "../../../pages/Appkit-SecAuth.page"
import AppkitImportAndExportBusinessEntitiesFunctions from "../../../pages/Appkit-Import&Export-BusinessEntities.page";

var processingFunctions = new ProcessingFunctions
var appkitSecAuthFunctions = new AppkitSecAuthFunctions
var appkitImportAndExportBusinessEntitiesFunctions = new AppkitImportAndExportBusinessEntitiesFunctions


Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})

When("I click on Admin and open Business Entities Tab", ()=>{
  processingFunctions.openEngagement();
  appkitImportAndExportBusinessEntitiesFunctions.openImportExportBusinessEntities();
})

Then("I verify new look and feel is implemented", ()=>{
appkitImportAndExportBusinessEntitiesFunctions.verifyBusinessEntityUI();
})

And("I apply some filters",()=>{
appkitImportAndExportBusinessEntitiesFunctions.applyFilters();
})

Then("I verify filter results",()=>{
appkitImportAndExportBusinessEntitiesFunctions.verifyFilters();
})

And("I scroll to bottom of the page",()=>{
  appkitSecAuthFunctions.scrollToBottom();
})

Then("I verify site provider is visible at the bottom of the page",()=>{
appkitSecAuthFunctions.verifySiteProvider();
})