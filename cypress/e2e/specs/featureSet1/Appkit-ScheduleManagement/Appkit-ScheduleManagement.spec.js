import ProcessingFunctions from "../../../pages/Processing.page";
import AppkitScheduleManagementFunctions from "../../../pages/Appkit-ScheduleManagement.page";

var processingFunctions = new ProcessingFunctions
var appkitScheduleManagementFunctions = new AppkitScheduleManagementFunctions

Given("I open the application", ()=>{
    processingFunctions.openTheApp();
 })

When("I click on Admin", ()=>{
    appkitScheduleManagementFunctions.clickOnAdmin();
  })

Then("I click on Schedule Management button",()=>{
    appkitScheduleManagementFunctions.clickonScheduleManagementButton();
  })

And("I click on Migrate Schedule Data button",()=>{
   appkitScheduleManagementFunctions.clickOnMigrateScheduleDataButton();
  })

Then("I verify column filters",()=>{
appkitScheduleManagementFunctions.verifyJurisdiction();
appkitScheduleManagementFunctions.verifySchedule();
appkitScheduleManagementFunctions.verifyTaxYear();
appkitScheduleManagementFunctions.verifyScheduleItemCount();
appkitScheduleManagementFunctions.verifyScheduleItemDetailCount();
appkitScheduleManagementFunctions.verifyScheduleItemOtherCount();
appkitScheduleManagementFunctions.verifyTotalMappingCount();
appkitScheduleManagementFunctions.verifyMappingProfileCount();
appkitScheduleManagementFunctions.verifyMigrationStatus();
  })

