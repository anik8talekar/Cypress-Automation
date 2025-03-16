import ThumbsUpDownFunctions from "../../../pages/Thumbs_Up_Down.pages";
import ExpDocumentsRolloverFunctions from "../../../pages/ExpDocumentsRollover.pages";
import SmartK1Functions from "../../../pages/Smart-k1.pages";
import Form8621Functions from "../../../pages/Form8621.pages";
import EnagegementSetupFunctions from "../../../pages/EngagementSetup.pages";
import ApprovalFunctions from "../../../pages/Approval.pages";
import FoFAutomationFunctions from "../../../pages/FoFAutomation.pages";

var thumbsUpDownFunctions = new ThumbsUpDownFunctions
var enagegementSetupFunctions = new EnagegementSetupFunctions
var expDocumentsRolloverFunctions = new ExpDocumentsRolloverFunctions
var smartK1Functions = new SmartK1Functions
var form8621Functions = new Form8621Functions
var approvalFunctions = new ApprovalFunctions
var foFAutomationFunctions = new FoFAutomationFunctions

Given("I Open the Application", () => {
    expDocumentsRolloverFunctions.openTheApp();
})
When("I click on existing engagement", () => {
    smartK1Functions.SearchEngagement();
})
And("I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to it's review page", () => {
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    approvalFunctions.SelectFederalK1();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    form8621Functions.SelectTaxYear2022();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    form8621Functions.SearchDocumentNameFedK1();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    approvalFunctions.ClickOnReviewButton1();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
})
Then("I Check for Thumbs Up Down Icons above the PDF", () => {
    thumbsUpDownFunctions.VerifyThumbsUpDownIcon();
})
And("I go to Document Center Documents tab & Open a 2022 K-3 Doc & go to it's review page", () => {
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    form8621Functions.SelectFedK3();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    form8621Functions.SearchDocumentNameFedK3();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    form8621Functions.SelectFEDk3Doc();
})
And("I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Footnotes tab", () => {
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    thumbsUpDownFunctions.ClickOnResetGridButton();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    approvalFunctions.SelectFederalK1();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    form8621Functions.SearchDocumentNameFedK1();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    form8621Functions.SelectTaxYear2022();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    approvalFunctions.ClickOnReviewButton1();
    cy.wait(2000);
    form8621Functions.ClickOnViewByDropdown();
    form8621Functions.ClickOnFootnotesOption();
})
And("I Click on Show Preview 8621 icon", () => {
    thumbsUpDownFunctions.ClickOnEyeIcon8621();
})
And("I Click on Thumbs Up Icon", () => {
    thumbsUpDownFunctions.ClickOnThumbsUpButton();
    cy.wait(4000);
})
Then("I Verify Success Notification & Thumbs Up Icon", () => {
    thumbsUpDownFunctions.VerifySuccessMessage();
    thumbsUpDownFunctions.VerifyThumbsUpButtonFilled();
    cy.wait(4000);
    thumbsUpDownFunctions.VerifyThumbsUpToolTip();
})
And("I Click on Thumbs Down Icon", () => {
    thumbsUpDownFunctions.ClickOnThumbsDownButton();
    cy.wait(4000);
})
And("I Select a Reason & Add Description for Thumbs Down", () => {
    thumbsUpDownFunctions.ClickOnReasonDropdown();
    thumbsUpDownFunctions.SelectReason();
    thumbsUpDownFunctions.ClickOnBlankArea();
    thumbsUpDownFunctions.TypeDescription();
    thumbsUpDownFunctions.ClickOnSaveButton();
})
Then("I Verify Success Notification & Thumbs Down Icon", () => {
    thumbsUpDownFunctions.VerifySuccessMessage();
    thumbsUpDownFunctions.VerifyThumbsUpButtonFilled();
    cy.wait(4000);
    thumbsUpDownFunctions.VerifyThumbsDownToolTip();
})
And("I go to Upload Files tab", () => {
    thumbsUpDownFunctions.ClickOnUploadFilesTab();
})
And("I Expand any File Name from the grid", () => {
    thumbsUpDownFunctions.SearchFileNameUpload();
    cy.wait(3000);
    thumbsUpDownFunctions.ClickOnExpandIcon();
})
Then("I Check for tax Year Column from the Expanded File Name Grid", () => {
    thumbsUpDownFunctions.VerifyTaxYearColumnUpload();
})
Then("I check the File Name's Tax Year and Tax Year matches", () => {
    thumbsUpDownFunctions.VerifyTaxYearMatches();
})
And("I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Schedule Item Details tab", () => {
    enagegementSetupFunctions.ClickOnDocumentCenterTab();
    enagegementSetupFunctions.ClickOnDocuments();
    thumbsUpDownFunctions.ClickOnResetGridButton();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    foFAutomationFunctions.SelectTaxYear2022();
    approvalFunctions.SelectFederalK1();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    form8621Functions.SearchDocumentNameFedK1();
    cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    form8621Functions.SearchDocumentNameFedK1();
    approvalFunctions.ClickOnReviewButton1();
    cy.wait(2000);
    form8621Functions.ClickOnViewByDropdown();
})
And("I Click on Form 1040 icon above the grid", () => {
    thumbsUpDownFunctions.clickOnScheduleItemDEtails();
    thumbsUpDownFunctions.ClickOnForm1040Button();
})




