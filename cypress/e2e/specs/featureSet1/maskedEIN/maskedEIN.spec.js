import ProcessingFunctions from "../../../pages/Processing.page";
import MaskedEINFunctions from "../../../pages/MaskedEIN.page";

var processingFunctions = new ProcessingFunctions
var maskedEINFunctions = new MaskedEINFunctions

Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})
When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})
Then("I click on document Center and open documents section", ()=>{
   maskedEINFunctions.openDocuments();
 })
 
 And("I unmask the EINs and verify the EINs from documents", ()=>{
   maskedEINFunctions.unmaskAndVerifyForDocuments();
 })
 Then("I mask the EINs and verify the EINs from documents", ()=>{
   maskedEINFunctions.maskAndVerifyForDocuments();
 })

 Then("I click on document Center and open executive review section", ()=>{
   maskedEINFunctions.openExecutiveReview();
 })

Then("I click on import & export data and open business entities section", ()=>{
   maskedEINFunctions.openImportExportBusinessEntities();
})

And("I unmask the EINs and verify the EINs from business entities", ()=>{
   maskedEINFunctions.umaskAndVerifyForbusinessentities();
})
Then("I mask the EINs and verify the EINs from business entities", ()=>{
  maskedEINFunctions.maskAndVerifyForbusinessentities();
})

Then("I click on business entities section", ()=>{
   maskedEINFunctions.openBusinessEntities();
})

And("I unmask the EINs and verify the EINs from Business Entities", ()=>{
  maskedEINFunctions.umaskAndVerifyForBusinessEntities
})
Then("I mask the EINs and verify the EINs from Business Entities", ()=>{
 maskedEINFunctions.umaskAndVerifyForBusinessEntities
})

Then("I unmask the EINs and verify the EINs from executive review", ()=>{
  maskedEINFunctions.unmaskAndVerifyForExecutiveReview();
})
Then("I mask the EINs and verify the EINs from executive review", ()=>{
 maskedEINFunctions.maskAndVerifyForExecutiveReview();
})