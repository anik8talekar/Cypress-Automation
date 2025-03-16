class ProjectHorizonLocators{

    STANDARD_DESP_BUTTON = "//div[contains(text(),' Sync TRACK standard descriptions ')]"
    CLIENT_NAME_DROPDOWN = "//awm-single-dropdown-input[@formcontrolname='clientId']"
    TAX_YEAR_DROPDOWN = "//awm-single-dropdown-input[@formcontrolname='taxYear']"
    DATABASE_NAME_DROPDOWN = "//awm-single-dropdown-input[@formcontrolname='databaseId']"
    SELECT_CLIENT_NAME = "//span[contains(text(),'User Training')]"
    SELECT_TAX_YEAR = "//span[contains(text(),'2022')]"
    SELECT_DATABASE_NAME = "//span[contains(text(),'jpiotrowsk007_State_TrainingDB_2015')]"
    SAVE_BUTTON = "//div[contains(text(),' Save ')]"
    CHECK_IMPORT_STATUS_TAB = "//span[contains(text(),'Check Import Status')]"
    IMPORT_STATUS_GRID = "//div[@class='grid-wrapper__grid']"
    MANAGE_SCHEDULE_DATA = "//span[contains(text(),'Manage Schedule Data')]"
    HOVER_STANDARD_DESP = "button.ap-button.ap-button-secondary.schedule-management-page__btn.ng-star-inserted"
    TOOLTIP_TEXT = "//div[@class='ap-tooltip-text']" 
    SCHEDULE_ITEMS_GRID = "//div[@role='treegrid']"
    SCHEDULE_ITEM_DETAILS_GRID = "//div[@class='dx-datagrid-content']"
}
export default ProjectHorizonLocators;