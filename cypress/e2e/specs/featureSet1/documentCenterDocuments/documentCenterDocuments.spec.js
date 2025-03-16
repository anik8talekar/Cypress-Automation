import ProcessingFunctions from "../../../pages/Processing.page";
import MaskedEINFunctions from "../../../pages/MaskedEIN.page";
import DocumentCenterDocumentsFunctions from "../../../pages/DocumentCenterDocuments.page";

var processingFunctions = new ProcessingFunctions
var maskedEINFunctions = new MaskedEINFunctions
var documentCenterDocumentsFunctions = new DocumentCenterDocumentsFunctions

Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})
When("I click on existing engagement", ()=>{
   processingFunctions.openEngagement();
})
Then("I click on document Center and open executive review section", ()=>{
   maskedEINFunctions.openExecutiveReview();
 })

 And("I select the documents for comparison", ()=>{
    documentCenterDocumentsFunctions.selectDocuments();
 })

 Then("I compare the selected documents side by side", ()=>{
   documentCenterDocumentsFunctions.compareDocuments();
 })

 And("I unhide and verify zero values are visible by turning toggle button yes from no", ()=>{
   documentCenterDocumentsFunctions.unhideHideZeroValues();
   documentCenterDocumentsFunctions.verifyVisibility();
 })

 Then("I hide and verify zero values are not visible by turning toggle button no from yes", ()=>{
  documentCenterDocumentsFunctions.unhideHideZeroValues();
  documentCenterDocumentsFunctions.verifyInvisibility();
})

And("I verify the counter elements under summary",()=>{
  documentCenterDocumentsFunctions.verifyCounterElements();
})

Then("I click on document Center and open documents section", ()=>{
  maskedEINFunctions.openDocuments();
})

And("I drag and drop the columns to change the default sequence",()=>{
 documentCenterDocumentsFunctions.shuffleColumns();
})

Then("I reset the grid and verify the sequence",()=>{
  documentCenterDocumentsFunctions.resetGrid();
})

And("I click on display matching duplicates icon",()=>{
 documentCenterDocumentsFunctions.viewDuplicates();
})

Then("I verify the matching duplicates",()=>{
 documentCenterDocumentsFunctions.verifyDuplicates();
})

And("I filter out the pending documents",()=>{
  documentCenterDocumentsFunctions.filterPendingDocuments();
})

Then("I select and delete the pending documents",()=>{
 documentCenterDocumentsFunctions.deletePendingDocuments();
})

And("I click on export all data button and download the file",()=>{
 documentCenterDocumentsFunctions.exportAllData();
})

Then("I file them to tax docs",()=>{
  documentCenterDocumentsFunctions.exportToTaxDocs();
  cy.get('.file-to-tax-doc > :nth-child(1) > .trux-input-select > .trux-input-wrapper > .trux-input-select__input').click();
  cy.xpath("//li[contains(text(),' PwC Demo Client, DataFlow Testing Engagement')]").click();
     
  // cy.window().then(win => {       const popup = win.open('', '', 'width=600,height=600');       
       
  // popup.location.href = 'https://login.microsoftonline.com';     });     
  
  // cy.window().then(win => {      
  
  //   win.close(); 
        
  // });


 // cy.xpath("//li[contains(text(),' PwC Demo Client, DataFlow Testing Engagement')]").click();
  // cy.get('.file-to-tax-doc__entity-dropdown > .trux-input-select > .trux-input-wrapper > .trux-input-select__input').click();
  
})

And("I filter out the approved documents",()=>{
 documentCenterDocumentsFunctions.filterApprovedDocuments();
 })

Then("I try to delete approved document",()=>{
 documentCenterDocumentsFunctions.tryToDeleteApprovedDocument();
})