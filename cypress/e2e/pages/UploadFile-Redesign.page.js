/// <reference types= "cypress" />
import UploadFileRedesignLocators from "../locator files/UploadFile-Redesign.locator";
import DirectConnectLocators from "../locator files/DirectConnect.locator";
import ProcessingLocators from "../locator files/Processing.locator"


var uploadFileRedesignLocators = new UploadFileRedesignLocators
var directConnectLocators = new DirectConnectLocators();
var processingLocators = new ProcessingLocators();

// Stored values of All Documents file count 
var initialProcessingFilesCount;
var initialProcessingDocsCount;
var initialAllDocumentsCount;
var initialAllDocumentsFileCount;
var initialSuccessDocsFileCount;
var initialAllSuccessDocsCount;
var initialDeletedDocsFileCount;

class UploadFileRedesignFunctions {

    openTheApp() {
        cy.visit(Cypress.env('baseURL'))
    }

    openEngagement() {
        cy.xpath(directConnectLocators.SEARCH).type('DATAFLOW_QA_AUTOMATION')
        cy.xpath(directConnectLocators.HIGHLIGHT).click();
    }

    openUploadFiles() {
        cy.xpath(processingLocators.UPLOAD_FILES).click();
        cy.wait(3000);
    }

    ClickOnUploadButton() {
        cy.xpath(uploadFileRedesignLocators.UPLOAD_BUTTON).click({force:true});
    }

    VerifyHTMLTextOfUploadSection() {
        cy.xpath(uploadFileRedesignLocators.UPLOAD_SLIDEOUT_BODY).should('contain.text', ' What to expect when uploading? ')
        cy.xpath(uploadFileRedesignLocators.UPLOAD_SLIDEOUT_BODY).should('contain.text', ' You can bulk or single upload. The files should upload and process within minutes (max 30 mins for large files) ')
        cy.xpath(uploadFileRedesignLocators.UPLOAD_SLIDEOUT_BODY).should('contain.text', 'Variables impacting Upload Processing')
        cy.xpath(uploadFileRedesignLocators.UPLOAD_SLIDEOUT_BODY).should('contain.text', 'Unsupported Uploads')
        cy.xpath(uploadFileRedesignLocators.UPLOAD_SLIDEOUT_BODY).should('contain.text', ' Any forms other than Fed K-1, K-3 and State K-1. ')
        cy.xpath(uploadFileRedesignLocators.UPLOAD_SLIDEOUT_BODY).should('contain.text', 'View Password Protected files - need to be unlocked')
        cy.xpath(uploadFileRedesignLocators.UPLOAD_SLIDEOUT_BODY).should('contain.text', 'Subfolders in Zip package (will not upload)')
        cy.xpath(uploadFileRedesignLocators.UPLOAD_SLIDEOUT_BODY).should('contain.text', 'Files with edit restrictions, non editable pdfs')
        cy.xpath(uploadFileRedesignLocators.UPLOAD_SLIDEOUT_BODY).should('contain.text', 'Extraction fidelity may be low for')
        cy.xpath(uploadFileRedesignLocators.UPLOAD_SLIDEOUT_BODY).should('contain.text', 'Low quality scanned PDFs, i.e. non-original PDF')
        cy.xpath(uploadFileRedesignLocators.UPLOAD_SLIDEOUT_BODY).should('contain.text', 'Pdfs with watermark')
    }

