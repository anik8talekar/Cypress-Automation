import ProcessingFunctions from "../../../pages/Processing.page";
import DashboardNewJurisdictionsFunctions from "../../../pages/Dashboard-NewJurisdictions.page";

var processingFunctions = new ProcessingFunctions
var dashboardNewJurisdictionsFunctions = new DashboardNewJurisdictionsFunctions

Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})
When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})

Then("I make sure New Jurisdictions widget is visible", ()=>{
    dashboardNewJurisdictionsFunctions.verifyNewJurisdictionsWidget();
 })

And("I turn New Jurisdictions toggle off", ()=>{
 dashboardNewJurisdictionsFunctions.turnToggleOff();
})

Then("I turn New Jurisdictions toggle on", ()=>{
 dashboardNewJurisdictionsFunctions.turnToggleOn();
})

And("I select Tax Year from the dropdown", ()=>{
  dashboardNewJurisdictionsFunctions.selectTaxYear();
 })

And("I click on Show Details button", ()=>{
   dashboardNewJurisdictionsFunctions.clickOnShowDetails();
 })

Then("I apply some filters and click on Reset Selection Button", ()=>{
   dashboardNewJurisdictionsFunctions.applyFilters();
   dashboardNewJurisdictionsFunctions.clickOnResetSelectionButton();
 })