import DREFunctions from "../../../pages/DRE.page";
import ProcessingFunctions from "../../../pages/Processing.page";
import MaskedEINFunctions from "../../../pages/MaskedEIN.page";
import DirectConnectFunctions from "../../../pages/DirectConnect.page";

var processingFunctions = new ProcessingFunctions
var maskedEINFunctions = new MaskedEINFunctions
var directConnectFunctions = new DirectConnectFunctions
var dREFunctions = new DREFunctions

Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})
When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})

Then("I click on document Center and open documents section", ()=>{
    maskedEINFunctions.openDocuments();
})

Then("I click on Admin and open Engagement Settings",()=>{
    directConnectFunctions.openEngagementSettings();
})

And("I enable the DRE Function",()=>{
   dREFunctions.enableDREFunction();
})

And("I search for the DRE Document",()=>{
   dREFunctions.searchDREDocument();
})

Then("I verify that code H2 is present under part II",()=>{
    dREFunctions.verifyH2UnderPartII();
})

Then("I verify that orange circle indicator is present under those coloumns",()=>{
   dREFunctions.verifyCircleIndicator();
})