class ReclassLocators{

    FILENAME_TEXTBOX = "input[role='textbox']"
    RECLASS_FORM_ICON = "mezz-action-icon[tooltip='Reclass from']"
    RECLASS_NAME = "//trux-input[@formcontrolname='name']"
    TO_SCHEDULE_ITEM = "trux-input[type='select']"
    THIS_RECLASS_TEXTBOX = "input[type='number']"
    EXPAND_ICON_VERIFY = "td[aria-label='Expand']"
    VERIFY_FROM_SCHEDULE_ITEM = "//div[@class='dx-datagrid-content']"
    VERIFY_TO_SCHEDULE_ITEM = ".dx-template-wrapper > :nth-child(1) > :nth-child(2)"
    DELETE_ICON = "svg[data-icon='trash']"
    VIEW_BY_DROPDOWN = "input[placeholder='Select...']"
    RECLASSES_OPTION = ".trux-list__item trux-list__item--level- ng-star-inserted"
    ADD_RECLASS_ICON = "svg[data-icon='plus']"
    SCHEDULE_DROPDOWN = "div[class='dx-dropdowneditor-icon']"
    CHOOSE_FEDERAL_K1 = "div[class='dx-dropdowneditor-icon']"
    SELECT_REVIEW_ICON = "//a[@awmtooltip='Review']"
    EDIT_ICON = "svg[data-icon='pen']"
    EDIT_ICON_SLIDEOUT = ".dx-datagrid-content-fixed > .dx-datagrid-table > tbody > .dx-data-row > .dx-command-edit > .dx-template-wrapper > .ng-star-inserted > .action-icon"
    EDIT_RECLASS_NAME = "//input[@type='text']"
    TO_SLIDEOUT = "//trux-form-field[@class='trux-form-field trux-form-field--with-margin']//following::trux-input[@formcontrolname='toScheduleItemId']"
    FROM_SLIDEOUT ="//trux-form-field[@class='trux-form-field trux-form-field--with-margin']//following::trux-input[@formcontrolname='fromScheduleItemId']"
    VERIFY_TO_SLIDEOUT = "td[role='gridcell']"
    TAX_YEAR_DROPDOWN = "//trux-input[@formcontrolname='taxYear']"
    SCHEDULE_DROPDOWN_RECLASS = "//trux-input[@formcontrolname='scheduleId']"
    FROM_DROPDOWN = "//trux-input[@type='select'and@formcontrolname='fromScheduleItemId']"
    TO_DROPDOWN = "//trux-input[@formcontrolname='toScheduleItemId']"
    SELECT_DOCUMENT_CHECKBOX = ".dx-checkbox-icon"
    ASSIGN_RULE_CHECKBOX = "(//span[@class='trux-checkbox__checkmark'])[1]"
    USER_DOWN_ARROW = "svg[data-icon='chevron-down']"
    VERIFY_RECLASS_RULES = ".reclass-rules-page"
    DELETE_ICON_RECLASS_RULES = "svg[data-icon='trash']"
    NO_OF_RECLASSES = "//div[contains(text(),' Number of Reclasses ')]"
    INFO_ICON_REVIEW_SCREEN = "svg[data-icon='circle-info']"
    NUMBER_OF_RECLASSES = ".summary-item__label"
    VERIFY_EDITED_RECLASS_NAME = "td[aria-colindex='3']"
    DELETE_ICON_EDIT_RECLASSES = ".dx-datagrid-content-fixed > .dx-datagrid-table > tbody > .dx-data-row > .dx-command-edit > .dx-template-wrapper > mezz-trash-action-icon > .action-icon > .ng-fa-icon"
    SCROLL_VIEW_CONTENT = '.dx-scrollview-content'
    TAX_YEAR_LIST = '.trux-list__scrollable-viewport'
    RECLASS_FEDK1 = 'trux-list[keyexpr="value"]'
    DELETE_ICON_RECLASS = '.svg-inline--fa fa-trash'
    BTN = '[type="primary"] > .trux-button__button'
    NOTIFICATION = '.trux-notification__action--primary'
    SAVE_BUTTON_RECLASS = "//div[contains(text(),' Save ')]"
    SAVE_BUTTON_EDIT = "//div[contains(text(),' Save ')]"
    CANCEL_BUTTON_RECLASS = "//div[contains(text(),' Cancel ')]"
}
export default ReclassLocators