import ProcessingFunctions from "../../../pages/Processing.page";
import DashboardDiagnosticsFunctions from "../../../pages/Dashboard-Diagnostics.page";

var dashboardDiagnosticsFunctions = new DashboardDiagnosticsFunctions
var processingFunctions = new ProcessingFunctions

Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})
When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})

Then ("I verify the details for Diagnostics Widget",()=>{
dashboardDiagnosticsFunctions.verifyDetails();
})

Then ("I search and verify the engagement name in the search dropdown",()=>{
   dashboardDiagnosticsFunctions.searchEngagement();
   dashboardDiagnosticsFunctions.verifyResult();
})


