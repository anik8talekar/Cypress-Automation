import ProcessingFunctions from "../../../pages/Processing.page";
import MaskedEINFunctions from "../../../pages/MaskedEIN.page";
import CSVExtractFunctions from "../../../pages/CSVExtract.page";

var processingFunctions = new ProcessingFunctions
var maskedEINFunctions = new MaskedEINFunctions
var cSVExtractFunctions = new CSVExtractFunctions

Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})
When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})
And("I click on document Center and open documents section", ()=>{
   maskedEINFunctions.openDocuments();
  })

Then("I select the documents for comparison", ()=>{
   cSVExtractFunctions.selectK1andK3();
})
And("I click on CSV Data Extract option from Actions dropdown and verify the Sucesss Message",()=>{
   cSVExtractFunctions.extractCSVData();
   cSVExtractFunctions.verifySuccessMessage();
})

Then("I click on Download Extracts section and Download the CSV file",()=>{
   cSVExtractFunctions.openDownloadExtracts();
   cSVExtractFunctions.downloadExtract();
})

Then("I click on Download Extracts section to verify the proper Status Icon",()=>{
   cSVExtractFunctions.openDownloadExtracts();  
   cSVExtractFunctions.verifyStatusIcon();
})