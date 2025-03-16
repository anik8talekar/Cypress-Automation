import AllocableItemTemplateLocators from "../locator files/AllocableItemTemplate.locator";
import ExpectedDocumentsEditsLocators from "../locator files/ExpectedDocumentsEdits.locator";
import DirectConnectLocators from "../locator files/DirectConnect.locator";
import DataGenerator from "../../support/faker_test";

var allocableItemTemplateLocators = new AllocableItemTemplateLocators();
var directConnectLocators = new DirectConnectLocators();
var expectedDocumentsEditsLocators = new ExpectedDocumentsEditsLocators();
var testdata;

before(() => {
    cy.writeFile("cypress/fixtures/testdata.json",
        DataGenerator.generatetestData()
    );
    cy.readFile("cypress/fixtures/testdata.json").then((data) => {
        testdata = data;
    });
});

class AllocableItemTemplateFunctions {

    openTheApp() {
        cy.visit(Cypress.env('baseURL'))
    }

    openEngagement() {
        cy.xpath(directConnectLocators.SEARCH).type('Dashboard Testing')
        cy.xpath(directConnectLocators.HIGHLIGHT).click();
    }

    GoToAllocableItemTemplate() {
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_ITEM_TEMPLATE).click();
    }

    AddAllocableItemTemplate() {
        cy.wait(8000);
        cy.xpath(expectedDocumentsEditsLocators.PAGE_LOADER, { timeout: 60000 }).should('not.be.visible');
        cy.xpath(allocableItemTemplateLocators.ADD_ALLOCABLE_TEMPLATE).click();
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TEMPLATE_NAME).type(testdata.firstName);
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TEMPLATE_DESCRIPTION).type('This template is for testing only');
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TAX_YEAR_DROPDOWN).click();
        cy.xpath(allocableItemTemplateLocators.SELECT_ALLOCABLE_TAX_YEAR).click();
        cy.xpath(allocableItemTemplateLocators.SAVE_BUTTON).click();
        cy.wait(3000);
    }

    EditAllocableItemTemplate() {
        cy.wait(2000);
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_ITEM_TEMPLATE_DROPDOWN).click();
        cy.xpath(allocableItemTemplateLocators.EDIT_ALLOCABLE_ITEM_TEMPLATE).click();
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TEMPLATE_NAME).type('{selectall}{backspace}');
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TEMPLATE_NAME).type(testdata.lastName);
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TEMPLATE_DESCRIPTION).type('{selectall}{backspace}');
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TEMPLATE_DESCRIPTION).type('This is the edited template');
        cy.xpath(allocableItemTemplateLocators.SAVE_BUTTON).click();
        cy.wait(3000);
    }

    VerifyStandardDescription() {
        cy.wait(3000);
        cy.xpath(allocableItemTemplateLocators.VERIFY_DEFAULT_STANDARD_DESCRIPTION_MAPPING).should('exist');
        cy.xpath(allocableItemTemplateLocators.VERIFY_DEFAULT_STANDARD_DESCRIPTION_NEGATIVE_MAPPING).should('exist');
    }

    EditAllocableItemTemplate2() {
        cy.wait(2000);
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_ITEM_TEMPLATE_DROPDOWN).click();
        cy.xpath(allocableItemTemplateLocators.EDIT_ALLOCABLE_ITEM_TEMPLATE).click();
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TEMPLATE_NAME).type('{selectall}{backspace}');
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TEMPLATE_NAME).type(testdata.lastName);
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TEMPLATE_DESCRIPTION).type('{selectall}{backspace}');
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TEMPLATE_DESCRIPTION).type('This is the edited template 2');
        cy.xpath(allocableItemTemplateLocators.SAVE_BUTTON).click();
        cy.wait(3000);
    }

    AddAllocableItemTemplate2() {
        cy.wait(8000);
        cy.xpath(allocableItemTemplateLocators.ADD_ALLOCABLE_TEMPLATE).click();
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TEMPLATE_NAME).type(testdata.firstName);
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TEMPLATE_DESCRIPTION).type('This template is for testing only');
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TAX_YEAR_DROPDOWN).click();
        cy.xpath(allocableItemTemplateLocators.SELECT_ALLOCABLE_TAX_YEAR).click();
        cy.xpath(allocableItemTemplateLocators.SAVE_BUTTON).click();
        cy.wait(3000);
    }

    MapAllocableItemTemplate() {
        cy.wait(2000);
        cy.xpath(allocableItemTemplateLocators.STANDARD_DESCRIPTION_MAPPING).click({force:true});
        cy.wait(5000);
        cy.xpath(allocableItemTemplateLocators.STANDARD_DESCRIPTION_MAPPING_TYPE).focused().type('{selectall}{backspace}');
        cy.xpath(allocableItemTemplateLocators.STANDARD_DESCRIPTION_MAPPING_TYPE).focused().type('Line 1 | Incentive Compensation', {force:true});
        cy.xpath(allocableItemTemplateLocators.SELECT_STANDARD_DESCRIPTION).click();
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_PAGE_CLICK).click();
        cy.xpath(allocableItemTemplateLocators.STANDARD_DESCRIPTION_NEGATIVE_MAPPING).click({force:true});
        cy.xpath(allocableItemTemplateLocators.STANDARD_DESCRIPTION_NEGATIVE_MAPPING_TYPE).focused().type('{selectall}{backspace}');
        cy.xpath(allocableItemTemplateLocators.STANDARD_DESCRIPTION_NEGATIVE_MAPPING_TYPE).focused().type('Line 1 | Warranty Expense', {force:true});
        cy.xpath(allocableItemTemplateLocators.SELECT_STANDARD_DESCRIPTION_NEGATIVE).click();
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_PAGE_CLICK).click();
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TEMPLATE_STATE).click();
        cy.wait(2000);
        cy.xpath(allocableItemTemplateLocators.FEDERAL_STANDARD_DESCRIPTION_MAPPING).click({force:true});
        cy.xpath(allocableItemTemplateLocators.FEDERAL_STANDARD_DESCRIPTION_MAPPING_TYPE).focused().type('{selectall}{backspace}');
        cy.xpath(allocableItemTemplateLocators.FEDERAL_STANDARD_DESCRIPTION_MAPPING_TYPE).focused().type('Line 1 | Abandonments', {force:true});
        cy.xpath(allocableItemTemplateLocators.SELECT_FEDERAL_STANDARD_DESCRIPTION).click();
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_PAGE_CLICK).click();
        cy.xpath(allocableItemTemplateLocators.FEDERAL_STANDARD_DESCRIPTION_NEGATIVE_MAPPING).click({force:true});
        cy.xpath(allocableItemTemplateLocators.FEDERAL_STANDARD_DESCRIPTION_NEGATIVE_MAPPING_TYPE).focused().type('{selectall}{backspace}');
        cy.xpath(allocableItemTemplateLocators.FEDERAL_STANDARD_DESCRIPTION_NEGATIVE_MAPPING_TYPE).focused().type('Line 1 | Lobbying Expenses', {force:true});
        cy.xpath(allocableItemTemplateLocators.SELECT_FEDERAL_STANDARD_DESCRIPTION_NEGATIVE).click();   
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_PAGE_CLICK).click();
        cy.wait(2000);
        cy.xpath(allocableItemTemplateLocators.CLIPBOARD_ICON).should('be.visible');
        cy.xpath(allocableItemTemplateLocators.CLIPBOARD_ICON_2).should('be.visible');
        cy.wait(2000);
        cy.xpath(allocableItemTemplateLocators.SAVE_PROFILE).click();
    }

    WaitForAPICall(){
        cy.intercept('https://dataflow-qa.api.pwcinternal.com/v1/businessentity').as('query')
        cy.wait('@query',{timeout:180000}).its('response.statusCode').should('eq', 200);
        cy.wait(2000)
      }

    MapAllocableItemTemplate2() {
        cy.wait(5000);
        cy.xpath(allocableItemTemplateLocators.TRACK_TAXONOMY_MAPPING).click({force:true});
        cy.wait(5000);
        cy.xpath(allocableItemTemplateLocators.TRACK_TAXONOMY_MAPPING_TYPE).focused().type('{selectall}{backspace}');
        cy.xpath(allocableItemTemplateLocators.TRACK_TAXONOMY_MAPPING_TYPE).focused().type('401(k) Contributions | Line 1 | 401(k) Contributions | K1.L01.401(k) Contributions', {force:true});
        cy.xpath(allocableItemTemplateLocators.SELECT_TRACK_TAXONOMY).click();
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_PAGE_CLICK).click();
        cy.xpath(allocableItemTemplateLocators.NEGATIVE_TRACK_TAXONOMY_MAPPING).click({force:true});
        cy.xpath(allocableItemTemplateLocators.NEGATIVE_TRACK_TAXONOMY_MAPPING_TYPE).focused().type('{selectall}{backspace}');
        cy.xpath(allocableItemTemplateLocators.NEGATIVE_TRACK_TAXONOMY_MAPPING_TYPE).focused().type('401(k) Contributions | Line 1 | 401(k) Contributions | K1.L01.401(k) Contributions', {force:true});
        cy.xpath(allocableItemTemplateLocators.SELECT_NEGATIVE_TRACK_TAXONOMY).click();
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_PAGE_CLICK).click();
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_TEMPLATE_STATE).click();
        cy.wait(2000);
        cy.xpath(allocableItemTemplateLocators.FEDERAL_TRACK_TAXONOMY_MAPPING).click({force:true});
        cy.xpath(allocableItemTemplateLocators.FEDERAL_TRACK_TAXONOMY_MAPPING_TYPE).focused().type('{selectall}{backspace}');
        cy.xpath(allocableItemTemplateLocators.FEDERAL_TRACK_TAXONOMY_MAPPING_TYPE).focused().type('401(k) Contributions | Line 1 | 401(k) Contributions | K1.L01.401(k) Contributions', {force:true});
        cy.xpath(allocableItemTemplateLocators.SELECT_FEDERAL_TRACK_TAXONOMY).click();
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_PAGE_CLICK).click();
        cy.xpath(allocableItemTemplateLocators.FEDERAL_TRACK_TAXONOMY_NEGATIVE_MAPPING).click({force:true});
        cy.xpath(allocableItemTemplateLocators.FEDERAL_TRACK_TAXONOMY_NEGATIVE_MAPPING_TYPE).focused().type('{selectall}{backspace}');
        cy.xpath(allocableItemTemplateLocators.FEDERAL_TRACK_TAXONOMY_NEGATIVE_MAPPING_TYPE).focused().type('401(k) Contributions | Line 1 | 401(k) Contributions | K1.L01.401(k) Contributions', {force:true});
        cy.xpath(allocableItemTemplateLocators.SELECT_FEDERAL_TRACK_TAXONOMY_NEGATIVE).click();
        cy.xpath(allocableItemTemplateLocators.ALLOCABLE_PAGE_CLICK).click();
        cy.wait(2000);
        cy.xpath(allocableItemTemplateLocators.SAVE_PROFILE).click();
        cy.wait(50000);

    }


}
export default AllocableItemTemplateFunctions;