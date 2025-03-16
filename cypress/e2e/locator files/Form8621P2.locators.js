class Form8621P2Locators{

INSTANCES_8621_3 = "//tr[@aria-rowindex='3' ]//div[@aria-label='Select row']"
INSTANCES_8621_4 = "//tr[@aria-rowindex='4' ]//div[@aria-label='Select row']"
SECTION_1 = "//a[contains(text(),' Section 1 ')]"
TOOL_TIP_TEXT = "div[class = 'trux-tooltip__content']"
SELECT_ALL_INSTANCES_K1 = "//div[@class='view-by-page']//div[@aria-label='Select row']"
SELECT_ALL_INSTANCES_K3 = "div[aria-label='Select all']"
SELECT_ALL_INSTANCES = "//td[@class='dx-command-select dx-editor-cell dx-editor-inline-block dx-cell-focus-disabled']//following::div[@class='dx-checkbox-container']"
SCROLL_INSTANCES = "div[class='dx-scrollable-scrollbar dx-widget dx-scrollbar-vertical dx-scrollbar-hoverable']>div[class='dx-scrollable-scroll']"                       
SELECT_PAGE_2 = "div[aria-label='Page 2']"
EXPORT_TO_GOSYSTEM_BTN_EXEC_REVIEW = "//div[@class='grid-wrapper__toolbar']//following::div[@class='icon-button']"
EXPORT_TO_GOSYSTEM_BTN_FED_K1 = "(//div[@class='footnotes-toolbar']//following::mezz-icon-button//div[@class='icon-button'])[4]"
SELECT_EXEC_REVIEW = "(//td[contains(text(),'SITWELL COMPANY')]//ancestor::tr[@role='row']//span[@class='dx-checkbox-icon'])[2]"
}
export default Form8621P2Locators;