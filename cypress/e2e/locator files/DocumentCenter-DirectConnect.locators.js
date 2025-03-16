
class DocumentCenterDirectConnectLocators
{
    
 DOCUMENT_CENTER = "//span[contains(text(),'Document Center')]"
 DIRECT_CONNECT = "//a[contains(text(),' Direct Connect ')]"
 PROFILE_NAME_DROPDOWN = "//trux-input[@type='select']"
 SELECT_ALL = "//div[@aria-label='Select all']"
 REVIEW_ALLOCABLE_ITEMS = "//span[contains(text(),'Review Allocable Items')]"
 DOCUMENTS = '.trux-button-group > :nth-child(1) > .trux-button__button > .trux-button__content'
 SEND_TO_TRACK = "//span[contains(text(),'Send to TRACK')]"
 SUCCESS_MESSAGE = '.trux-notification__content'
}
export default DocumentCenterDirectConnectLocators;