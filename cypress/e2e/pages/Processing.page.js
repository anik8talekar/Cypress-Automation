import ProcessingLocators from "../locator files/Processing.locator"
import DirectConnectLocators from "../locator files/DirectConnect.locator";
import CanoeIntegrationLocators from "../locator files/CanoeIntegration.locator"

var processingLocators = new ProcessingLocators();
var directConnectLocators = new DirectConnectLocators();
var canoeIntegrationLocators = new CanoeIntegrationLocators();

class ProcessingFunctions{
     openTheApp(){
       cy.visit(Cypress.env('baseURL'))    
     }
     openEngagement(){
        cy.xpath(directConnectLocators.SEARCH).type('DATAFLOW_QA_AUTOMATION')
        cy.xpath(directConnectLocators.HIGHLIGHT).click();
     }
     openUploadFiles(){
        cy.xpath(processingLocators.UPLOAD_FILES).click();
        cy.wait(3000);
     }
     clickUploadFilesButton(){
        cy.xpath(processingLocators.UPLOAD_FILES_BUTTON).click();
     }
     uploadSingleFile(){
        cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/2023 Arizona K-1 NR GST_1_2.pdf',{force: true});
        cy.wait(3000);
        cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text','2023 Arizona K-1 NR GST_1_2.pdf');
        cy.xpath(processingLocators.SUCCESS_CIRCLE).should('be.visible');
        cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
     }
     uploadMultipleFiles(){
        cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile(['cypress/fixtures/2023 -STANLEY SITWELL 1 7_1_6.pdf', 'cypress/fixtures/2023 K-1 DRE File.pdf', 'cypress/fixtures/2023 K-1 DRE File2.pdf'],{force: true})
        cy.wait(3000);
        cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text','2023 -STANLEY SITWELL 1 7_1_6.pdf2023 K-1 DRE File.pdf2023 K-1 DRE File2.pdf')
        cy.xpath(processingLocators.SUCCESS_CIRCLE).should('be.visible');
        cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    }
    uploadZipFile(){
        cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/Test PDF File.zip',{force: true})
        cy.wait(3000);
        cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text','Test PDF File.zip')
        cy.xpath(processingLocators.SUCCESS_CIRCLE).should('be.visible');
        cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    }
    uploadK3File(){
        cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/K3 Parts 2-10_1_22.pdf',{force: true});
        cy.wait(3000);
        cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text','K3 Parts 2-10_1_22.pdf')
        cy.xpath(processingLocators.SUCCESS_CIRCLE).should('be.visible');
        cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
    }
    uploadPFICStatement(){
        cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile(['cypress/fixtures/2023 PFIC STMT_ABC CLIPPERS_ABCIXHOLDINGS.pdf','cypress/fixtures/2023 PFIC STMT_New Jersey Trust VI_ABC WIMBELDON LP.pdf'],{force: true})
        cy.wait(3000);
        cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text','2023 PFIC STMT_ABC CLIPPERS_ABCIXHOLDINGS.pdf2023 PFIC STMT_New Jersey Trust VI_ABC WIMBELDON LP.pdf')
        cy.xpath(processingLocators.SUCCESS_CIRCLE).should('be.visible');
        cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
        
    }
    openExecutiveReview(){
        cy.xpath(processingLocators.DOCUMENT_CENTER).click();
        cy.xpath(processingLocators.EXECUTIVE_REVIEW).click();
    }
    verifyProcessCompletion() {
        const processIndicators = [
          processingLocators.PROCESS_STATUS_INDICATOR_1,
          processingLocators.PROCESS_STATUS_INDICATOR_2,
          processingLocators.PROCESS_STATUS_INDICATOR_3,
          processingLocators.PROCESS_STATUS_INDICATOR_4,
          processingLocators.PROCESS_STATUS_INDICATOR_5,
          processingLocators.PROCESS_STATUS_INDICATOR_6,
          processingLocators.PROCESS_STATUS_INDICATOR_7,
          processingLocators.PROCESS_STATUS_INDICATOR_8,
          processingLocators.PROCESS_STATUS_INDICATOR_9,
          processingLocators.PROCESS_STATUS_INDICATOR_10,
          processingLocators.PROCESS_STATUS_INDICATOR_11,
          processingLocators.PROCESS_STATUS_INDICATOR_12
        ];
      
        processIndicators.forEach((locator) => {
          cy.xpath(locator).should(($element) => {
            const text = $element.text().trim();
            expect(text).to.match(/Processing Requested|Password Locked|Error|Processing|Success|Complete/);
          });
        });
      }
    verifyProcessedFiles(){
         cy.xpath(processingLocators.EXPAND_FILE_DETAILS).click({force: true});
         cy.xpath(processingLocators.DOC_1).then(function(F1){
         cy.log(F1.text())
         cy.xpath(processingLocators.DOC_1).should('have.text', (F1.text()))})
         cy.get(processingLocators.COLAPSE_FILE_DETAILS).click({ multiple: true });

         cy.xpath(processingLocators.EXPAND_FILE_DETAILS).click({force: true});
         cy.xpath(processingLocators.DOC_2).then(function(F2){
         cy.log(F2.text())
         cy.xpath(processingLocators.DOC_2).should('have.text', (F2.text()))})
         cy.get(processingLocators.COLAPSE_FILE_DETAILS).click({ multiple: true });

         cy.xpath(processingLocators.EXPAND_FILE_DETAILS).click({force: true});
         cy.xpath(processingLocators.DOC_3).then(function(F3){
         cy.log(F3.text())
         cy.xpath(processingLocators.DOC_3).should('have.text', (F3.text()))})
         cy.get(processingLocators.COLAPSE_FILE_DETAILS).click({ multiple: true });

         cy.xpath(processingLocators.EXPAND_FILE_DETAILS).click({force: true});
         cy.xpath(processingLocators.DOC_4).then(function(F4){
         cy.log(F4.text())
         cy.xpath(processingLocators.DOC_4).should('have.text', (F4.text()))})
         cy.get(processingLocators.COLAPSE_FILE_DETAILS).click({ multiple: true });

         cy.xpath(processingLocators.EXPAND_FILE_DETAILS).click({force: true});
         cy.xpath(processingLocators.DOC_5).then(function(F5){
         cy.log(F5.text())
         cy.xpath(processingLocators.DOC_5).should('have.text', (F5.text()))})
         cy.get(processingLocators.COLAPSE_FILE_DETAILS).click({ multiple: true });

         cy.xpath(processingLocators.EXPAND_FILE_DETAILS).click({force: true});
         cy.xpath(processingLocators.DOC_6).then(function(F6){
         cy.log(F6.text())
         cy.xpath(processingLocators.DOC_6).should('have.text', (F6.text()))})
         cy.get(processingLocators.COLAPSE_FILE_DETAILS).click({ multiple: true });

         cy.xpath(processingLocators.EXPAND_FILE_DETAILS).click({force: true});
         cy.xpath(processingLocators.DOC_7).then(function(F7){
         cy.log(F7.text())
         cy.xpath(processingLocators.DOC_7).should('have.text', (F7.text()))})
         cy.get(processingLocators.COLAPSE_FILE_DETAILS).click({ multiple: true });

         cy.xpath(processingLocators.EXPAND_FILE_DETAILS).click({force: true});
         cy.xpath(processingLocators.DOC_8).then(function(F8){
         cy.log(F8.text())
         cy.xpath(processingLocators.DOC_8).should('have.text', (F8.text()))})
         cy.get(processingLocators.COLAPSE_FILE_DETAILS).click({ multiple: true });

         cy.xpath(processingLocators.EXPAND_FILE_DETAILS).click({force: true});
         cy.xpath(processingLocators.DOC_9).then(function(F9){
         cy.log(F9.text())
         cy.xpath(processingLocators.DOC_9).should('have.text', (F9.text()))})
         cy.get(processingLocators.COLAPSE_FILE_DETAILS).click({ multiple: true });

         cy.xpath(processingLocators.EXPAND_FILE_DETAILS).click({force: true});
         cy.xpath(processingLocators.DOC_10).then(function(F10){
         cy.log(F10.text())
         cy.xpath(processingLocators.DOC_10).should('have.text', (F10.text()))})
         cy.get(processingLocators.COLAPSE_FILE_DETAILS).click({ multiple: true });

         cy.xpath(processingLocators.EXPAND_FILE_DETAILS).click({force: true});
         cy.xpath(processingLocators.DOC_11).then(function(F11){
         cy.log(F11.text())
         cy.xpath(processingLocators.DOC_11).should('have.text', (F11.text()))})
         cy.get(processingLocators.COLAPSE_FILE_DETAILS).click({ multiple: true });

         cy.xpath(processingLocators.EXPAND_FILE_DETAILS).click({force: true});
         cy.xpath(processingLocators.DOC_12).then(function(F12){
         cy.log(F12.text())
         cy.xpath(processingLocators.DOC_12).should('have.text', (F12.text()))})
         cy.get(processingLocators.COLAPSE_FILE_DETAILS).click({ multiple: true });
         
         }
    upload100MBFile(){
          cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/100MB-TESTFILE.ORG 2.pdf',{force: true});
          cy.wait(3000);
          cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text','100MB-TESTFILE.ORG 2.pdf');
          cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
          cy.xpath(processingLocators.FLOATING_WINDOW).should('be.visible');
       }
    verifyProcessingDocs(){
      cy.xpath(processingLocators.PROCESSING_DOCS).should('have.text',' Processing ')
      cy.xpath(processingLocators.PROCESSING_DOCS).should('not.have.text',' Processing Documents ')
    }
    uploadUnsupportedFile(){
      cy.xpath(processingLocators.UPLOAD_WIDGET).selectFile('cypress/fixtures/2021 DataFlow_BusEnt-QA.xlsx',{force: true});
   }
   verifyErrorMessage(){
    cy.xpath(processingLocators.ERROR_NOTIFICATION).should('have.text','ERROR One or more files with unsupported extension. ');
   }
   selectColumn(){
    cy.wait(3000);
    cy.xpath(canoeIntegrationLocators.COLUMN_SELECTOR).click();
    cy.xpath(canoeIntegrationLocators.SOURCE_OPTION).click();
    cy.xpath(canoeIntegrationLocators.TYPE_OPTION).click();
    cy.wait(3000);
   }
   VerifyColumn(){
    cy.xpath(canoeIntegrationLocators.SOURCE_COLOUMN).should('exist')
    cy.xpath(canoeIntegrationLocators.TYPE_COLOUMN).should('exist')
    cy.xpath(canoeIntegrationLocators.DATE_COLOUMN).should('exist')
   }
   searchFailedFile(){
    cy.xpath(processingLocators.SEARCH_MESSAGE).type('File failed to be processed.')
   }
   verifyContactSupportURL(){
    cy.xpath(processingLocators.CONTACT_SUPPORT).should('have.attr','href','https://docs.google.com/forms/d/e/1FAIpQLSdgH2vSbmQy8uzWJYJFg9XqTFBG9hpWUxmZhp5tk0iyUGqk6Q/viewform');
   }
}
export default ProcessingFunctions