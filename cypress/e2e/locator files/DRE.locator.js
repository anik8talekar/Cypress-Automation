class DRELocators{
DRE_DROPDOWN = ':nth-child(2) > .tiles-container__tile > .tile > .tile__info > :nth-child(1) > .tile__info-item--dropdown-value > .trux-input-select > .trux-input-wrapper > .trux-input-icon'
DRE_ENABLED = "//li[contains(text(),' DRE Enabled')]"
FILE_NAME_SEARCHBOX = "//td[@aria-colindex='5']//input[@type='text']"
TAX_YEAR_DROPDOWN = "//td[@aria-colindex='7']//div[@class='dx-dropdowneditor-icon']"
TAX_YEAR_2023 = "//div[contains(text(),'2023')]"
REVIEW_ICON = "//a[@awmtooltip='Review']"
II = "//a[contains(text(),'II')]"
H2 = "//td[contains(text(),'H2')]"
CIRCLE_INDICATOR_1 = "//td[@aria-colindex='12']//fa-icon[@class='ng-fa-icon dre-visual-indication ng-star-inserted']"
CIRCLE_INDICATOR_2 = "//td[@aria-colindex='13']//fa-icon[@class='ng-fa-icon dre-visual-indication ng-star-inserted']"
CIRCLE_INDICATOR_NAME = "//td[@aria-colindex='12']//span[contains(text(),'HASLEM PTRS VI ACQ. Q, LP')]"
CIRCLE_INDICATOR_NAME_2 = "//td[@aria-colindex='13']//span[contains(text(),' xx-xxxx4444 ')]"
}
export default DRELocators;