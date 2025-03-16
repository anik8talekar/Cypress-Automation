class FoFAutomationLocators{
    RESET_GRID_BUTTON = "//span[contains(text(),'Reset Grid')]"
    TAX_YEAR_DROPDOWN_DOC_CENTER = "//div[@aria-label='Items']"
    ACTIONS_DROPDOWN = "//div[contains(text(),' Actions ')]"
    GENERATE_FOF_EXTRACT_OPTION = "//span[contains(text(),'Generate FoF extract')]"
    EXPORT_BUTTON = "//div[contains(text(),' Export ')]"
    DOWNLOAD_BTN = "//a[@truxtooltip='Download']"
    FOF_EXTRACT_DISABLE_BTN = "//button[@class='trux-button__button trux-button__button--secondary trux-button__button--disabled trux-button__button--full-width']"
    DISABLE_FOF_EXTRACT_OPTION = ":nth-child(13) > .trux-button__button > .trux-button__content"
    TOOLTIP_CONTENT = "//div[@class='trux-tooltip__content']"
    BUSINESS_ENTITIES_TAB = "//span[contains(text(),' Business Entities ')]"
    BUSINESS_ENTITIES_SCROLLBAR = "//div[@class='dx-scrollable-scrollbar dx-widget dx-scrollbar-vertical dx-scrollbar-hoverable']"
    VIEW_BY_DROPDOWN = "//trux-list[@displayexpr='name']"
    EXPAND_SCHEDULE_ITEM_DETAILS = "//td[@aria-label='Expand']"
    DOWNLOAD_EXTRACTS_GRID = "//div[@class='dx-scrollable-container']"
    FEDERAL_ROW = "//div[@class='dx-treelist-icon-container']"
    SEARCH_FILENAME_EXTRACTS = "//input[@aria-label='Filter cell']"  
}
export default FoFAutomationLocators;