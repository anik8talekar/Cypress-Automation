import DashboardTrueUpsRequiredFunctions from "../../../pages/Dashboard-TrueUpsRequired.page";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";

var dashboardTrueUpsRequiredFunctions = new DashboardTrueUpsRequiredFunctions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var smartK1Functions = new SmartK1Functions

Given("I Open the Application", () => {
    expDocumentsRolloverFunctions.openTheApp();
})

When("I click on existing engagement", () => {
    smartK1Functions.SearchEngagement();
})

And("I click on Tax Year Dropdown", () => {
    dashboardTrueUpsRequiredFunctions.ClickOnTaxYearDropdown();
})

Then("I choose 2022 Tax Year", () => {
    dashboardTrueUpsRequiredFunctions.SelectTaxYear();
})

And("I verify chart for the 2022 Tax Year", () => {
    dashboardTrueUpsRequiredFunctions.VerifyChartForTaxYear();
})

And("I click on show details and apply filters", () => {
    dashboardTrueUpsRequiredFunctions.ClickOnShowDetails();
})

Then("I click on Tax Dropdown and select 2022 Tax Year", () => {
    dashboardTrueUpsRequiredFunctions.SelectTaxYearDropdown();
    dashboardTrueUpsRequiredFunctions.SelectTaxYear2();
})

And("I select Process Date and Final Date", () => {
    dashboardTrueUpsRequiredFunctions.SelectProcessDate();
    dashboardTrueUpsRequiredFunctions.SelectFinalDate();
})

Then("I verify the Summary Information", () => {
    dashboardTrueUpsRequiredFunctions.VerifySummary();
})

And("I verify the grid column names", () => {
    dashboardTrueUpsRequiredFunctions.VerifyGridColumnNames();
})

And("I navigate to the Dashboard-True Ups Required field", () => {
    dashboardTrueUpsRequiredFunctions.NavigateToWidget();
})

Then("I verify all fields are present in widget", () => {
    dashboardTrueUpsRequiredFunctions.VerifyChartFields();
})