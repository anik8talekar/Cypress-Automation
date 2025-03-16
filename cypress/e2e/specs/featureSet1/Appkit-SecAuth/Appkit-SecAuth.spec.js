import ProcessingFunctions from "../../../pages/Processing.page";
import AppkitSecAuthFunctions from "../../../pages/Appkit-SecAuth.page";
import SecAuthFunctions from "../../../pages/SecAuth.Page";

var processingFunctions = new ProcessingFunctions
var secAuthFunctions = new SecAuthFunctions
var appkitSecAuthFunctions = new AppkitSecAuthFunctions

Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})

When("I click on Admin and open Security Authorization Tab", ()=>{
  secAuthFunctions.openSecAuth();
})

Then("I verify new look and feel is implemented", ()=>{
appkitSecAuthFunctions.verifySecAuthUI();
})

And("I apply some filters",()=>{
appkitSecAuthFunctions.applyFilters();
})

Then("I verify filter results",()=>{
appkitSecAuthFunctions.verifyFilterResults();
})

And("I scroll to bottom of the page",()=>{
   appkitSecAuthFunctions.scrollToBottom();
 })

 Then("I verify site provider is visible at the bottom of the page",()=>{
appkitSecAuthFunctions.verifySiteProvider();
 })