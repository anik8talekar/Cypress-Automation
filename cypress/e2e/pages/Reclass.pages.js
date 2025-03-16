import ReclassLocators from "../locator files/Reclass.locators";
import ApprovalLocators from "../locator files/Approval.locators";

var reclassLocators = new ReclassLocators
var approvalLocators = new ApprovalLocators

class ReclassFunctions {
    TypeFileName() {
        cy.get(reclassLocators.FILENAME_TEXTBOX).eq(0).click().type('2021 Stanley Sitwell_1_14.pdf')
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnInfoIconReviewScreen() {
        cy.get(reclassLocators.INFO_ICON_REVIEW_SCREEN).eq(0).click()
    }
    ClickOnReclassFormIcon() {
        cy.get(reclassLocators.RECLASS_FORM_ICON).eq(0).click()
    }
    TypeReclassName() {
        cy.xpath(reclassLocators.RECLASS_NAME).type('Automation')
    }
    SelectToScheduleItem() {
        cy.get(reclassLocators.TO_SCHEDULE_ITEM).eq(1).click()
        cy.contains(' 4A - Guaranteed payment - Services').click()
    }
    SelectToScheduleItemReclass() {
        cy.get(reclassLocators.TO_SCHEDULE_ITEM).eq(1).click()
        cy.contains(' 5 - Interest income').click()
        cy.wait(2000)
        cy.get(reclassLocators.TO_SCHEDULE_ITEM).eq(2).click()
        cy.wait(2000)
        cy.contains(' 7 - Royalties').click()
    }
    SelectToScheduleItemAdd() {
        cy.get(reclassLocators.TO_SCHEDULE_ITEM).eq(1).click()
        cy.contains(' 5 - Interest income').click()
        cy.wait(2000)
        cy.get(reclassLocators.NOTIFICATION).click({ force: true })
        cy.wait(2000)
        cy.get(reclassLocators.TO_SCHEDULE_ITEM).eq(2).click()
        cy.contains(' 7 - Royalties').click()
    }
    FillAmountThisReclass() {
        cy.get(reclassLocators.THIS_RECLASS_TEXTBOX).eq(1).type('2')
        cy.wait(2000);
        cy.get(reclassLocators.THIS_RECLASS_TEXTBOX).eq(2).type('4')
    }
    ClickOnSaveButton() {
        cy.xpath(reclassLocators.SAVE_BUTTON_RECLASS).click()
    }
    ClickOnSaveButtonEdit() {
        cy.xpath(reclassLocators.SAVE_BUTTON_EDIT).click()
    }
    YesPopup() {
        cy.contains(' Yes ').click()
    }
    clickOnExpandIcon() {
     cy.get(reclassLocators.EXPAND_ICON_VERIFY).click()
    }
    VerifyReclasses() {
        cy.xpath(reclassLocators.VERIFY_FROM_SCHEDULE_ITEM).should('contain', ' 5 - Interest income ')
        cy.get(reclassLocators.VERIFY_TO_SCHEDULE_ITEM).should('contain', ' 7 - Royalties ')
    }
    VerifyReclassesTab() {
        cy.xpath(reclassLocators.VERIFY_FROM_SCHEDULE_ITEM).eq(0).should('contain', ' 5 - Interest income ')
        cy.get(reclassLocators.VERIFY_TO_SCHEDULE_ITEM).should('contain', ' 7 - Royalties ')
    }
    ClickOnDeleteIcon() {
        cy.get(reclassLocators.DELETE_ICON).eq(0).click()
    }
    ClickOnDeletePopup() {
        cy.contains(' Delete ').click()
    }
    ClickOnViewByDropDown() {
        cy.get(reclassLocators.VIEW_BY_DROPDOWN).eq(1).click()
    }
    SelectReclassesOption() {
        cy.contains(' Reclasses').click({ force: true })
    }
    ClickOnAddReclassIcon() {
        cy.get(reclassLocators.ADD_RECLASS_ICON).click()
    }
    ClickOnScheduleDropdownSearch() {
        cy.get(reclassLocators.SCHEDULE_DROPDOWN).eq(4).click()
    }
    ClickOnTaxYearDropdownSearch() {
        cy.get(reclassLocators.SCHEDULE_DROPDOWN).eq(3).click()
    }
    SelectFederalK1() {
        cy.get(reclassLocators.CHOOSE_FEDERAL_K1).eq(4).click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    SelectTaxYear2021() {
        cy.get(reclassLocators.CHOOSE_FEDERAL_K1).eq(3).click()
        cy.get(reclassLocators.SCROLL_VIEW_CONTENT).contains('2021').click({ force: true })
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnReviewIcon(){
        cy.xpath(reclassLocators.SELECT_REVIEW_ICON).eq(4).click({force: true})
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnEditIcon() {
        cy.get(reclassLocators.EDIT_ICON).eq(0).click()
    }
    ClickOnEditIconSlideout() {
        cy.get(reclassLocators.EDIT_ICON_SLIDEOUT).click({force: true})
    }
    EditReclassName() {
        cy.get(reclassLocators.EDIT_RECLASS_NAME).clear()
        cy.xpath(reclassLocators.RECLASS_NAME).type('Swaraj')
        cy.wait(2000)
        cy.contains(' Save ').click()
        cy.wait(2000)
    }
    ClickOnReclassRulesTab() {
        cy.contains(' Reclass Rules ').click()
    }
    ClickOnToSlideout() {
        cy.xpath(reclassLocators.TO_SLIDEOUT).click()
        cy.wait(2000)
    }
    ClickOnFromSlideout() {
        cy.xpath(reclassLocators.TO_SLIDEOUT).click()
        cy.wait(2000)
    }
    ChangeToSlideout() {
        cy.contains(' 6B - Qualified dividends').click()
        cy.wait(2000)
    }
    ChangeFromSlideout() {
        cy.contains(' 6B - Qualified dividends').click()
        cy.wait(2000)
    }
    VerifyToSlideout() {
        cy.get(reclassLocators.VERIFY_TO_SLIDEOUT).should('contain', 'Qualified dividends')
    }
    ClickOnAddReclassRuleButton() {
        cy.contains('Add Reclass Rule').click()
    }
    ClickOnTaxYearDropdown() {
        cy.xpath(reclassLocators.TAX_YEAR_DROPDOWN).click()
    }
    Select2021() {
        cy.get(reclassLocators.TAX_YEAR_LIST).contains(' 2022').click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnScheduleDropdown() {
        cy.xpath(reclassLocators.SCHEDULE_DROPDOWN_RECLASS).click()
    }
    SelectFederalK1Reclass() {
        cy.get(reclassLocators.RECLASS_FEDK1).contains(' Federal K-1').click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnFromDropdown() {
        cy.xpath(reclassLocators.FROM_DROPDOWN).click()
    }
    SelectQualifiedDividends() {
        cy.contains(' 6A - Ordinary dividends').click()
    }
    ClickOnToDropdown() {
        cy.xpath(reclassLocators.TO_DROPDOWN).click()
    }
    SelectQualifiedDividendsTo() {
        cy.contains(' 6C - Dividend equivalents').click()
    }
    SelectDocument() {
        cy.get(reclassLocators.SELECT_DOCUMENT_CHECKBOX).eq(1).click({ force: true })
    }
    ClickOnActionsDropdown() {
        cy.contains(' Actions ').click()
    }
    ClickOnAddreclassRulesOption() {
        cy.contains('Add Reclass Rules').click()
    }
    ClickOnAssignRuleCheckbox() {
        cy.xpath(reclassLocators.ASSIGN_RULE_CHECKBOX).click({ multiple : true })
    }
    ClickOnUserTab() {
        cy.get(reclassLocators.USER_DOWN_ARROW).click()
    }
    ClickOnDeleteIconReclass() {
        cy.get(reclassLocators.DELETE_ICON_RECLASS).click()
    }
    VerifyReclassAddedUnderGrid() {
        cy.get(reclassLocators.VERIFY_RECLASS_RULES).eq(0).should('contain', 'Federal K-1 2022 From: 6 A To: 6 C')
        cy.get(reclassLocators.VERIFY_RECLASS_RULES).should('contain', 'Federal K-1')
        cy.get(reclassLocators.VERIFY_RECLASS_RULES).should('contain', '2022')
        cy.get(reclassLocators.VERIFY_RECLASS_RULES).should('contain', '6 A')
        cy.get(reclassLocators.VERIFY_RECLASS_RULES).should('contain', 'Ordinary dividends')
        cy.get(reclassLocators.VERIFY_RECLASS_RULES).should('contain', '6 C')
        cy.get(reclassLocators.VERIFY_RECLASS_RULES).should('contain', 'Dividend equivalents')
    }
    ClickOnDeleteIconReclassRules() {
        cy.get(reclassLocators.DELETE_ICON_RECLASS_RULES).eq(0).click({ force: true })
    }
    ClickOnNoOfReclasses() {
        cy.xpath(reclassLocators.NO_OF_RECLASSES).click()
    }
    ClickOnNumberofReclasses() {
        cy.get(reclassLocators.NUMBER_OF_RECLASSES).eq(4).click()
    }
    VerifyEditedReclassName() {
        cy.get(reclassLocators.VERIFY_EDITED_RECLASS_NAME).eq(2).should('contain', 'Swaraj')
    }
    ClickonDeleteIconPrerequiste() {
        cy.get(reclassLocators.DELETE_ICON_EDIT_RECLASSES).click({force: true})
    }
    ClickOnOK() {
        cy.contains(' OK ').click()
    }
    ClickOnCancelButton(){
        cy.xpath(reclassLocators.CANCEL_BUTTON_RECLASS).click()
    }
}
export default ReclassFunctions