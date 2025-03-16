import CanoeIntegrationLocators from "../locator files/CanoeIntegration.locator";
import ProcessingFunctions from "./Processing.page";

var canoeIntegrationLocators = new CanoeIntegrationLocators
var processingFunctions = new ProcessingFunctions

class CanoeIntegrationFunctions {
    openEngagementSettings() {
        cy.xpath(canoeIntegrationLocators.ADMIN).click();
        cy.xpath(canoeIntegrationLocators.ENGAGEMENT_SETTINGS).click();
    }
    openDocumentImportAndExport() {
        cy.xpath(canoeIntegrationLocators.DOCUMENT_IMPORT_AND_EXPORT).click();
    }
    verifyToggleRights() {
        cy.xpath(canoeIntegrationLocators.TOGGLE_BTN).should('exist')
    }
    turnOnToggleIfOff() {
        cy.xpath(canoeIntegrationLocators.TOGGLE_BTN).then(($button) => {
            const isButtonOn = $button.attr('aria-checked') === 'true';
            if (!isButtonOn) {
                cy.xpath(canoeIntegrationLocators.TOGGLE_BTN).click();
            }
        });
    }
    openCanoeSettings() {
        cy.xpath(canoeIntegrationLocators.CANOE_SETTINGS).eq(1).click({ force: true });
    }
    clickOnAddClientCredential() {
        cy.xpath(canoeIntegrationLocators.ADD_CLIENT_CREDENTIAL_BTN).click({ force: true });
    }
    addClientCredential() {
        cy.xpath(canoeIntegrationLocators.CLIENT_ID_TEXTBOX).type('16d3bf2e-b520-11ec-8000-ddaeeb55ad7f', { force: true });
        cy.xpath(canoeIntegrationLocators.CLINET_SECRET_TEXTBOX).type('CYsjHYPif6xWzDU4fwbmTPzovszcWAEQYaqEDgQU', { force: true });
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();
        const formattedDate = `${month}/${day}/${year}`;

        cy.xpath(canoeIntegrationLocators.LAST_RETRIEVED_DATE).type(formattedDate, { force: true });
        cy.xpath(canoeIntegrationLocators.SAVE_BTN).click(0, { force: true });
        cy.wait(3000);
    }
    selectClientIDAndSecret() {
        cy.xpath(canoeIntegrationLocators.CHECKBOX).click({ force: true });
    }
    deleteClientIDAndSecret() {
        cy.xpath(canoeIntegrationLocators.DELETE_BTN).click();
        cy.xpath(canoeIntegrationLocators.DELETE_YES).click();
    }
    verifyClientSecretInvisibility() {
        cy.xpath(canoeIntegrationLocators.CLIENT_SECRET).should('have.text', ' ************* ')
    }
    turnOnConfigurationSwitch() {
        cy.xpath(canoeIntegrationLocators.CONFIGURATION_SWITCH_BUTTON).eq(1).then(($button) => {
            const isButtonOn = $button.attr('aria-checked') === 'true';
            if (!isButtonOn) {
                cy.xpath(canoeIntegrationLocators.CONFIGURATION_SWITCH_BUTTON).eq(1).click({ force: true });
            }
        });
    }
    verifyDocumentProcessing() {
        processingFunctions.openUploadFiles();
        cy.xpath(canoeIntegrationLocators.COLUMN_SELECTOR).click();
        cy.xpath(canoeIntegrationLocators.SOURCE_OPTION).click();
        cy.wait(3000);
        cy.xpath(canoeIntegrationLocators.SOURCE).click();
        cy.xpath(canoeIntegrationLocators.SELECT_ALL).click();
        cy.xpath(canoeIntegrationLocators.CANOE).click();
        cy.xpath(canoeIntegrationLocators.VERIFY_STATUS).should('have.text', ' Processing ');
    }
    sendDocumentToProcess() {
        cy.xpath(canoeIntegrationLocators.USER).eq(0).click({ force: true });
        cy.xpath(canoeIntegrationLocators.DOCUMENT_CENTER).click({ force: true });
        cy.xpath(canoeIntegrationLocators.AVAILABLE_DOCUMENTS).click();
        cy.xpath(canoeIntegrationLocators.CANOE_DOCUMENTS).click();
        cy.xpath(canoeIntegrationLocators.MANUAL_RETRIEVAL_BUTTON).click();
        cy.xpath(canoeIntegrationLocators.LOWER_BOUND_DATE).type("07/01/2023");
        cy.xpath(canoeIntegrationLocators.RETRIEVE_BUTTON).click();
        cy.xpath(canoeIntegrationLocators.ACTIONS_PROCESS_1).eq(0).click({ force: true }); 
        cy.xpath(canoeIntegrationLocators.ACTIONS_PROCESS_2).eq(0).click({ force: true });
        cy.xpath(canoeIntegrationLocators.ACTIONS_PROCESS_3).eq(0).click({ force: true });
        cy.xpath(canoeIntegrationLocators.ACTIONS_PROCESS_4).eq(0).click({ force: true });
        cy.xpath(canoeIntegrationLocators.ACTIONS_PROCESS_5).eq(0).click({ force: true });   
    }
    verifyCanoeDocStatus(){
        const canoeIndicators = [
            canoeIntegrationLocators.CANOE_DOC_STATUS_1,
            canoeIntegrationLocators.CANOE_DOC_STATUS_2,
            canoeIntegrationLocators.CANOE_DOC_STATUS_3,
            canoeIntegrationLocators.CANOE_DOC_STATUS_4,
            canoeIntegrationLocators.CANOE_DOC_STATUS_5
          ];        
          canoeIndicators.forEach((locator) => {
            cy.xpath(locator).should(($element) => {
              const text = $element.text().trim();
              expect(text).to.match(/Processing Requested|Processing|Partially Complete|Processing Completed/);
            });
          });
    }
}
export default CanoeIntegrationFunctions;