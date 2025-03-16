import SSIGridLocators from "../locator files/SSIGrid.locators";
import EngagementSetupLocators from "../locator files/EngagementSetup.locators";
import ProcessingLocators from "../locator files/Processing.locator";

var engagementSetupLocators = new EngagementSetupLocators
var ssiGridLocators = new SSIGridLocators
var processingLocators = new ProcessingLocators

class SSIGridFunctions {

    openTheApp() {
        cy.visit(Cypress.env('baseURL'))
    }

    openEngagement() {
        cy.xpath(engagementSetupLocators.EXISTING_ENGAGEMENT).click();
    }
    OpenUploadFiles() {
        cy.wait(5000);
        cy.xpath(ssiGridLocators.UPLOADFILES).click({ force: true });
    }

    uploadSingleFile() {
        cy.xpath(ssiGridLocators.UPLOAD_BUTTON).click();
        cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/14-STANLEY SITWELL 1 7.pdf', { force: true });
        cy.wait(3000);
        cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', '14-STANLEY SITWELL 1 7.pdf');
        cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
        cy.reload();
    }

    uploadSingleFile2() {
        cy.xpath(ssiGridLocators.UPLOAD_BUTTON).click();
        cy.xpath(processingLocators.UPLOAD_FILES_AREA).selectFile('cypress/fixtures/2023-Federal K-3-CP VI RAPTOR, L.P.-PWC ENTITY.pdf', { force: true });
        cy.wait(3000);
        cy.xpath(processingLocators.UPLOADED_FILE_NAME).should('have.text', '2023-Federal K-3-CP VI RAPTOR, L.P.-PWC ENTITY.pdf');
        cy.xpath(processingLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click();
        cy.reload();
    }

    ClickOnAdmin() {
        cy.xpath(ssiGridLocators.ADMIN).click();
        cy.xpath(ssiGridLocators.ENGAGEMENTSETTINGS).click();
    }

    ClickOnDirectConnect() {
        cy.xpath(ssiGridLocators.DIRECTCONNECT).click();
    }

    AddDirectConnectProfile() {
        cy.xpath(ssiGridLocators.ADDPROFILE).click();
        cy.xpath(ssiGridLocators.CLIENTNAME).click();
        cy.wait(3000);
        cy.xpath(ssiGridLocators.SELECTCLIENTNAME).click();
        cy.xpath(ssiGridLocators.DIRECTCONNECTTAXYEARDROPDOWN).click();
        cy.wait(2000);
        cy.xpath(ssiGridLocators.SELECTTAXYEAR).click();
        cy.xpath(ssiGridLocators.DATABASENAME).click();
        cy.xpath(ssiGridLocators.SELECTDATABASENAME).click();
        cy.wait(5000)
        cy.xpath(ssiGridLocators.DIRECTCONNECTSAVEBUTTON).click();
        // cy.wait(8000)
        cy.xpath(ssiGridLocators.CLOSEBUTTON).click();
        cy.reload();
    }

    AddDirectConnectProfile2() {
        cy.xpath(ssiGridLocators.ADDPROFILE).click();
        cy.xpath(ssiGridLocators.CLIENTNAME).click();
        cy.wait(3000);
        cy.xpath(ssiGridLocators.SELECTCLIENTNAME).click();
        cy.xpath(ssiGridLocators.DIRECTCONNECTTAXYEARDROPDOWN).click();
        cy.wait(2000);
        cy.xpath(ssiGridLocators.SELECTTAXYEAR).click();
        cy.xpath(ssiGridLocators.DATABASENAME).click();
        cy.xpath(ssiGridLocators.SELECTDATABASENAME_2).click();
        cy.xpath(ssiGridLocators.STANDARD_DESCRIPTION_CHECKBOX).click();
        cy.wait(8000)
        cy.xpath(ssiGridLocators.DIRECTCONNECTSAVEBUTTON).click();
        // cy.wait(8000)
        // cy.xpath(ssiGridLocators.CLOSEBUTTON).click();
    }


    EditProfile() {
        cy.wait(10000);
        cy.reload();
        cy.xpath(ssiGridLocators.EDITPROFILE).click({ force: true });
        cy.wait(2000)
    }

    EditProfile2() {
        cy.wait(10000);
        cy.reload();
        cy.xpath(ssiGridLocators.EDITPROFILE_2).click({ force: true });
        cy.wait(2000)
    }

    CreateAndImportTrackFTE() {
        cy.xpath(ssiGridLocators.CREATEBEFROMTRACK).click();
        cy.xpath(ssiGridLocators.IMPORTFTE).eq(0).click();
        cy.xpath(ssiGridLocators.IMPORTBUTTON).click();
        // cy.xpath(ssiGridLocators.SAVEANDCLOSE).click();
    }

    AddTaxonomyTemplate() {
        cy.xpath(ssiGridLocators.EDITPROFILE).click({ force: true });
        cy.xpath(ssiGridLocators.TAXONOMYTEMPLATES).click();
        cy.wait(2000);
        cy.xpath(ssiGridLocators.ADDTAXONOMYTEMPLATE).click();
        cy.xpath(ssiGridLocators.TEMPLATENAME).type('Nilesh Test 10');
        cy.xpath(ssiGridLocators.TEMPLATEDESCRIPTION).type('This is for testing purpose');
        cy.xpath(ssiGridLocators.TAXONOMYTAXYEARDROPDOWN).click();
        cy.xpath(ssiGridLocators.TAXONOMYTEMPLATESAVEBUTTON).click();
        cy.xpath(ssiGridLocators.CLOSESLIDEOUT).click();
        cy.xpath(ssiGridLocators.TRACKTAXONOMYDROPDOWN_1).dblclick();
        cy.xpath(ssiGridLocators.SELECTTRACKTAXONOMY_1).click();
        cy.xpath(ssiGridLocators.TRACKTAXONOMYDROPDOWN_2).dblclick();
        cy.xpath(ssiGridLocators.SELECTTRACKTAXONOMY_2).click();
        cy.xpath(ssiGridLocators.STATE).click();
        cy.xpath(ssiGridLocators.STATEADJUSTMENT).click();
        cy.wait(5000);
        cy.xpath(ssiGridLocators.STATETRACKTAXONOMYDROPDOWN_1).dblclick();
        cy.xpath(ssiGridLocators.SELECTSTATETRACKTAXONOMY_1).click();
        cy.xpath(ssiGridLocators.STATETRACKTAXONOMYDROPDOWN_2).dblclick();
        cy.xpath(ssiGridLocators.SELECTSTATETRACKTAXONOMY_2).click();
        cy.xpath(ssiGridLocators.PAGECLICK).click();
        cy.xpath(ssiGridLocators.SAVEANDCLOSE).click();

    }

    AddExpectedDocument() {
        cy.wait(5000);
        cy.xpath(ssiGridLocators.DOCUMENT_CENTER).click();
        cy.xpath(ssiGridLocators.EXPECTED_DOCUMENTS).click();
        cy.xpath(ssiGridLocators.ADD_EXPECTED_DOCUMENT).click();
        cy.xpath(ssiGridLocators.EXPECTED_DOCUMENT_TAX_YEAR).click().type('2023');
        cy.xpath(ssiGridLocators.EXPECTED_DOCUMENT_SCHEDULE_NAME).click();
        cy.xpath(ssiGridLocators.SELECT_EXPECTED_DOCUMENT_SCHEDULE_NAME).click();
        cy.xpath(ssiGridLocators.DIRECT_CONNECT_TOGGLE_BUTTON).click();
        cy.xpath(ssiGridLocators.EXPECTED_DOCUMENT_TRACKPROFILE_DROPDOWN).click();
        cy.xpath(ssiGridLocators.SELECT_EXPECTED_DOCUMENT_TRACKPROFILE).click();
        cy.xpath(ssiGridLocators.TAXONOMY_TEMPLATE_MAPPING_DROPDOWN).click();
        cy.xpath(ssiGridLocators.SELECT_TAXONOMY_TEMPLATE_MAPPING).click();
        cy.xpath(ssiGridLocators.EXPECTED_DOCUMENT_INVESTOR_DROPDOWN).click();
        cy.xpath(ssiGridLocators.SELECT_EXPECTED_DOCUMENT_INVESTOR).click();
        cy.xpath(ssiGridLocators.EXPECTED_DOCUMENT_INVESTMENT_DROPDOWN).click();
        cy.xpath(ssiGridLocators.SELECT_EXPECTED_DOCUMENT_INVESTMENT).click();
        cy.xpath(ssiGridLocators.INVESTOR_RADIO_BUTTON).click();
        cy.xpath(ssiGridLocators.EXPECTED_DOCUMENT_DOMESTIC_DROPDOWN).click();
        cy.xpath(ssiGridLocators.SELECT_EXPECTED_DOCUMENT_DOMESTIC).click();
        cy.xpath(ssiGridLocators.EXPECTED_DOCUMENT_CATEGORY_DROPDOWN).click();
        cy.xpath(ssiGridLocators.SELECT_EXPECTED_DOCUMENT_CATEGORY).click();
        cy.xpath(ssiGridLocators.EXPECTED_DOCUMENT_SAVE_BUTTON).click();

    }

    CustomTaxonomyMapping() {
        cy.wait(10000);
        cy.xpath(ssiGridLocators.DOCUMENT_CENTER).click();
        cy.wait(10000);
        cy.xpath(ssiGridLocators.SEARCH_FILE_NAME).click();
        cy.wait(8000);
        cy.xpath(ssiGridLocators.EXPECTED_DOCUMENTS).click();
        cy.wait(20000);
        cy.xpath(ssiGridLocators.EXECUTIVE_REVIEW).click();
        cy.wait(20000);
        cy.xpath(ssiGridLocators.DOCUMENTS_TAB).click();
        cy.wait(15000);
        cy.xpath(ssiGridLocators.MATCH_ICON).click({force: true});

    }

    OpenDocumentCenter() {
        cy.xpath(ssiGridLocators.DOCUMENT_CENTER).click();
        cy.wait(5000);
    }

    OpenK1Pdf() {
        cy.xpath(ssiGridLocators.DOCUMENTS_TAX_YEAR_DROPDOWN).click();
        cy.xpath(ssiGridLocators.SELECT_DOCUMENTS_TAX_YEAR).click();
        cy.xpath(ssiGridLocators.DOCUMENTS_SCHEDULE_DROPDOWN).click();
        cy.xpath(ssiGridLocators.SELECT_DOCUMENTS_SCHEDULE_NAME_K1).click();
        cy.wait(4000);
        cy.xpath(ssiGridLocators.FED_K1_REVIEW_ICON).click({force: true});
        cy.xpath(ssiGridLocators.FED_K1_NEW_TAB_BUTTON).click();
        cy.wait(4000);
    }

    OpenK3Pdf() {
        cy.xpath(ssiGridLocators.DOCUMENTS_TAX_YEAR_DROPDOWN).click();
        cy.xpath(ssiGridLocators.SELECT_DOCUMENTS_TAX_YEAR_2).click();
        cy.xpath(ssiGridLocators.DOCUMENTS_SCHEDULE_DROPDOWN).click();
        cy.xpath(ssiGridLocators.SELECT_DOCUMENTS_SCHEDULE_NAME_K3).click();
        cy.wait(4000);
        cy.xpath(ssiGridLocators.FED_K3_REVIEW_ICON).click({force: true});
        cy.xpath(ssiGridLocators.FED_K3_NEW_TAB_BUTTON).click();
    }

}
export default SSIGridFunctions;