import ProcessingFunctions from "../../../pages/Processing.page";
import AppkitSecAuthFunctions from "../../../pages/Appkit-SecAuth.page"
import AppkitScheduleManagementFunctions from "../../../pages/Appkit-ScheduleManagement.page";
import AppkitManageScheduleDataFunctions from "../../../pages/Appkit-ManageScheduleData.page";

var processingFunctions = new ProcessingFunctions
var appkitSecAuthFunctions = new AppkitSecAuthFunctions
var appkitScheduleManagementFunctions = new AppkitScheduleManagementFunctions
var appkitManageScheduleDataFunctions = new AppkitManageScheduleDataFunctions

Given("I open the application", ()=>{
    processingFunctions.openTheApp();
})

When("I click on Admin", ()=>{
    appkitScheduleManagementFunctions.clickOnAdmin();
})

Then("I click on Schedule Management button",()=>{
    appkitScheduleManagementFunctions.clickonScheduleManagementButton();
})

And("I click on Manage Schedule Data button",()=>{
   appkitScheduleManagementFunctions.clickOnManageScheduleDataButton();
})

Then("I verify new look and feel is implemented", ()=>{
appkitScheduleManagementFunctions.verifymanageScheduleDataUI();
})

And("I apply some filters",()=>{
appkitManageScheduleDataFunctions.applyFilters();
})

Then("I verify filter results",()=>{
appkitManageScheduleDataFunctions.verifyFilters();
})

And("I scroll to bottom of the page",()=>{
appkitSecAuthFunctions.scrollToBottom();
})

Then("I verify site provider is visible at the bottom of the page",()=>{
appkitSecAuthFunctions.verifySiteProvider();
})