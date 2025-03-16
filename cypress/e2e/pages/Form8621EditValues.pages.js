import Form8621EditLocators from "../locator files/Form8621EditValues.locators";
import DirectConnectLocators from "../locator files/DirectConnect.locator";
import DataGenerator from "../../support/faker_test";


var form8621EditLocators = new Form8621EditLocators
var directConnectLocators = new DirectConnectLocators();
var testdata;

before(() => {
    cy.writeFile("cypress/fixtures/testdata.json",
        DataGenerator.generatetestData()
    );
    cy.readFile("cypress/fixtures/testdata.json").then((data) => {
        testdata = data;
    });
});

class Form8621EditFunctions {

    openTheApp() {
        cy.visit(Cypress.env('baseURL'));
    }

    openEngagement() {
        cy.xpath(directConnectLocators.SEARCH).type('DATAFLOW_QA_AUTOMATION')
        cy.xpath(directConnectLocators.HIGHLIGHT).click();
    }

    OpenDocumentCenter() {
        cy.xpath(form8621EditLocators.DOCUMENTCENTER).click();
        cy.wait(5000);
    }

    OpenReviewPage() {
        cy.xpath(form8621EditLocators.TAXYEARDROPDOWN).click();
        cy.wait(10000);
        cy.xpath(form8621EditLocators.TAXYEAR).click();
        cy.xpath(form8621EditLocators.SCHEDULEDROPDOWN).click();
        cy.wait(10000);
        cy.xpath(form8621EditLocators.SCHEDULENAME_1).click();
        cy.xpath(form8621EditLocators.RESET_GRID_BUTTON).click()
        cy.wait(3000)
        cy.xpath(form8621EditLocators.SEARCH_FILE_NAME).type('2022 K3 - AMERICAS_1_45.pdf')
        cy.wait(5000)
        cy.xpath(form8621EditLocators.REVIEWICON).click({ force: true });
        cy.xpath(form8621EditLocators.PARTVII).click();
    }

    EditValuesOfPartVII() {
        cy.xpath(form8621EditLocators.CHECKBOX_1).scrollIntoView();
        cy.xpath(form8621EditLocators.CLICKCHECKBOX_1).click({ force: true });
        cy.xpath(form8621EditLocators.CLICKCHECKBOX_2).scrollIntoView().click({ force: true });
        cy.xpath(form8621EditLocators.CLICKCHECKBOX_2).click({ force: true });
        cy.wait(3000)
        cy.xpath(form8621EditLocators.CLICKCHECKBOX_2).type('{selectall}').type('{backspace}').type('1234567890');
        cy.xpath(form8621EditLocators.PAGECLICK).click();
        cy.xpath(form8621EditLocators.EDIT_TEXT_VALUE_1).scrollIntoView();
        cy.xpath(form8621EditLocators.EDIT_TEXT_VALUE_1).click({ force: true });
        cy.wait(3000);
        cy.xpath(form8621EditLocators.EDIT_TEXT_VALUE_2).clear().type(testdata.firstName);
        cy.xpath(form8621EditLocators.PAGECLICK).click();
    }

    EditDateValues() {
        cy.wait(2000);
        cy.xpath(form8621EditLocators.EDIT_K1_DATE_VALUE_1).clear().type('8/21/2024');
        cy.wait(2000)
        cy.xpath(form8621EditLocators.EDIT_K1_DATE_VALUE_2).clear().type('8/21/2025');

    }

    OpenK1ReviewPage() {
        cy.xpath(form8621EditLocators.TAXYEARDROPDOWN).click();
        cy.wait(7000);
        cy.xpath(form8621EditLocators.TAXYEAR).click();
        cy.xpath(form8621EditLocators.SEARCH_FILE_NAME).type('{selectall}').type('{backspace}')
        cy.wait(5000)
        cy.xpath(form8621EditLocators.SCHEDULEDROPDOWN).click();
        cy.wait(7000);
        cy.xpath(form8621EditLocators.SCHEDULENAME_2).click();
        cy.xpath(form8621EditLocators.K1_DOCUMENT_REVIEW_ICON).click({ force: true });
        cy.xpath(form8621EditLocators.VIEWBYDROPDOWN).click();
        cy.xpath(form8621EditLocators.SELECT_FOOTNOTES).click();

    }

    ClickOnK1Footnotes() {
        cy.xpath(form8621EditLocators.FOOTNOTES_PREVIEW_ICON).click();
    }

    EditValuesOfK1FootNotes() {
        cy.xpath(form8621EditLocators.CHECKBOX_3).click();
        cy.xpath(form8621EditLocators.PFICSECTION).scrollIntoView();
        cy.xpath(form8621EditLocators.SECTION1291_CHECKBOX).click();
        cy.xpath(form8621EditLocators.PFIC_INFORMATION).scrollIntoView();
        cy.get(form8621EditLocators.EDIT_ADDRESS_TEXT_K1).clear().type("PwC Office, Old Street, Australia");

    }

    EditNumericalValues() {
        cy.xpath(form8621EditLocators.K1_NUMERICAL_VALUE_1).scrollIntoView();
        cy.xpath(form8621EditLocators.EDIT_K1_NUMERICAL_VALUE_1).type('{selectall}').type('{backspace}');
        cy.xpath(form8621EditLocators.EDIT_K1_NUMERICAL_VALUE_1).type("5853121478");
    }

}
export default Form8621EditFunctions;

