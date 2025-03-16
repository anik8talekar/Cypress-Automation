import AuditLogsFunctions from "../../../pages/AuditLogs.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import CompareDocumentFunctions from "../../../pages/CompareDocuments.pages";

var enagegementSetupFunctions = new EnagegementSetupFunctions
var auditLogsFunctions = new AuditLogsFunctions
var smartK1Functions = new SmartK1Functions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var compareDocumentFunctions = new CompareDocumentFunctions

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
And("I Click on Document Center Section",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
})
Then("I Click on Documents tab",()=>{
    enagegementSetupFunctions.ClickOnDocuments();
})
And("I Select Multiple documents",()=>{
    auditLogsFunctions.ClickOnFirstCheckbox();   
})
Then("I Click On Actions Button",()=>{
    auditLogsFunctions.ClickOnActionsDropdown();
})
And("I Click on view side by side option",()=>{
    compareDocumentFunctions.ClickOnViewSideBySideOption();
})
Then("I verify Investment name from compare documents screen",()=>{
    compareDocumentFunctions.VerifyDocumentsCount();
})
