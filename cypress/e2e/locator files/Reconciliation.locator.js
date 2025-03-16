class ReconciliationLocators{
SEARCH_FILE = "//td[@aria-colindex='5']//input[@role='textbox']"
SCHEDULE_DROPDOWN = "//td[@aria-colindex='9']//div[@aria-label='Select']"
FED_K3 = "//div[contains(text(),'Federal K-3')]"
PART_II = "(//a[contains(text(),'II')])[1]"
SECTION_1 = "//a[contains(text(),' Section 1 ')]"
SECTION_2 = "//a[contains(text(),' Section 2 ')]"
SECTION_3 = "//a[contains(text(),' Section 3 ')]"
RECONCILIATION_TILE = "//div[@class='k3-review-reconciliation-tab']"
PART_X = "(//a[contains(text(),'X')])[2]"
FED_K1 = "//div[contains(text(),'Federal K-1')]"
RECONCILIATION_TILE_K1 = "//mezz-taxable-income-reconciliation-tile[@class='review-reconciliation-tab_reconciliation']"
SCHEDULE_ITEMS = "//li[contains(text(),' Federal Face - Schedule Items')]"
SCHEDULE_ITEM_DETAILS = "//li[contains(text(),' Federal Overflow - Schedule Item Details')]"
FEDERAL_FOOTNOTES = "//li[contains(text(),' Federal Footnotes')]"
FEDERAL_RELCASSES = "//li[contains(text(),' Federal Reclasses')]"
}
export default ReconciliationLocators;