import StandardDespLocators from "../locator files/StandardDesp.locators"
import Smartk1Locators from "../locator files/Smart-k1.locators"

var standardDespLocators = new StandardDespLocators
var smartK1Locators = new Smartk1Locators

class StandardDespFunctions{
SearchEngagement(){
    cy.xpath(smartK1Locators.SEARCH_ENGAGEMENT).type(' sample ')
    cy.get(smartK1Locators.CLICK_ENGAGEMENT).click()
}
SearchEngagementTRACK(){
    cy.xpath(smartK1Locators.SEARCH_ENGAGEMENT).type(' DATAFLOW_QA_AUTOMATION ')
    cy.get(smartK1Locators.CLICK_ENGAGEMENT).click()
}
ClickOnAllocableTemplatesTab(){
    cy.xpath(standardDespLocators.ALLOCABLE_ITEM_TEMPLATES_TAB).click()
}
CheckStandardDespColumn(){
    cy.xpath(standardDespLocators.STANDARD_DESP_COLUMN).should('be.visible')
}
CheckStandardDespColumnData(){
    cy.xpath(standardDespLocators.STANDARD_DESP_COLUMN_DATA).should('be.visible')
}
CheckStandardDespIfNegativeColumn(){
    cy.xpath(standardDespLocators.STANDARD_DESP_IF_NEGATIVE_COLUMN).should('be.visible')
}
CheckStandardDespIfNegativeColumnData(){
    cy.xpath(standardDespLocators.STANDARD_DESP_IF_NEGATIVE_COLUMN_DATA).should('be.visible')
}
ClickOnStateTab(){
    cy.xpath(standardDespLocators.STATE_TAB).click()
}
CheckDefFedStandardDespColumn(){
    cy.xpath(standardDespLocators.DEF_FED_STANDARD_DESP).should('be.visible')
}
CheckDefFedStandardDespColumnData(){
    cy.xpath(standardDespLocators.DEF_FED_STANDARD_DESP_DATA).should('be.visible')
}
CheckDefFedStandardDespIfNegativeColumn(){
    cy.xpath(standardDespLocators.DEF_FED_STANDARD_DESP).should('be.visible')
}
CheckDefFedStandardDespIfNegativeColumnData(){
    cy.xpath(standardDespLocators.DEF_FED_STANDARD_DESP_IF_NEGATIVE_DATA).should('be.visible')
}
ClickOnScheduleK3(){
    cy.xpath(standardDespLocators.SCHEDULE_K3_BUTTON).click()
}
VerifyScheduleK1Grid(){
    cy.xpath(standardDespLocators.SCHEDULE_K1_GRID).should('be.visible')
}
VerifyScheduleK3Grid(){
    cy.xpath(standardDespLocators.SCHEDULE_K3_GRID).should('be.visible')
}
ClickOnSaveProfileButton(){
    cy.xpath(standardDespLocators.SAVE_PROFILE_BUTTON).click()
}
EditStandardDespRow(){
    cy.get(standardDespLocators.STANDARD_DESP_ROW).click({force: true})
}
ClearStandardDesp(){
    cy.xpath(standardDespLocators.CLEAR_DESP).eq(1).click()
}
EditStandardDesp(){
    cy.get(standardDespLocators.EDIT_DESP).click()
    cy.wait(3000)
}
SelectStandardDesp(){
    cy.xpath(standardDespLocators.SELECT_DESP).click()
}
EditStandardDesIfNegative(){
    cy.get(standardDespLocators.EDIT_DESP_IF_NEGATIVE).click()
    cy.wait(3000)
}
SelectStandardDespIfNegative(){
    cy.xpath(standardDespLocators.SELECT_DESP_IF_NEGATIVE).click()
}
EditStandardDespRowK3(){
    cy.get(standardDespLocators.STANDARD_DESP_ROW_k3).click()
}
ClickOnMatchedDropdown(){
    cy.xpath(standardDespLocators.MATCHED_DROPDOWN).eq(1).click()
}
ChooseMatchedOption(){
    cy.xpath(standardDespLocators.MATCHED_OPTION).eq(1).click()
}
SearchFileName(){
    cy.get(standardDespLocators.SEARCH_FILE_NAME).eq(2).type('2023 -STANLEY SITWELL 1 7_1_6.pdf')
}
ClickOnTRACKAllocableItemsOption(){
    cy.xpath(standardDespLocators.TRACK_ALLOCABLE_ITEMS).click()
}
CheckTRACKTaxonomyDespColumn(){
    cy.xpath(standardDespLocators.TRACK_TAXONOMY_DESP).should('be.visible')
}
CheckTRACKTaxonomyDespRow(){
    cy.xpath(standardDespLocators.TRACK_TAXONOMY_DESP_ROW).should('contain','No Federal K-1 Mapping | Line 4: Guaranteed payments | K1.010.04')
}
ScrollAllocableItemsGrid(){
    cy.get(standardDespLocators.SCROLL_BAR).scrollIntoView()
}


}
export default StandardDespFunctions;