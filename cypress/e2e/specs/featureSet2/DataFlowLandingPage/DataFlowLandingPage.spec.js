
import DataFlowLandingPageFunctions from "../../../pages/DataFlowLandingPage.pages";

var dataFlowLandingPagefunctions = new DataFlowLandingPageFunctions
Given("I Open the Application",()=>{
    dataFlowLandingPagefunctions.openTheApp();
})

And("I Click on View Type as Admin Button",()=>{
    dataFlowLandingPagefunctions.AdminButton();
})

Then("I verify Engagement List with Name,Type and Line Of Business",()=>{
    dataFlowLandingPagefunctions.VerifyClientName();
    dataFlowLandingPagefunctions.VerifyEngagementTitle();
    dataFlowLandingPagefunctions.VerifyEngagementName();
    dataFlowLandingPagefunctions.VerifyEngagementType();
    dataFlowLandingPagefunctions.VerifyLineOfBusiness();
})

Then("I Click on Add Engagement Button",()=>{
    dataFlowLandingPagefunctions.AddEngagementButton();
    dataFlowLandingPagefunctions.ClickOnClientName();
    dataFlowLandingPagefunctions.ClickOnAbcd();
    dataFlowLandingPagefunctions.TypeEngagementName();
    dataFlowLandingPagefunctions.SelectEngagementType();
    dataFlowLandingPagefunctions.SelectLocation();
    dataFlowLandingPagefunctions.ClickOnLineOfBusiness();
    dataFlowLandingPagefunctions.ClickOnTesting();
})

And("I Click on Save Button",()=>{
    dataFlowLandingPagefunctions.ClickOnSaveButton();
})
Then("I Click on Edit Button",()=>{
    dataFlowLandingPagefunctions.ClickOnAdminButton();
    dataFlowLandingPagefunctions.ClickOnEditButton();
})
And("I Change Engagement Name",()=>{
    dataFlowLandingPagefunctions.TypeEditedEngagementName();
})
Then("I Click on Save Button",()=>{
    dataFlowLandingPagefunctions.ClickOnSaveButton();
})
And("I Type Client Name or Engagement Name in Search Box",()=>{
    dataFlowLandingPagefunctions.TypeInSearchBox();
})
Then("I verify Client Name in the list",()=>{
    dataFlowLandingPagefunctions.VerifyClientName();
})

Then("I verify Engagement Name in the list",()=>{
    dataFlowLandingPagefunctions.VerifyEngagementNameAfterEdit();
})


