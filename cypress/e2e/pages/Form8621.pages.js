import Form8621Locators from "../locator files/Form8621.locators";
import ReviewLevelLocators from "../locator files/ReviewLevels.locators";
import ApprovalLocators from "../locator files/Approval.locators";

var form8621Locators = new Form8621Locators
var reviewLevelLocators = new ReviewLevelLocators
var approvalLocators = new ApprovalLocators

class Form8621Functions {
    ClickOnGoSystemSettingsTab() {
        cy.contains('GoSystem Settings').click()
    }
    TypeUserEmail() {
        // Intercept the window.open call
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                // Instead of opening a new window, change the current window location
                win.location.href = url;
            });
        });

        // Trigger the action that causes the window to open
        cy.xpath(form8621Locators.ADD_DESTINATION).click(); // Adjust the selector as needed

        // Continue with assertions or other actions
        cy.xpath(form8621Locators.TYPE_EMAIL).type('dataflow.automation@pwc.com');
        cy.contains('Next').click()

    }
    TurnOffGoSytemToggleBtn() {
        //cy.xpath(form8621Locators.GOSYSTEM_TOGGLE_BUTTON).dblclick()
        //cy.get(form8621Locators.GOSYSTEM_TOGGLE_BUTTON).click({multiple: true})
        cy.wait(3000)
    }
    ClickOnUserDropdown() {
        cy.get(form8621Locators.USER_DROPDOWN).click()
    }
    SearchDocumentNameFedK1() {
        cy.get(reviewLevelLocators.SEARCH_FILE_NAME).eq(2).type('Fed K1 pages12.pdf-_1_12.pdf')
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    SelectTaxYear2022() {
        cy.get(approvalLocators.SELECT_TAX_YEAR).eq(3).click()
        cy.contains('2022').click({ force: true })
    }
    SelectTaxYear2021() {
        cy.get(approvalLocators.SELECT_TAX_YEAR).eq(3).click()
        cy.contains('2021').click()
    }
    ClickOnViewByDropdown() {
        cy.xpath(form8621Locators.VIEW_BY_DROPDOWN).click()
    }
    ClickOnFootnotesOption() {
        cy.contains(' Footnotes').click()
    }
    VerifyGoSystemButton() {
        //cy.get(form8621Locators.EXPORT_TO_GOSYSTEM_BUTTON).should('not.exist')
    }
    ClickOnExportToGoSystemBtn() {
        cy.get(form8621Locators.EXPORT_TO_GOSYSTEM_BUTTON_FEDK1).click()
    }
    SelectFedK3() {
        cy.get(approvalLocators.SCHEDULE_DROPDOWN).eq(4).click()
        cy.get(approvalLocators.SCHEDULE_VIEW_CONTENT).contains('Federal K-3').click()
    }
    SelectFEDk3Doc() {
        cy.xpath(form8621Locators.SELECT_FEDK3_DOC).eq(1).click()
    }
    SearchDocumentNameFedK3() {
        cy.get(reviewLevelLocators.SEARCH_FILE_NAME).eq(2).type('K3 Parts 2-10_1_22.pdf')
    }
    ClickOnPartVII() {
        cy.xpath(form8621Locators.PART_VII).click()
    }
    ClickOnSection2() {
        cy.xpath(form8621Locators.SECTION_2).click()
    }
    ClickOnExecutiveReviewCheckBox() {
        cy.xpath(form8621Locators.RESET_GRID).click()
        cy.wait(4000)
        cy.xpath(form8621Locators.SEARCH_INVESTMENT_NAME).type('SITWELL COMPANY')
        cy.wait(4000)
        cy.xpath(form8621Locators.EXECUTIVE_REVIEW_CHECKBOX_4).click({ force: true })
    }
    ClickOnDetailsButton() {
        cy.xpath(form8621Locators.DETAILS_BUTTON).click()
    }
    ClickOn8621() {
        cy.xpath(form8621Locators.EXECUTIVE_REVIEW_8621).click()
    }
    VerifyGoSystemButtonExist() {
       // cy.get(form8621Locators.EXPORT_TO_GOSYSTEM_BUTTON).should('be.visible')
    }
    ClickOnDeleteIcon() {
        cy.get(form8621Locators.DELETE_ICON).eq(2).click({ force: true })
    }
    ClickOnDeletePopup() {
        cy.contains(' Delete ').click()
    }
    ClearDocumentName() {
        cy.get(reviewLevelLocators.SEARCH_FILE_NAME).eq(2).clear()
    }
    Select8621Instances1() {
        cy.xpath(form8621Locators.INSTANCES_8621_1).click({ force: true })
    }
    Select8621Instances2() {
        cy.xpath(form8621Locators.INSTANCES_8621_2).click()
    }
    Select8621Instances3() {
        cy.xpath(form8621Locators.INSTANCES_8621_3).click({force: true})
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
        // Perform actions that trigger the new window
        cy.xpath(form8621Locators.TYPE_EMAIL).type('dataflow.automation@pwc.com');
        cy.contains('Next').click({force: true})

    }
    ClickOnDestinationDropdown() {
        cy.xpath(form8621Locators.DESTINATION_DROPDOWN).click()
    }
    SelectDestination() {
        cy.contains(' 327D-2022-1065-0053VE-ABC, LLC ').click()
    }
    ClickOnExportButton() {
        cy.contains(' Export ').click()
    }
    ScrollExecutiveReviewGrid() {
        cy.get(form8621Locators.EXECUTIVE_REVIEW_SCROLLBAR).scrollTo('left')
    }
    ClickOnScheduleDropdown() {
        cy.wait(5000)
        cy.xpath(form8621Locators.SCHEDULE_DROPDOWN_EXECUTIVE_REVIEW).eq(1).click()
        cy.get(approvalLocators.SCHEDULE_VIEW_CONTENT).contains('Federal K-3').click()
    }

}

export default Form8621Functions;