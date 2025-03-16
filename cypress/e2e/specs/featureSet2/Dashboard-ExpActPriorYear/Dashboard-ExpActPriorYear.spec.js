import DashboardYearFunctions from "../../../pages/Dashboard-ExpActPriorYear.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";

var smartK1Functions = new SmartK1Functions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var dashboardYearFunctions = new DashboardYearFunctions

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
And("I Click on Tax Year Dropdown",()=>{
    dashboardYearFunctions.ClickOnTaxYearDropdown();
})
Then("I choose 2021 Tax Year",()=>{
    dashboardYearFunctions.Select2021Year();
})
And("I verify month and year from the chart",()=>{
    dashboardYearFunctions.VerifyChart();
})
And("I Click on Show Details Button",()=>{
    dashboardYearFunctions.ClickOnTaxYearDropdown();
    dashboardYearFunctions.Select2021Year();
    dashboardYearFunctions.ShowDetailsButton();
})
Then("I verify the summary chart",()=>{
    dashboardYearFunctions.VerifyChartDetailsTab();
})
Then("I verify grid for Investment Name Investor Schedule Name and Dates",()=>{
    dashboardYearFunctions.VerifyColumnHeadings();
})
Then("I Select Left Side Filters",()=>{
    dashboardYearFunctions.ClickOnTaxYearSide();
    dashboardYearFunctions.Select2021Year();
    dashboardYearFunctions.SelectInvestorSide();
    dashboardYearFunctions.SelectScheduleSide();
})
And("I Verify them under grid",()=>{
    dashboardYearFunctions.VerifySideFiltersInGrid();
})