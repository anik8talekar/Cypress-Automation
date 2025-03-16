
class AllocableItemReviewGridLocators {

GOTOFILEPROCESSING = "//button[@class='ap-button ap-button-primary ng-star-inserted']//div[contains(text(),' Go to file processing queue ')]"
DOCUMENT_CENTER = "//span[contains(text(),'Document Center')]"
EXPECTED_DOCUMENT = "//a[contains(text(),' Expected Documents ')]"             
DOCUMENTS_TAB = "(//a[contains(text(),' Documents ')])[1]"
MATCH_ICON = "(//tr[@aria-rowindex='1']//td[@aria-colindex='2']//a[@truxtooltip='Match'])[1]"
EXPECTED_DOCUMENT_DROPDOWN = "//trux-input[@formcontrolname='expectedDocumentId']"
SELECT_EXPECTED_DOCUMENT = "//span[contains(text(),' Federal K-1 (2023) 654 - PwC Entity - 654 - PwC Entity ')]"
SELECT_EXPECTED_DOCUMENT_2 = "//span[contains(text(),' Federal K-1 (2023) 1042 Intermediary 1 - 1042 Intermediary 1 ')]"
MATCH_BUTTON = "//div[@class='trux-button__content' and contains(text(),' Match ')]"
DOCUMENT_REVIEW_ICON = "(//tr[@aria-rowindex='1']//td//a[@awmtooltip='Review'])[1]"
VIEWBYDROPDOWN = "(//label[contains(text(),'View by:')]//following::trux-input[@type='select'])[1]"
SELECT_STATE_SOURCE = "//li[contains(text(),' State Source - Fed to State Comparison')]"
SELECT_TRACK_ALLOCABLE_ITEMS = "//li[contains(text(),' TRACK Allocable Items')]"
STANDARD_DESCRIPTION_DOCUMENT_GRID = "//div[@class='ag-body-horizontal-scroll-viewport']"
VERIFY_STANDARD_DESCRIPTION = "//span[contains(text(),'Standard Description')]"
DOCUMENT_STATE = "//a[contains(text(),' State ')]"
VERIFY_STATE_STANDARD_DESCRIPTION = "//span[@class='ag-header-cell-text' and contains(text(),'Standard Description')]"
VERIFY_TRACK_TAXONOMY = "//span[contains(text(),'TRACK Taxonomy Description')]"
VERIFY_STATE_TRACK_TAXONOMY = "//span[contains(text(),'Default Federal Taxonomy')]"
READY_FOR_TRACK_REVIEW_BUTTON = "//div[contains(text(),' Ready for TRACK review ')]"
READY_FOR_TRACK_OK_BUTTON = "//div[@class='mezz-notification__action mezz-notification__action--primary ng-star-inserted' and contains(text(),' Ok ')]"
EDIT_STATE_SOURCE_VALUE_1 = "(//tr[@aria-rowindex='4']//td[@aria-colindex='2']//div)[1]"
PAGECLICK = "//mezz-document-review-page[@class='ng-tns-c565-39 ng-star-inserted']"
EDIT_STATE_SOURCE_VALUE_2 = "(//tr[@aria-rowindex='5']//td[@aria-colindex='2']//div)[1]"
EDIT_STANDARD_DESCRIPTION_COLUMN = "(//div[@aria-colindex='8'])[3]"
SELECT_STANDARD_DESCRIPTION_COLUMN = "//li[contains(text(),' Line 1 | Warranty Expense')]"

}
export default AllocableItemReviewGridLocators;