import DocumentCenterDirectConnectLocators from "../locator files/DocumentCenter-DirectConnect.locators";

var  documentCenterDirectConnectLocators = new DocumentCenterDirectConnectLocators;

class DocumentCenterDirectConnectFunctions
{

  openDocumentCenter(){
     cy.xpath(documentCenterDirectConnectLocators.DOCUMENT_CENTER).click();
  }

  openDirectConnect(){
     cy.xpath(documentCenterDirectConnectLocators.DIRECT_CONNECT).click();
  }

  selectDataConnectProfile() {
    cy.getTestData().then((data)=>{
        cy.xpath(documentCenterDirectConnectLocators.PROFILE_NAME_DROPDOWN).click();
        cy.xpath(data['DC_DIRECT_CONNECT_PROFILE']).click();
        cy.wait(3000);
        cy.xpath(documentCenterDirectConnectLocators.SELECT_ALL).click();
        cy.xpath(documentCenterDirectConnectLocators.REVIEW_ALLOCABLE_ITEMS).click();
        cy.get(documentCenterDirectConnectLocators.DOCUMENTS).click();
        cy.xpath(documentCenterDirectConnectLocators.SEND_TO_TRACK).click();
        })

    }

    verifySuccessMessage(){
        cy.wait(15000);
        cy.xpath(documentCenterDirectConnectLocators.SEND_TO_TRACK).click();
        cy.get(documentCenterDirectConnectLocators.SUCCESS_MESSAGE).should('have.text','SUCCESS The export task for selected documents was queued. ')
    }
}
export default DocumentCenterDirectConnectFunctions;