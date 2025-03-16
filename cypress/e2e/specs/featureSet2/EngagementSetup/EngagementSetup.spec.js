import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import DocCenterExpectedDocumentsFunctions from "../../../pages/DocCenterExpectedDocuments.pages";
import ExpectedDocumentsFunctions from "../../../pages/ExpectedDocuments.pages";
import ApprovalFunctions from "../../../pages/Approval.pages";
import ReclassFunctions from "../../../pages/Reclass.pages";

var enagegementSetupFunctions = new EnagegementSetupFunctions
var docCenterExpectedDocumentsFunctions = new DocCenterExpectedDocumentsFunctions
var expectedDocumentsFunctions = new ExpectedDocumentsFunctions
var approvalFunctions = new ApprovalFunctions
var reclassFunctions = new ReclassFunctions

Given("I Open the Application", () => {
    enagegementSetupFunctions.openTheApp();
})
When("I click on existing engagement", () => {
    docCenterExpectedDocumentsFunctions.SearchEngagement();
})
And("I Click on Business Entities Section", () => {
    enagegementSetupFunctions.ClickOnBusinessEntitiesSection();
})
Then("I Click on Add Business Entity Button", () => {
    enagegementSetupFunctions.ClickOnAddBusinessEntity();
})
And("I Fill the Required Information", () => {
    enagegementSetupFunctions.TypePrimaryID();
    enagegementSetupFunctions.TypeName1();
    enagegementSetupFunctions.TypeName2();
    enagegementSetupFunctions.TypeTaxIdentifier();
    enagegementSetupFunctions.ClickOnIsForeignOrDomestic();
    enagegementSetupFunctions.ClickOnDomestic();
    enagegementSetupFunctions.ClickOnSaveButtonBE();
})
Then("I verify Business Entity is added from business entity tab", () => {
    enagegementSetupFunctions.VerifyNewlyCreatedBe()
})
Then("I Click on Import and Export Data Section", () => {
    enagegementSetupFunctions.ClickOnImportAndExportDataTab();
})
Then("I Click on Business Entities tab", () => {
    enagegementSetupFunctions.ClickOnBusinessEntitiesTab();
})
And("I Click on Import Data Button", () => {
    enagegementSetupFunctions.ClickOnImportDataButtonBEe();
})
Then("I Click on Upload Button and Upload a 2021 Business Entity Template File", () => {
    enagegementSetupFunctions.ClickOnUploadFilesArea();
    enagegementSetupFunctions.ClickOnImportCloseButton();
    enagegementSetupFunctions.ClickOnImportStatusTab();
    enagegementSetupFunctions.VerifySuccessfulImportStatus();
})
Then("I verify Business Entity is created under Documents tab", () => {
    approvalFunctions.ClickOnResetGrid();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    enagegementSetupFunctions.TypeInvestmentName();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    enagegementSetupFunctions.VerifyBEs()
})
And("I Click on Document Center Section", () => {
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
})
Then("I Click on Documents tab", () => {
    enagegementSetupFunctions.ClickOnDocuments();
    approvalFunctions.ClickOnResetGrid();
    expectedDocumentsFunctions.SelectTaxYear();
})
And("I Click on Match Icon Under Actions Column", () => {
    expectedDocumentsFunctions.SelectTaxYear();
    enagegementSetupFunctions.ClickOnMatchButton();
})
Then("I Click on New Button Besides Existing Button and Fill Required Information", () => {
    enagegementSetupFunctions.ClickOnNewButtonReviewScreen();
    enagegementSetupFunctions.ClickOnInvestmentNameDropDown();
})
Then("I Click on New Button Besides Existing Contact Button and Fill Required Information", () => {
    enagegementSetupFunctions.ClickOnNewButtonReviewScreen();
    enagegementSetupFunctions.ClickOnNewButtonContactMatch();
})
Then("I Click on New Button Besides Existing Contact Button and Fill required information", () => {
    enagegementSetupFunctions.ClickOnNewButton();
    enagegementSetupFunctions.ClickOnNewContact();
})
And("I Click on Match Button", () => {
    enagegementSetupFunctions.ClickOnMatchButtonSlideOut()
})
And("I Click on Review Icon Under Actions Column", () => {
    expectedDocumentsFunctions.SelectTaxYear();
    reclassFunctions.TypeFileName();
    reclassFunctions.SelectFederalK1();
    approvalFunctions.ClickOnReviewIcon();
})
Then("I Click on Match Button from Review Screen", () => {
    enagegementSetupFunctions.ClickOnMatchButtonReviewScreen()
})
And("I Click on New Button Besides all the fields and Fill Required Information", () => {
    enagegementSetupFunctions.ClickOnNewButtonReviewScreen();
    enagegementSetupFunctions.ClickOnNewButton();
    enagegementSetupFunctions.ClickOnNewButtonInvestment();
    enagegementSetupFunctions.TypeInvestmentNamePrimaryID();
    enagegementSetupFunctions.SelectIsForeignOrDomestic();
    enagegementSetupFunctions.SelectDomestic();
    enagegementSetupFunctions.ClickOnNewButtonInvestor();
    enagegementSetupFunctions.SelectIsForeignOrDomesticInvestor();
    enagegementSetupFunctions.SelectDomesticInvestor();
    enagegementSetupFunctions.ClickOnNewButtonContact();
})
And("I Click on New Button Besides Existing Button and Fill required information", () => {
    enagegementSetupFunctions.ClickOnNewButtonReviewScreen();
    enagegementSetupFunctions.ClickOnNewButton();
    enagegementSetupFunctions.ClickOnNewButtonInvestment();
    enagegementSetupFunctions.TypeInvestmentNamePrimaryID();
    enagegementSetupFunctions.SelectIsForeignOrDomestic();
    enagegementSetupFunctions.SelectDomestic();
    enagegementSetupFunctions.ClickOnNewButtonInvestor();
    enagegementSetupFunctions.SelectIsForeignOrDomesticInvestor();
    enagegementSetupFunctions.SelectDomesticInvestor();
    enagegementSetupFunctions.ClickOnNewButtonContact();
})
Then("I Click on Match Button", () => {
    enagegementSetupFunctions.ClickOnMatchButtonSlideOut()
})
And("I Click on Contacts Section", () => {
    enagegementSetupFunctions.ClickOnContactsTab()
})
Then("I Click on Add Contacts Button", () => {
    enagegementSetupFunctions.ClickOnAddContactsButton()
})
And("I Fill All The Details", () => {
    enagegementSetupFunctions.ClickOnNameField()
    enagegementSetupFunctions.ClickOnEmailField()
    enagegementSetupFunctions.ClickPhoneNumberField()
    enagegementSetupFunctions.ClickOnCompanyField()
    enagegementSetupFunctions.ClickOnPortalURLField()
})
Then("I Click on Save Button", () => {
    enagegementSetupFunctions.ClickOnSaveButtonSavedSearch()
})
And("I Verify Newly Created Contact from contacts tab", () => {
    enagegementSetupFunctions.SearchContact()
    enagegementSetupFunctions.SearchContactEmail()
    enagegementSetupFunctions.VerifyCreatedContact()
})
Then("I Click On Contacts Section from side menu and check newly created contact is visible or not", () => {
    enagegementSetupFunctions.ClickOnContactsTab()
    enagegementSetupFunctions.VerifyContactFromContactTab()
})
Then("I Click on Expected Documents Tab", () => {
    enagegementSetupFunctions.ClickOnExpectedDocumentsTab()
})
Then("I Click on Upload Button and Upload a Expected Documents-Import Template File", () => {
    enagegementSetupFunctions.ClickOnUploadButtonBes();
    enagegementSetupFunctions.ClickOnCloseButtonSlideout();
    enagegementSetupFunctions.ClickOnImportStatusTab();
    enagegementSetupFunctions.VerifySuccessfulImportStatus();
})
And("I Click on Export All Data Button from Expected Documents tab", () => {
    enagegementSetupFunctions.ClickOnExportAllDataButton();
})
Then("I Click on Business Entities tab", () => {
    enagegementSetupFunctions.ClickOnBusinessEntitiesTab();
})
And("I Click on Export All Data Button from Business Entities tab", () => {
    enagegementSetupFunctions.ClickOnExportAllDataButtonBe();
})
Then("I Click on Expected Documents Tab", () => {
    enagegementSetupFunctions.ClickOnExpectedDocumentsTab()
})
And("I Click on Download Blank Import Template Button from Expected Documents tab", () => {
    enagegementSetupFunctions.ClickOnDownloadBlankImportBe();
})
Then("I Click on Business Entities tab", () => {
    enagegementSetupFunctions.ClickOnBusinessEntitiesTab();
})
And("I Click on Download Blank Import Template Button from Business Entities tab", () => {
    enagegementSetupFunctions.ClickOnDownloadBlankImportEd();
})
Then("I Click on Documents tab", () => {
    enagegementSetupFunctions.ClickOnDocuments();
})
And("I Select the Filters by clicking on the dropdown below columns name", () => {
    enagegementSetupFunctions.ClickOnApprovedColumnDropDown();
    enagegementSetupFunctions.ClickOnApprovedDropDown();
})
Then("I Click on Save Search Button", () => {
    enagegementSetupFunctions.ClickOnSaveSearchButton();
})
And("I Give a Appropriate name to save search filter", () => {
    enagegementSetupFunctions.TypeSearchName();
})
Then("I Click on Save Button Contacts", () => {
    enagegementSetupFunctions.ClickOnSaveButton();
})
And("I Click on Search by drop down", () => {
    enagegementSetupFunctions.ClickOnSearchByDropdown();
})
Then("I Select The Saved Filter Name from drop down", () => {
    enagegementSetupFunctions.ClickOnSwarajTesting();
})
And("I Fill all the details", () => {
    enagegementSetupFunctions.ClickOnNameField()
    enagegementSetupFunctions.ClickOnEmailFieldDup()
    enagegementSetupFunctions.ClickPhoneNumberField()
    enagegementSetupFunctions.ClickOnCompanyField()
    enagegementSetupFunctions.ClickOnPortalURLField()
})
And("I verify a Error message", () => {
    enagegementSetupFunctions.VerifyErrorMessage();
    enagegementSetupFunctions.VerifyErrorText();
})
