import EngagementCreationFunctions from "../../../pages/EngagementCreation.page";
import ProcessingFunctions from "../../../pages/Processing.page";

var processingFunctions = new ProcessingFunctions
var engagementCreationFunctions = new EngagementCreationFunctions

Given("I open the Application", ()=>{
   processingFunctions.openTheApp();
  engagementCreationFunctions.generateName();
})

When("I create a Brand New Engagement",()=>{  
  engagementCreationFunctions.createEngagement();
})

Then("I search for newly created engagement",()=>{  
  engagementCreationFunctions.searchNewEngagement();
})

And("I click on Edit icon",()=>{  
 engagementCreationFunctions.clickOnEditEngagement();
})

Then("I verify that user should not be able to change the location",()=>{  
  engagementCreationFunctions.verifyLocationDisability();
})