    VerifySupportedFileFormat() {
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2021 George Bluth K1.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.VERIFY_UPLOADED_ICON).should('be.visible')
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2023-Federal K-3-CP VI RAPTOR, L.P.-PWC ENTITY.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.VERIFY_UPLOADED_ICON).should('be.visible')
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/New York - IT-204-IP.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.VERIFY_UPLOADED_ICON).should('be.visible')
    }

    VerifyNonSupportedFileFormat() {
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/Documents Import file.xlsx', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.VERIFY_UPLOADED_ERROR_MSG).should('contain.text', ' We have encountered unexpected problems. Please, ')

    }

    UploadMultipleFiles() {
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2021 George Bluth K1.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2023-Federal K-3-CP VI RAPTOR, L.P.-PWC ENTITY.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/New York - IT-204-IP.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2021 Lucille Bluth K1.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2021 Standpoor K1.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2021 Stanley Sitwell.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2022-Federal K-1-k12022_1_10.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2023 -STANLEY SITWELL 1 7.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/168HPS Loan Management 11-2017, Ltd. - Executed PFIC (2019).pdf.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/K3 Parts 2-10.pdf', { force: true })
        cy.wait(3000)

    }

    VerifyUploadedFileCount() {
        cy.xpath(uploadFileRedesignLocators.UPLOAD_FILE_SPINNER).should('be.visible')
        cy.wait(2000)
        cy.xpath(uploadFileRedesignLocators.UPLOADED_FILE_COUNT).should('exist').and('be.visible')
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.UPLOADED_FILE_COUNT).should('contain.text', ' 10 / 10 uploaded ')
    }

    UploadeMultipleUnsuppportedFiles() {
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).attachFile('2021 DataFlow_BusEnt-QA.xlsx', { subjectType: 'drag-n-drop' })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).attachFile('2021 DataFlow_BusEntUpdated.xlsx', { subjectType: 'drag-n-drop' })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).attachFile('ContactsTest.xlsx', { subjectType: 'drag-n-drop' })
        cy.wait(3000)
    }

    VerifyUploadedFileError() {
        cy.xpath(uploadFileRedesignLocators.UPLOAD_FILE_SPINNER).should('be.visible')
        cy.wait(2000)
        cy.xpath(uploadFileRedesignLocators.UPLOADED_FILE_COUNT).should('exist').and('be.visible')
        cy.wait(5000)
        cy.xpath(uploadFileRedesignLocators.UPLOADED_FILE_COUNT).should('contain.text', ' 13 / 13 uploaded, 3 with errors ')
    }

    VerifyAllDocumentsCount() {

        //Actual File counts before uploading a file

        cy.xpath(uploadFileRedesignLocators.ALL_PROCESSING_FILES_COUNT).invoke('text').then((text) => {
            initialProcessingFilesCount = parseInt(text.trim())
        })

        cy.xpath(uploadFileRedesignLocators.ALL_PROCESSING_DOCS_COUNT).invoke('text').then((text) => {
            initialProcessingDocsCount = parseInt(text.trim())
        })

        cy.xpath(uploadFileRedesignLocators.ALL_DOCUMENTS_COUNT).invoke('text').then((text) => {
            initialAllDocumentsCount = parseInt(text.trim())
        })

        cy.xpath(uploadFileRedesignLocators.ALL_DOCUMENTS_FILES_COUNT).invoke('text').then((text) => {
            initialAllDocumentsFileCount = parseInt(text.trim())
        })

        cy.xpath(uploadFileRedesignLocators.SUCCESS_DOCUMENTS_FILES_COUNT).invoke('text').then((text) => {
            initialSuccessDocsFileCount = parseInt(text.trim())
        })

        cy.xpath(uploadFileRedesignLocators.ALL_SUCCESS_DOCUMENTS_COUNT).invoke('text').then((text) => {
            initialAllSuccessDocsCount = parseInt(text.trim())
        })

        cy.xpath(uploadFileRedesignLocators.UPLOAD_BUTTON).click()
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2021 George Bluth K1.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2021 Lucille Bluth K1.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2021 Stanley Sitwell.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2021 Standpoor K1.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.FILE_PROCESSING_QUEUE).click()

        //Verify the updated all processing file count 

        cy.xpath(uploadFileRedesignLocators.ALL_PROCESSING_FILES_COUNT).invoke('text').then((text) => {
            const updateProcessingFilesCount = parseInt(text.trim())
            expect(updateProcessingFilesCount).to.not.equal(initialProcessingFilesCount)
        })

        cy.wait(210000)
        cy.reload()
        cy.wait(10000)

        //Verify the updated file counts

        cy.xpath(uploadFileRedesignLocators.ALL_PROCESSING_FILES_COUNT).invoke('text').then((text) => {
            const updateProcessingFilesCount = parseInt(text.trim())
            expect(updateProcessingFilesCount).to.not.equal(initialProcessingFilesCount)
        })

        cy.xpath(uploadFileRedesignLocators.ALL_PROCESSING_DOCS_COUNT).invoke('text').then((text) => {
            const updateProcessingDocsCount = parseInt(text.trim())
            expect(updateProcessingDocsCount).to.not.equal(initialProcessingDocsCount)
        })

        cy.xpath(uploadFileRedesignLocators.ALL_DOCUMENTS_FILES_COUNT).invoke('text').then((text) => {
            const updateAllDocumentsFileCount = parseInt(text.trim())
            expect(updateAllDocumentsFileCount).to.not.equal(initialAllDocumentsFileCount)
        })

        cy.xpath(uploadFileRedesignLocators.ALL_DOCUMENTS_COUNT).invoke('text').then((text) => {
            const updatedAllDocumentsCount = parseInt(text.trim())
            expect(updatedAllDocumentsCount).to.not.equal(initialAllDocumentsCount)
        })

        cy.xpath(uploadFileRedesignLocators.SUCCESS_DOCUMENTS_FILES_COUNT).invoke('text').then((text) => {
            const updatedSuccessDocsFileCount = parseInt(text.trim())
            expect(updatedSuccessDocsFileCount).to.not.equal(initialSuccessDocsFileCount)
        })

    }

    VerifySuccessDocumentsCount() {
        cy.wait(10000)

        //Verify updated success documents count

        cy.xpath(uploadFileRedesignLocators.ALL_SUCCESS_DOCUMENTS_COUNT).invoke('text').then((text) => {
            const updatedAllSuccessDocsCount = parseInt(text.trim())
            expect(updatedAllSuccessDocsCount).to.not.equal(initialAllSuccessDocsCount)
        })
    }

    VerifyDeletedDocumentsCount() {

        //Acutal deleted documents count before deleting file

        cy.xpath(uploadFileRedesignLocators.DELETED_DOCUMENTS_FILES_COUNT).invoke('text').then((text) => {
            initialDeletedDocsFileCount = parseInt(text.trim())
        })

        cy.xpath(uploadFileRedesignLocators.DOCUMENT_CENTER).click()
        cy.wait(2000)
        cy.xpath(uploadFileRedesignLocators.RESET_GRID).click()
        cy.wait(10000)
        cy.xpath(uploadFileRedesignLocators.FILE_NAME_SEARCHBOX).type('2021 George Bluth K1.pdf')
        cy.xpath(uploadFileRedesignLocators.SELECT_CHECKBOX_DOC_CENTER).click({ force: true })
        cy.xpath(uploadFileRedesignLocators.ACTIONS_BUTTON).click()
        cy.xpath(uploadFileRedesignLocators.DELETE_BUTTON).click()
        cy.wait(2000)
        cy.xpath(uploadFileRedesignLocators.POPUP_DELETE_BUTTON).click({ force: true })
        cy.wait(2000)
        cy.xpath(processingLocators.UPLOAD_FILES).click();
        cy.wait(5000);

        //Updated Deleted documents count after deleting file

        cy.xpath(uploadFileRedesignLocators.DELETED_DOCUMENTS_FILES_COUNT).invoke('text').then((text) => {
            const updatedDeletedDocsFileCount = parseInt(text.trim())
            expect(updatedDeletedDocsFileCount).to.not.equal(initialDeletedDocsFileCount)
        })

    }

    VerifyPageComponents() {
        //Verify the all upload page buttons
        cy.xpath(uploadFileRedesignLocators.UPLOAD_BUTTON).should('be.visible').and('not.be.disabled')
        cy.xpath(uploadFileRedesignLocators.UPLOAD_BUTTON).should('contain.text', ' Upload\n')
        cy.xpath(uploadFileRedesignLocators.CURRENT_YEAR_BUTTON).should('exist')
        cy.xpath(uploadFileRedesignLocators.LAST_TWO_YEARS_BUTTON).should('exist')
        cy.xpath(uploadFileRedesignLocators.CUSTOM_DATE_RANGE_BUTTON).should('exist')
        cy.xpath(uploadFileRedesignLocators.COLUMN_CHOOSER_BUTTON).should('exist')
        cy.xpath(uploadFileRedesignLocators.EXPORT_TO_EXCEL).should('be.visible')

    }

    VerifyUploadFileSpinner() {
        cy.xpath(uploadFileRedesignLocators.UPLOAD_BUTTON).click()
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2021 Lucille Bluth K1.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.UPLOAD_FILE_SPINNER).should('be.visible')
        cy.wait(2000)
        cy.xpath(uploadFileRedesignLocators.FILE_PROCESSING_QUEUE).click()
    }

    VerifyProcessingFileSpinner() {
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.PROCESSING_FILE_SPINNER).should('be.visible')
    }

    UploadDocument() {
        cy.xpath(uploadFileRedesignLocators.UPLOAD_BUTTON).click()
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/2021 Lucille Bluth K1.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.FILE_PROCESSING_QUEUE).click({ force: true })
        cy.wait(120000)
        cy.reload()
    }

    SearchFileNameInGrid() {
        cy.xpath(uploadFileRedesignLocators.SEARCH_FILE_NAME).type('2021 Lucille Bluth K1.pdf')
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.UPLOADED_FILE_DROPDOWN).click()
    }

    VerifyTaxYear() {
        cy.xpath(uploadFileRedesignLocators.TAX_YEAR_NAME).should('exist').and('be.visible')
        cy.xpath(uploadFileRedesignLocators.VERIFY_TAX_YEAR).should('have.text', '2023')
    }

    UploadDocument2() {
        cy.xpath(uploadFileRedesignLocators.UPLOAD_BUTTON).click()
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/100MB-TESTFILE.ORG 1.pdf', { force: true })
        cy.wait(3000)
        cy.xpath(uploadFileRedesignLocators.CLOSE_UPLOAD_SLIDEOUT).click({force:true})
        cy.xpath(uploadFileRedesignLocators.UPLOAD_FILE_SPINNER).should('be.visible')
    }

    VerifyFloatingPanel() {
        cy.wait(25000)
        cy.xpath(uploadFileRedesignLocators.UPLOADED_FILE_FLOATING_PANEL).should('exist').and('be.visible')
        cy.xpath(uploadFileRedesignLocators.UPLOADED_FILE_NAME).should('contain.text', '100MB-TESTFILE.ORG 1.pdf')
    }

    VerifyFloatingPanelHeader() {
        cy.xpath(uploadFileRedesignLocators.FLOATING_PANEL_HEADER).should('exist').and('be.visible')
        cy.xpath(uploadFileRedesignLocators.FLOATING_PANEL_HEADER).should('contain.text', ' 1 / 1 uploaded ')
    }

    CloseFloatingPanel() {
        cy.xpath(uploadFileRedesignLocators.FLOATING_PANEL_CLOSE_BUTTON).click()
    }


}
export default UploadFileRedesignFunctions