import DirectConnectFunctions from "../../../pages/directConnect.pagesP2";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import ExpectedDocumentsFunctions from "../../../pages/ExpectedDocuments.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";

var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var directConnectFunctions = new DirectConnectFunctions
var expectedDocumentsFunctions = new ExpectedDocumentsFunctions
var enagegementSetupFunctions = new EnagegementSetupFunctions
var smartK1Functions = new SmartK1Functions

Given("I Open the Application",()=>{
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement",()=>{
    smartK1Functions.SearchEngagement();
})
And("I click on Admin side menu and click on engagaement settings tab",()=>{
    expDocumentsRolloverFunctions.ClickOnAdminTab();
    expDocumentsRolloverFunctions.ClickOnEngagementSettingsTab();
})
Then("I click on Direct Connect tab",()=>{
    directConnectFunctions.ClickOnDirectConnectTab();
})
And("I click on edit button under actions column and Click on Taxonomy Templates tab",()=>{
    directConnectFunctions.ClickOnEditButton();
    directConnectFunctions.ClickOnTaxonomyTemplatesTab();
})
Then("I click on Add Template button and fill name",()=>{
    directConnectFunctions.ClickOnAddtemplateButton();
    directConnectFunctions.TypeProfileName();
})
And("I click on save button",()=>{
    directConnectFunctions.ClickOnSaveButton();
})
// Then("I Choose from the dropdowns of TRACK TAXONOMY TRACK TAXONOMY if negative reverse sign besides dataflow schedule items",()=>{
//     // directConnectFunctions.ClickOnTrackTaxonomyTab();
//     // directConnectFunctions.ClickOnTrackTaxonomyDropdown();
//     // directConnectFunctions.ChooseExistingTrackTaxonomy();
//     // directConnectFunctions.ClickOnTrackTaxonomyIfNeagtiveTab();
//     // directConnectFunctions.ClickOnTrackTaxonomyIfNeagtiveDD();
// })
Then("I verify the template name under taxonomy template name dropdown",()=>{
    directConnectFunctions.ClickOnTaxonomyTemplateNameDropdown();
    directConnectFunctions.VerifyTemplateName();
})
Then("I Click on Download Import template button",()=>{
    directConnectFunctions.ClickOnDownloadImprtTemplateBtn();
}) 
And("I Click on Import template button and upload a TaxonomyMapping ImportTemplate",()=>{
    directConnectFunctions.ClickOnImportTemplateBtn();
    directConnectFunctions.ClickOnUploadBtn();
}) 
Then("I verify Import template is uploaded from Data schedule item details table",()=>{
    directConnectFunctions.VerifyScheduleItemName();
})
Then("I click on save as button and click on save button",()=>{
    directConnectFunctions.ClickOnSaveAsButton();
    directConnectFunctions.ClickOnSaveButtonCopy();
    directConnectFunctions.VerifyCopyTemplateName();
})
And("I Click on Document Center Section",()=>{
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
})
Then("I Click on Expected Documents tab",()=>{
    expectedDocumentsFunctions.ClickOnExpectedDocumentsDC();
})
And("I Click on add expected document button and turn on direct connect toggle button",()=>{
    directConnectFunctions.ClickOnAddExpectedDocButton();
})
Then("I Fill all the required information",()=>{
    directConnectFunctions.TypeTaxYear();
    directConnectFunctions.ClickOnScheduleDropDown();
    directConnectFunctions.SelectFederalK1();
    directConnectFunctions.ClickOnDCToggleBtn();
    directConnectFunctions.ClickOnTRACKProfileDropDown();
    directConnectFunctions.SelectTRACKProfile();
    directConnectFunctions.ClickOnTaxonomyTemplateDropDown();
    directConnectFunctions.SelectTaxonomyTemplate();
    directConnectFunctions.ClickOnInvestorDropDown();
    directConnectFunctions.SelectInvestor();
    directConnectFunctions.ClickOnInvestmentDropDown();
    directConnectFunctions.SelectInvestment();
    directConnectFunctions.ClickOnIsForeignOrDomDD();
    directConnectFunctions.SelectDomestic();
    directConnectFunctions.ClickOnCategoryDropDown();
    directConnectFunctions.SelectActual();

})
And("I Click on Investment radio button under assign in TRACK to field",()=>{
    directConnectFunctions.ClickOnInvestemntRadioBtn();
})
Then("I Click on Save Button",()=>{
    directConnectFunctions.ClickOnSaveButton();
})
And("I Verify expected document is added under expected documents tab",()=>{
    directConnectFunctions.SearchTaxYear();
    directConnectFunctions.TypeInvestorNameToSearch();
    directConnectFunctions.VerifyInvestorName();
    directConnectFunctions.VerifyInvestmentName();   
})

