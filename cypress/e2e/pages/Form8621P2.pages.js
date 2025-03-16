import Form8621P2Locators from "../locator files/Form8621P2.locators";
import Form8621Locators from "../locator files/Form8621.locators";
import ReviewLevelLocators from "../locator files/ReviewLevels.locators";
import ApprovalLocators from "../locator files/Approval.locators";

var form8621P2Locators = new Form8621P2Locators
var form8621Locators = new Form8621Locators
var reviewLevelLocators = new ReviewLevelLocators
var approvalLocators = new ApprovalLocators

class Form8621P2Functions {
    SelectInstance3() {
        cy.xpath(form8621P2Locators.INSTANCES_8621_3).click({ force: true })
    }
    SelectInstance4() {
        cy.xpath(form8621P2Locators.INSTANCES_8621_4).click()
    }
    ClickOnContinueOption() {
        cy.contains(' Continue ').click()
    }
    ClickOnExportToGoSystemButton() {
        cy.get(form8621Locators.EXPORT_TO_GOSYSTEM_BUTTON_FEDK1).click()
    }
    HandleGoSystemLoginPopup() {
        // Intercept window.open and capture the URL
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                // Visit the new window URL in the same tab
                cy.visit('https://login.pwc.com/login/?spEntityID=trtasso.thomson.com&goto=https:%2F%2Flogin.pwc.com:443%2Fopenam%2Fsaml2%2Fcontinue%2FmetaAlias%2Fpwc%2Fidp13&AMAuthCookie=');
            });
        });
        // Trigger the action that causes the window to open
        cy.get(form8621Locators.EXPORT_TO_GOSYSTEM_BUTTON_FEDK1).click()
        cy.contains(' Continue ').click()
        // Perform actions that trigger the new window
        cy.xpath(form8621Locators.TYPE_EMAIL).type('dataflow.automation@pwc.com');
        cy.contains('Next').click()

    }
    HandleGoSystemLoginPopupExecReview() {
        // Intercept window.open and capture the URL
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                // Visit the new window URL in the same tab
                cy.visit('https://login.pwc.com/login/?spEntityID=trtasso.thomson.com&goto=https:%2F%2Flogin.pwc.com:443%2Fopenam%2Fsaml2%2Fcontinue%2FmetaAlias%2Fpwc%2Fidp13&AMAuthCookie=');
            });
        });
        // Trigger the action that causes the window to open
        cy.get(form8621Locators.EXPORT_TO_GOSYSTEM_BUTTON_FEDK1).click()
        // Perform actions that trigger the new window
        cy.xpath(form8621Locators.TYPE_EMAIL).type('dataflow.automation@pwc.com');
        cy.contains('Next').click()

    }
    ClickOnSection1() {
        cy.xpath(form8621P2Locators.SECTION_1).click()
    }
    SearchDocumentNameFedK1() {
        cy.get(reviewLevelLocators.SEARCH_FILE_NAME).eq(2).type('2021 Lucille Bluth K1_1_14.pdf')
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    SelectTaxYear2023() {
        cy.get(approvalLocators.SELECT_TAX_YEAR).eq(3).click()
        cy.contains('2023').click({ force: true })
    }
    ClickOnAllInstances() {
        cy.get(form8621P2Locators.SELECT_ALL_INSTANCES_K3).click()
    }
    VerifyToolTipMessageZeroSelect() {
        cy.get(form8621Locators.EXPORT_TO_GOSYSTEM_BUTTON).trigger('mouseover')
        cy.wait(5000)
        cy.get(form8621P2Locators.TOOL_TIP_TEXT).then(($tooltip) => {
            cy.log($tooltip.text());
        })
        cy.wait(5000)
        cy.get(form8621P2Locators.TOOL_TIP_TEXT).should('be.visible').and('contain', 'Select at least one PFIC to continue')
    }
    VerifyToolTipMessage21Select() {
        cy.xpath(form8621P2Locators.EXPORT_TO_GOSYSTEM_BTN_EXEC_REVIEW).trigger('mouseover')
        cy.wait(5000)
        cy.get(form8621P2Locators.TOOL_TIP_TEXT).then(($tooltip) => {
            cy.log($tooltip.text());
        })
        cy.wait(5000)
        cy.get(form8621P2Locators.TOOL_TIP_TEXT).should('be.visible').and('contain', 'Too many PFICs are selected, deselect some to continue')
    }
    VerifyToolTipMessageK121Select() {
        cy.xpath(form8621P2Locators.EXPORT_TO_GOSYSTEM_BTN_FED_K1).trigger('mouseover')
        cy.wait(5000)
        cy.get(form8621P2Locators.TOOL_TIP_TEXT).then(($tooltip) => {
            cy.log($tooltip.text());
        })
        cy.wait(5000)
        cy.get(form8621P2Locators.TOOL_TIP_TEXT).should('be.visible').and('contain', 'Too many PFICs are selected, deselect some to continue')
    }
    SelectAllK1Instances() {
        cy.xpath(form8621P2Locators.SELECT_ALL_INSTANCES_K1).each(($checkbox) => {
            // Check if the checkbox is not already checked
            if (!$checkbox.is(':checked')) {
                // Click the checkbox
                cy.wrap($checkbox).click({ force: true });
            }
        });
        cy.wait(5000)
    }
    SelectAllK3Instances() {
        cy.get(form8621P2Locators.SELECT_ALL_INSTANCES_K3).click()
        cy.wait(5000)
        // cy.get(form8621P2Locators.SELECT_ALL_INSTANCES_K3).click()
        // cy.wait(5000)
        // cy.xpath(form8621P2Locators.SELECT_ALL_INSTANCES).click({multiple: true})
    }
    SearchDocumentNameFedK3() {
        cy.get(reviewLevelLocators.SEARCH_FILE_NAME).eq(2).type('K-3 2022 All Parts With Overflows Cut_1_30.pdf')
    }
    ClickOnReviewButton1() {
        cy.get(approvalLocators.REVIEW_BUTTON1).eq(1).click()
    }
    ScrollFedK3Instances() {
        cy.scrollTo('bottom', { ensureScrollable: false })
    }
    ClickOnPageNo2() {
        cy.get(form8621P2Locators.SELECT_PAGE_2).click()
    }
    SelectTaxYearAll() {
        cy.get(approvalLocators.SELECT_TAX_YEAR).eq(3).click()
        cy.contains('(All)').click()
    }
    ClickOnReviewButton1() {
        cy.get(approvalLocators.REVIEW_BUTTON1).eq(0).click({ force: true })
    }
}
export default Form8621P2Functions;