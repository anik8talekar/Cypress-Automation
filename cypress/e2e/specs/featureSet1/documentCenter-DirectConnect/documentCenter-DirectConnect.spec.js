import ProcessingFunctions from "../../../pages/Processing.page";
import DocumentCenterDirectConnectFunctions from "../../../pages/documentCenter-DirectConnect.page";

var processingFunctions = new ProcessingFunctions
var documentCenterDirectConnectFunctions = new DocumentCenterDirectConnectFunctions



Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})
When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})
Then("I click on document Center and open Direct Connect section", ()=>{
   documentCenterDirectConnectFunctions.openDocumentCenter();
   documentCenterDirectConnectFunctions.openDirectConnect();
 })

And("I select the Direct connect profile to view associated documents and send them to TRACK",()=>{
   documentCenterDirectConnectFunctions.selectDataConnectProfile();
})

Then("I click on Send to TRACk button and verify the success message", ()=>{
   documentCenterDirectConnectFunctions.verifySuccessMessage();
  })

