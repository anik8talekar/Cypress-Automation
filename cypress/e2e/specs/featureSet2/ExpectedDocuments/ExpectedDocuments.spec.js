import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import ExpectedDocumentsFunctions from "../../../pages/ExpectedDocuments.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import Form8621Functions from "../../../pages/Form8621.pages";

var enagegementSetupFunctions = new EnagegementSetupFunctions
var expectedDocumentsFunctions = new ExpectedDocumentsFunctions
var smartK1Functions = new SmartK1Functions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var form8621Functions = new Form8621Functions

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
And("I Click on Document Center Section",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
})
Then("I Click on Documents tab",()=>{
    enagegementSetupFunctions.ClickOnDocuments();
})
And("I Click on Match Icon Under Actions Column",()=>{
    expectedDocumentsFunctions.ClickOnResetGridButton();
    expectedDocumentsFunctions.TypeFileName();
    expectedDocumentsFunctions.SelectTaxYear2021();
    enagegementSetupFunctions.ClickOnMatchButton();
})
Then("I Click on existing expected document name dropdown and select a expected document",()=>{
    expectedDocumentsFunctions.ClickOnExpectedDocumentsDropdown();
    expectedDocumentsFunctions.SelectExpectedDocument();
})
And("I Click on Match Button and verify the document is matched",()=>{
    enagegementSetupFunctions.ClickOnMatchButtonSlideOut()
    expectedDocumentsFunctions.VerifyMatchedDocument()
})
And("I Click on Review Icon Under Actions Column",()=>{
    expectedDocumentsFunctions.ClickOnResetGridButton();
    expectedDocumentsFunctions.TypeFileName();
    expectedDocumentsFunctions.SelectTaxYear2021();
    expectedDocumentsFunctions.ClickOnReviewButton()
})
Then("I Click on Match Button from Review Screen",()=>{
    cy.wait(3000);
    enagegementSetupFunctions.ClickOnMatchButtonReviewScreen()   
})
And("I Click on existing expected document name dropdown and select a Expected Document",()=>{
    expectedDocumentsFunctions.ClickOnExpectedDocumentsDropdown();
})
Then("I Click on Match Button and verify the Document is Matched",()=>{
    expectedDocumentsFunctions.ChooseExpectedDocName();
    expectedDocumentsFunctions.ClickOnMatchButton();
})
And("I Click on existing expected document name dropdown and select a expected document which is ready for intelligent matching",()=>{
    expectedDocumentsFunctions.ClickOnExpectedDocumentsDropdown();
    expectedDocumentsFunctions.ClickOnThumbsUpIcon()
})
Then("I Click on Match Button and verify the document is matched via intelligent matching",()=>{
    enagegementSetupFunctions.ClickOnMatchButtonSlideOut()
    expectedDocumentsFunctions.VerifyMatchedDocument()
    cy.reload();
})
Then("I Click on Expected Documents tab",()=>{
    expectedDocumentsFunctions.ClickOnExpectedDocumentsDC()
})
And("I Select multiple matched expected documents and click on actions menu",()=>{
    expectedDocumentsFunctions.ClickOnBulkCheckbox()
})
Then("I Click on Unmatch option from actions drop down menu and click on Unmatch popup",()=>{
    expectedDocumentsFunctions.ClickOnActionsButton()
    expectedDocumentsFunctions.ClickOnUnmatchOption()
    expectedDocumentsFunctions.ClickOnUnmatchPopup()
})
And ("I Select a expected documents and click on actions menu",()=>{
    expectedDocumentsFunctions.SelectExpectedDocument()
}) 
Then("I Click on Set Dates option from actions drop down menu",()=>{
    expectedDocumentsFunctions.ClickOnActionsButton()
    expectedDocumentsFunctions.ClickOnSetDatesOption()
})
And("I Set Projected receive date and cutoff dates and click on save button",()=>{
    expectedDocumentsFunctions.ClickOnProjectedReceiveDate()
    expectedDocumentsFunctions.ClickOnCutOffDates()
    expectedDocumentsFunctions.ClickOnSaveButton()
})