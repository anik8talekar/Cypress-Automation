import ProcessingFunctions from "../../../pages/Processing.page";
import ScheduleManagementFunctions from "../../../pages/ScheduleManagement.page";

var processingFunctions = new ProcessingFunctions
var scheduleManagementFunctions = new ScheduleManagementFunctions

Given("I open the application", ()=>{
    processingFunctions.openTheApp();
 })

When("I click on existing engagement", ()=>{
    processingFunctions.openEngagement();
  })

Then("I click on Admin and open Schedule Management Screen",()=>{
   scheduleManagementFunctions.openScheduleManagement();
  })

And("I click on Schedule Data Export Icon to download Schedule Data",()=>{
    scheduleManagementFunctions.clickScheduleDataExport();
  })

And("I open Migrate Schedule Data section",()=>{
    scheduleManagementFunctions.openMigrateScheduleData();
  })

Then("I verify Migrate Schedule Data is working fine",()=>{
   scheduleManagementFunctions.migrateScheduleData();
  })

Then("I click on Check Import Status tab",()=>{
 scheduleManagementFunctions.openCheckImportStatus();
  })

Then("I verify the file names are present in the file namre column",()=>{
  scheduleManagementFunctions.verifyFileNames();
  })

