import AllocableItemReviewGridLocators from "../locator files/AllocableItemReviewGrid.locator";
import UploadFileRedesignLocators from "../locator files/UploadFile-Redesign.locator";
import ExpectedDocumentsEditsLocators from "../locator files/ExpectedDocumentsEdits.locator";

var allocableItemReviewGridLocators = new AllocableItemReviewGridLocators();
var uploadFileRedesignLocators = new UploadFileRedesignLocators();
var expectedDocumentsEditsLocators = new ExpectedDocumentsEditsLocators();

class AllocableItemReviewGridFunctions {

    UploadFiles() {
        cy.xpath(uploadFileRedesignLocators.CHOOSE_FILES_TO_UPLOAD).click({ force: true }).selectFile('cypress/fixtures/14-STANLEY SITWELL 1 7.pdf', { force: true })
        cy.wait(3000)
    }

    GoToFileProcessingSection() {
        cy.xpath(allocableItemReviewGridLocators.GOTOFILEPROCESSING).click();
    }

    GoToDocumentCenter() {
        cy.wait(3000);
        cy.xpath(allocableItemReviewGridLocators.DOCUMENT_CENTER).click();
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible');
    }

    GoToExpectedDocuments() {
        cy.wait(3000);
        cy.xpath(allocableItemReviewGridLocators.EXPECTED_DOCUMENT).click();
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible');
    }

    GoToDocumentsSections() {
        cy.xpath(allocableItemReviewGridLocators.DOCUMENTS_TAB).click();
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible')
    }

    MatchDocument() {
        cy.xpath(allocableItemReviewGridLocators.MATCH_ICON).click({ force: true });
        cy.wait(3000);
        cy.xpath(allocableItemReviewGridLocators.EXPECTED_DOCUMENT_DROPDOWN).click();
        cy.xpath(allocableItemReviewGridLocators.SELECT_EXPECTED_DOCUMENT).click();
        cy.xpath(allocableItemReviewGridLocators.MATCH_BUTTON).click();
        cy.wait(5000);
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible');
    }

    MatchDocument2() {
        cy.xpath(allocableItemReviewGridLocators.MATCH_ICON).click({ force: true });
        cy.wait(3000);
        cy.xpath(allocableItemReviewGridLocators.EXPECTED_DOCUMENT_DROPDOWN).click();
        cy.xpath(allocableItemReviewGridLocators.SELECT_EXPECTED_DOCUMENT_2).click();
        cy.xpath(allocableItemReviewGridLocators.MATCH_BUTTON).click();
        cy.wait(5000);
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible');
    }

    ReviewDocument() {
        cy.wait(5000);
        cy.xpath(allocableItemReviewGridLocators.DOCUMENT_REVIEW_ICON).click({ force: true });
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible');
    }

    VerifyStandardDescriptionInDocument() {
        cy.xpath(allocableItemReviewGridLocators.VIEWBYDROPDOWN).click();
        cy.wait(3000);
        cy.xpath(allocableItemReviewGridLocators.SELECT_STATE_SOURCE).click();
        cy.wait(3000);
        cy.xpath(allocableItemReviewGridLocators.EDIT_STATE_SOURCE_VALUE_1).type('{selectall}{backspace}');
        cy.xpath(allocableItemReviewGridLocators.EDIT_STATE_SOURCE_VALUE_1).type('29');
        cy.xpath(allocableItemReviewGridLocators.VIEWBYDROPDOWN).click();
        cy.wait(1000);
        cy.xpath(allocableItemReviewGridLocators.SELECT_TRACK_ALLOCABLE_ITEMS).click();
        cy.wait(2000);
        cy.xpath(allocableItemReviewGridLocators.STANDARD_DESCRIPTION_DOCUMENT_GRID).scrollTo('900px');
        cy.wait(3000);
        cy.xpath(allocableItemReviewGridLocators.EDIT_STANDARD_DESCRIPTION_COLUMN).click();
        cy.xpath(allocableItemReviewGridLocators.SELECT_STANDARD_DESCRIPTION_COLUMN).click();
        cy.xpath(allocableItemReviewGridLocators.VERIFY_STANDARD_DESCRIPTION).should('be.visible');
        cy.xpath(allocableItemReviewGridLocators.DOCUMENT_STATE).click()
        cy.xpath(allocableItemReviewGridLocators.VERIFY_STATE_STANDARD_DESCRIPTION).should('be.visible')
        cy.xpath(allocableItemReviewGridLocators.VIEWBYDROPDOWN).click();
        cy.wait(3000);
        cy.xpath(allocableItemReviewGridLocators.SELECT_STATE_SOURCE).click();
        cy.wait(3000);
        cy.xpath(allocableItemReviewGridLocators.READY_FOR_TRACK_REVIEW_BUTTON).click();
        cy.wait(2000);
        cy.xpath(allocableItemReviewGridLocators.READY_FOR_TRACK_OK_BUTTON).click();
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible');

    }

    VerifyTrackTaxonomyDescriptionInDocument() {
        cy.xpath(allocableItemReviewGridLocators.VIEWBYDROPDOWN).click();
        cy.wait(3000);
        cy.xpath(allocableItemReviewGridLocators.SELECT_STATE_SOURCE).click();
        cy.wait(3000);
        cy.xpath(allocableItemReviewGridLocators.EDIT_STATE_SOURCE_VALUE_1).type('{selectall}{backspace}');
        cy.xpath(allocableItemReviewGridLocators.EDIT_STATE_SOURCE_VALUE_1).type('29');
        cy.xpath(allocableItemReviewGridLocators.VIEWBYDROPDOWN).click();
        cy.wait(1000);
        cy.xpath(allocableItemReviewGridLocators.SELECT_TRACK_ALLOCABLE_ITEMS).click();
        cy.wait(2000);
        cy.xpath(allocableItemReviewGridLocators.STANDARD_DESCRIPTION_DOCUMENT_GRID).scrollTo('900px');
        cy.wait(3000);
        cy.xpath(allocableItemReviewGridLocators.VERIFY_TRACK_TAXONOMY).should('be.visible');
        cy.xpath(allocableItemReviewGridLocators.DOCUMENT_STATE).click()
        cy.xpath(allocableItemReviewGridLocators.VERIFY_STATE_TRACK_TAXONOMY).should('be.visible')
        cy.xpath(allocableItemReviewGridLocators.VIEWBYDROPDOWN).click();
        cy.wait(3000);
        cy.xpath(allocableItemReviewGridLocators.SELECT_STATE_SOURCE).click();
        cy.wait(3000);
        cy.xpath(allocableItemReviewGridLocators.READY_FOR_TRACK_REVIEW_BUTTON).click();
        cy.wait(2000);
        cy.xpath(allocableItemReviewGridLocators.READY_FOR_TRACK_OK_BUTTON).click();
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible');

    }


}
export default AllocableItemReviewGridFunctions;