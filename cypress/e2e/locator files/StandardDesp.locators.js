class StandardDespLocators{

    ALLOCABLE_ITEM_TEMPLATES_TAB = "//a[contains(text(),' Allocable Item Templates ')]"
    STANDARD_DESP_COLUMN = "//div[contains(text(),'Standard Description')]"
    STANDARD_DESP_COLUMN_DATA = "//span[contains(text(),'Line 1 | Gain on Sale of Assets - Capital')]"
    STANDARD_DESP_IF_NEGATIVE_COLUMN = "//div[contains(text(),'Standard Description If Negative')]"
    STANDARD_DESP_IF_NEGATIVE_COLUMN_DATA = "//span[contains(text(),'Line 1 | Excise and Stamp Taxes Expense')]"
    STATE_TAB = "//a[contains(text(),' State ')]"
    DEF_FED_STANDARD_DESP = "//span[contains(text(),'Default Federal Standard Description')]"
    DEF_FED_STANDARD_DESP_DATA = "//span[contains(text(),'LINE 1: ORDINARY BUSINESS INCOME (LOSS)')]"
    DEF_FED_STANDARD_DESP_IF_NEGATIVE_DATA = "//span[contains(text(),'Line 1 | Abandonments')]"
    SCHEDULE_K3_BUTTON = "//a[contains(text(),' Schedule K3 ')]"
    SCHEDULE_K1_GRID = "//div[@class='federal-template-grid-container']"
    SCHEDULE_K3_GRID = "//mezz-grid-wrapper[@class='taxonomy-template-grid federal-template-grid']"
    SAVE_PROFILE_BUTTON = "//span[contains(text(),'Save Profile')]"
    STANDARD_DESP_ROW = "[aria-rowindex='1'] > [aria-describedby='dx-col-536-fixed'] > .dx-template-wrapper > .ng-star-inserted"
    CLEAR_DESP = "//span[@class='dx-clear-button-area']"
    EDIT_DESP = "[aria-rowindex='1'] > [aria-describedby='dx-col-536-fixed'] > .dx-template-wrapper"
    SELECT_DESP = "//div[contains(text(),'Line 1 | Advertising')]"
    EDIT_DESP_IF_NEGATIVE = "[aria-rowindex='1'] > [aria-describedby='dx-col-537-fixed']"
    SELECT_DESP_IF_NEGATIVE= "//div[contains(text(),'Line 1 | 401(k) Contributions')]"
    STANDARD_DESP_ROW_k3 = "[aria-rowindex='2'] > [aria-describedby='dx-col-562-fixed'] > .dx-template-wrapper"
    MATCHED_DROPDOWN = "//div[@class='dx-dropdowneditor-icon']"
    MATCHED_OPTION = "//div[contains(text(),'Matched')]"
    SEARCH_FILE_NAME = ".dx-texteditor-input"
    TRACK_ALLOCABLE_ITEMS = "//li[contains(text(),' TRACK Allocable Items')]"
    TRACK_TAXONOMY_DESP = "//span[contains(text(),'TRACK Taxonomy Description')]"
    TRACK_TAXONOMY_DESP_ROW = "//div[contains(text(),'No Federal K-1 Mapping | Line 4: Guaranteed payments | K1.010.04')]"
    SCROLL_BAR = ".ag-body-horizontal-scroll-viewport"

}
export default StandardDespLocators;