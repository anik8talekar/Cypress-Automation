import ProcessingFunctions from "../../../pages/Processing.page";
import DirectConnectFunctions from "../../../pages/DirectConnect.page";
import CustomFileNameFunctions from "../../../pages/CustomFileNames.page";

var processingFunctions = new ProcessingFunctions
var directConnectFunctions = new DirectConnectFunctions
var customFileNameFunctions = new CustomFileNameFunctions

Given("I open the application", ()=>{
    processingFunctions.openTheApp();
 })

When("I click on existing engagement", ()=>{
    processingFunctions.openEngagement();
  })

Then("I click on Admin and open Engagement Settings",()=>{
    directConnectFunctions.openEngagementSettings();
  })

And("I click on Custom PDF Name tab",()=>{
    customFileNameFunctions.clickOnCustomPDFName();
  })

Then("I turn on the Export Custom PDF Naming toggle button",()=>{
   customFileNameFunctions.turnOnExportCustomPDFNaming();
  })

  And("I click on Save Selected Fields button",()=>{
   customFileNameFunctions.clickOnSaveSelectedFields();
  })

  And("I make a POST request", () => {
      customFileNameFunctions.makePOSTRequest();
  });
          