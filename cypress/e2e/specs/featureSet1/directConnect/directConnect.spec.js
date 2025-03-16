import ProcessingFunctions from "../../../pages/Processing.page";
import DirectConnectFunctions from "../../../pages/DirectConnect.page";

var processingFunctions = new ProcessingFunctions
var directConnectFunctions = new DirectConnectFunctions

Given("I open the application", ()=>{
    processingFunctions.openTheApp();
 })

Given("I open the Application", ()=>{
   processingFunctions.openTheApp();
   directConnectFunctions.generateName();
})

When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})

When("I create a Brand New Engagement",()=>{  
  directConnectFunctions.createEngagement();
})

Then("I click on newly created engagement", ()=>{
   directConnectFunctions.openNewEngagement();
})

And("I import some Business Entities",()=>{
    directConnectFunctions.importBusinessEntities();
})

Then("I click on Admin and open Engagement Settings",()=>{
  directConnectFunctions.openEngagementSettings();
})

And("I click on Direct Connect section",()=>{
    directConnectFunctions.openDirectConnect();
})

Then("I click on Add Profile button to add the Direct Connect Profile",()=>{
  directConnectFunctions.addDirectConnectProfile();
})

And("I verify that Direct Connect Profile is created Successfilly",()=>{
   directConnectFunctions.verifyDirectConnectProfile();
})

Then("I click on Edit Icon of existing profile",()=>{
 directConnectFunctions.clickOnEditIcon();
})

Then("I click on Create BE from TRACK FTE button",()=>{
   directConnectFunctions.clickOnCreateBEFromTRACK();
})

Then("I click on Save Profile button", ()=>{
    directConnectFunctions.clickOnSaveProfileButton();
})

And("I filter out the Unmapped Business Entities",()=>{
    directConnectFunctions.filterUnmappedBE();
})

Then("I manually map those FTEs to BEs",()=>{
    directConnectFunctions.mapManually();
})

And("I verify Mapping Status to be Manually mapped",()=>{
    directConnectFunctions.verifyMappingStatusForManual();
})

Then("I verify Mapping Status to be Auto mapped",()=>{
    directConnectFunctions.verifyMappingStatusForImported();
})


And("I verify the appropriate column names for Business Entities",()=>{
    directConnectFunctions.verifyColumnNamesForBE();
})

Then("I apply some filters",()=>{
    directConnectFunctions.applyAndTestFilters();
})

Then("I click on Save and Close button",()=>{
    directConnectFunctions.clickonSaveAndClose();
})

Then("I click on Resync button to resync the Direct Connect Profile",()=>{
    directConnectFunctions.resyncProfile();
})

Then("I check that Resynced Profile is still working",()=>{
    directConnectFunctions.clickOnEditIcon();
    directConnectFunctions.verifyColumnNamesForBE();
    directConnectFunctions.applyAndTestFilters();
})

And("I go to Allocable Item Templates",()=>{
    directConnectFunctions.openAllocableItemTemplates();
})

Then("I verify Presence of Master K3 Buttons",()=>{
   directConnectFunctions.verifyPresenceofMasterK3();
})

And("I Export Master K3 Template",()=>{
    directConnectFunctions.exportMasterK3Template();
    directConnectFunctions.verifyMasterK3ExportTemplate();
})