class DataFlowLandingPageLocators {

    VERIFY_NAME = "div[class='engagement-tile__item-value']"
    VERIFY_CLIENT_NAME = "div[class='awm-collapsible-title']"
    VERIFY_ENGAGEMENT_TITLE = "div[class='engagement-tile__item engagement-tile__item--link']"
    VERIFY_ENGAGEMENT_NAME = ".ng-star-inserted"
    VERIFY_ENGAGEMENT_TYPE = ".ng-star-inserted"
    VERIFY_ENGAGEMENT_LineOfBusiness = "//div[contains(text(),'Testin')]"
    ADD_ENGAGEMENT_BUTTON = "ap-button[class='awm-button'] button[type='submit']"
    CLIENT_NAME = "//trux-input[@formcontrolname='clientName']//input[@type='text']"
    ABCD_CLIENT = "trux-list-single-select.ng-star-inserted > :nth-child(9)"
    ENGAGEMENT_NAME = "//trux-input[@formcontrolname='engagementName']//input[@type='text']"
    LOCATION = ".trux-list__virtual-viewport"
    LINE_OF_BUSINESS = "//trux-input[@formcontrolname='lineOfBusiness']//input[@type='text']"
    TESTING_LINE_OF_BUSINESS = ".trux-list__virtual-viewport"
    ENGAGEMENT_TYPE = "//trux-input[@formcontrolname='engagementType']//input[@placeholder='Select...']"
    SAVE_BUTTON = ".trux-slideout-footer > .trux-button > .trux-button__button > .trux-button__content"
    ADMIN_BUTTON = "//span[@class='ap-tabset-toggle-active']//span[contains(text(),'Admin')]"
    EDIT_BUTTON = "a[href='#']"
    SEARCH_BOX = "div[class='ap-search-input'] input[class='ap-field-input']"
    SEARCH_ENGAGEMENT = "//input[@type='text']"
    LOCATION_DROPDOWN = '//input[@class="trux-input-select__input"]'
    SELECT_ENGAGEMENT_TYPE = "//div[@class='trux-list__virtual-viewport']//li[contains(text(),' Test/Train')]"
    OK = "//div[contains(text(),' Ok ')]"
    ENGAGEMENT_TITLE = "//span[@class='highlight']"
}
export default DataFlowLandingPageLocators;