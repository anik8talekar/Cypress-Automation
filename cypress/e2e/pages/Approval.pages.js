import EngagementSetupLocators from "../locator files/EngagementSetup.locators";
import ApprovalLocators from "../locator files/Approval.locators";
import ReclassLocators from "../locator files/Reclass.locators";
import ReviewLevelLocators from "../locator files/ReviewLevels.locators";
import Smartk1Locators from "../locator files/Smart-k1.locators";

var engagementSetupLocators = new EngagementSetupLocators
var approvalLocators = new ApprovalLocators
var reclassLocators = new ReclassLocators
var reviewLevelLocators = new ReviewLevelLocators
var smartK1Locators = new Smartk1Locators

class ApprovalFunctions {
    openTheApp() {
        cy.visit(Cypress.env('baseURL'))
    }
    openEngagement() {
        cy.xpath(engagementSetupLocators.EXISTING_ENGAGEMENT).click()
    }
    ClickOnDocumentCenterTab() {
        cy.get(engagementSetupLocators.DOCUMENT_CENTER_TAB).eq(1).click()
    }
    ClickOnDocuments() {
        cy.contains(' Documents ').click()
    }
    ClickOnReviewButton1() {
        cy.get(approvalLocators.REVIEW_BUTTON1).eq(1).click({ force: true })
    }
    ClickOnApproveButton() {
        cy.xpath(approvalLocators.APPROVE_BUTTON).click()
    }
    ClickOnApprovePopup() {
        cy.xpath(approvalLocators.APPROVE_POPUP).click()
    }
    ClickOnDocumentCenterTabAppr() {
        cy.get(approvalLocators.DOCUMENT_CENTER_TAB).contains(' Document Center').click()
    }
    ClickOnCheckbox() {
        cy.get(approvalLocators.CHECKBOX).eq(1).click({ force: true })
    }
    ClickOnApprovedDropdown() {
        cy.get(approvalLocators.APPROVED_DROP_DOWN).eq(0).click()
    }
    ClickOnApprovedOption() {
        cy.xpath(approvalLocators.APPROVED_VALUE).eq(1).click({force: true})
    }
    NoEditButton() {
        cy.get(approvalLocators.EDIT_BUTTON).should('not.have.value', 'Edit')
    }
    ClickOnPendingOption() {
        cy.xpath(approvalLocators.PENDING_VALUE).click()
    }
    ClickOnActionsCheckBox() {
        cy.get(approvalLocators.ACTIONS_CHECK_BOX).click()
    }
    ClickOnApprovePopUp() {
        cy.xpath(approvalLocators.APPROVE_POPUP).click()
    }
    ClickOnActionsButton() {
        cy.get(approvalLocators.ACTIONS_BUTTON).contains(' Actions ').click()
    }
    ClickOnApproveOption() {
        cy.contains('Approve').click({ force: true })
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnUnapproveOption() {
        cy.get(approvalLocators.ACTIONS_BUTTON).contains('Unapprove').click()
    }
    NoManageReclassRule() {
        cy.get(approvalLocators.EDIT_BUTTON).should('not.have.value', 'Manage Reclass Rules')
    }
    ClickOnApprovedDoc() {
        cy.get(approvalLocators.SELECT_APPROVED_DOC).invoke('show')
        cy.get(approvalLocators.APPROVED_CHECKBOX).eq(1).click({ force: true })
    }
    SelectTaxYear2021() {
        cy.get(approvalLocators.SELECT_TAX_YEAR).eq(3).click()
        cy.contains('2021').click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    SelectFederalK1() {
        cy.get(approvalLocators.SCHEDULE_DROPDOWN).eq(4).click({force:true})
        cy.get(approvalLocators.SCHEDULE_VIEW_CONTENT).contains('Federal K-1').click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnReviewIcon() {
        cy.get(approvalLocators.REVIEW_BUTTON).eq(1).click({ force: true })
    }
    ClickOnUnapproveButton() {
        cy.xpath(approvalLocators.UNAPPROVE_BUTTON).click()
    }
    ClickOnUnapprovePopup() {
        cy.get(approvalLocators.UNAPPROVE_POPUP).click({ force: true })
        cy.reload()
    }
    VerifyUnapproveDoc() {
        cy.get(approvalLocators.SELECT_APPROVED_DOC).should('contain', ' Pending ')
    }
    VerifyApproveDoc() {
        cy.get(approvalLocators.SELECT_APPROVED_DOC).should('contain', '  Approved  ')
    }
    SearchDocumentName() {
        cy.get(reviewLevelLocators.SEARCH_FILE_NAME).eq(2).type('2023 -STANLEY SITWELL 1 7_1_6.pdf')
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnEditReviewLevels() {
        cy.xpath(approvalLocators.EDIT_REVIEW_LEVELS_POPUP).click()
    }
    SelectHighestReviewLevel() {
        cy.xpath(approvalLocators.SELECT_REVIEW_LEVELS).eq(0).click(); // Open the dropdown

        // Get all the options and click the last one
        cy.xpath(approvalLocators.HIGHEST_PWC_REVIEW_LEVEL).then($items => {
            const lastItem = $items.last();
            cy.wait(4000)
            cy.wrap(lastItem).click();
        });

        cy.xpath(approvalLocators.SELECT_REVIEW_LEVELS).eq(1).click(); // Open the dropdown

        // Get all the options and click the last one
        cy.xpath(approvalLocators.HIGHEST_PWC_REVIEW_LEVEL).then($items => {
            const lastItem = $items.last();
            cy.wait(4000)
            cy.wrap(lastItem).click();
        });
    }
    ClickOnSaveButton() {
        cy.xpath(approvalLocators.SAVE_BUTTON).click()
    }
    ClickOnResetGrid() {
        cy.xpath(approvalLocators.RESET_GRID).click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }

}
export default ApprovalFunctions;
