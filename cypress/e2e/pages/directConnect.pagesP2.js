import DirectConnectLocators from "../locator files/directConnect.locatorsP2"
import DataGenerator from "../../support/faker_test";

var directConnectLocators = new DirectConnectLocators

var testdata;

before(()=>{
  cy.writeFile("cypress/fixtures/testdata.json",
  DataGenerator.generatetestData()
  );
  cy.readFile("cypress/fixtures/testdata.json").then((data)=>{
    testdata=data;
  });
});

class DirectConnectFunctions{
    ClickOnDirectConnectTab(){
        cy.contains(' Direct Connect ').click()
    }
    ClickOnEditButton(){
        cy.wait(2000)
        cy.xpath(directConnectLocators.EDIT_PROFILE_BUTTON).eq(1).click()  
    }
    ClickOnTaxonomyTemplatesTab(){
        cy.xpath(directConnectLocators.ALLOCABLE_ITEM_TEMPLATES_TAB).click()
    }
    ClickOnAddtemplateButton(){
        cy.contains('Add Template').click()
    }
    TypeProfileName(){
        cy.xpath(directConnectLocators.NAME_FIELD).type(testdata.firstName)
    }
    ClickOnSaveButton(){
        cy.contains(' Save ').click()
    }
    ClickOnTrackTaxonomyTab(){
        cy.getTestData().then((data)=>{
        cy.get(data['TRACK_TAXONOMY_DROPDOWN']).click()
        })
    }
    ClickOnTrackTaxonomyDropdown(){
        cy.getTestData().then((data)=>{
        cy.get(data['TRACK_TAXONOMY_DROPDOWN']).click()
        })
    }
    ChooseExistingTrackTaxonomy(){
        cy.get(directConnectLocators.EXISTING_TRACK_TAXONOMY).click({ multiple: true })
    }
    ClickOnTaxonomyTemplateNameDropdown(){
        cy.get(directConnectLocators.TAXONONOMY_TEMPLATE_NAME).click({force:true})
    }
    VerifyTemplateName(){
        cy.getTestData().then((data)=>{
        cy.get(directConnectLocators.VERIFY_TEMPLATE_NAME).should('contain',data['VerifyTemplateName'])
        })
    }
    ClickOnDownloadImprtTemplateBtn(){
        cy.contains('Download Import Template').click({force:true})
    }
    ClickOnImportTemplateBtn(){
        cy.get(directConnectLocators.IMPORT_TEMPLATE_BUTTON).click()
    }
    ClickOnUploadBtn(){
        cy.xpath(directConnectLocators.UPLOAD_BUTTON).click({force: true}).attachFile('TaxonomyMapping-ImportTemplate QA Updated.xlsx',{subjectType:'drag-n-drop'})
    }
    VerifyScheduleItemName(){
        cy.xpath(directConnectLocators.SCHEDULE_ITEM_NAME).should('contain','ORDINARY BUSINESS INCOME (LOSS)')
        cy.xpath(directConnectLocators.SCHEDULE_ITEM_NAME1).should('contain','DOMESTIC QUALIFIED DIVIDEND INCOME')
    }
    ClickOnTrackTaxonomyIfNeagtiveTab(){
        cy.get(directConnectLocators.TRACK_TAXONOMY_IF_NEGATIVE).click()
    }
    ClickOnTrackTaxonomyIfNeagtiveDD(){
        cy.get(directConnectLocators.TRACK_TAXONOMY_IF_NEGATIVE_DD).click()
    }
    ClickOnSaveAsButton(){
        cy.contains('Save as').click({force:true})
    }
    ClickOnSaveButtonCopy(){
        cy.xpath(directConnectLocators.SAVE_BUTTON).click({ multiple: true })
    }
    VerifyCopyTemplateName(){
        cy.getTestData().then((data)=>{
        cy.get(directConnectLocators.TAXONONOMY_TEMPLATE_NAME).click()
        cy.get(directConnectLocators.VERIFY_TEMPLATE_NAME).should('contain',data['VerifyCopyTemplateName'])
        })
    }
    ClickOnAddExpectedDocButton(){
        cy.get(directConnectLocators.ADD_EXPECTED_DOCUMENT_BUTTON).click({force:true})
    }
    ClickOnDCToggleBtn(){
        cy.xpath(directConnectLocators.DIRECT_CONNECT_TOGGLE_BTN).click()
        cy.wait(3000);
    }
    TypeTaxYear(){
        cy.get(directConnectLocators.TAX_YEAR_FIELD).type('2021',{force:true})
    }
    ClickOnScheduleDropDown(){
        cy.xpath(directConnectLocators.SCHEDULE_DROPDOWN).click()
    }
    SelectFederalK1(){
        cy.get(directConnectLocators.FEDERAL_K1).contains(' Federal K-1').click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    ClickOnTRACKProfileDropDown(){
        cy.xpath(directConnectLocators.TRACK_PROFILE).click()
    }
    SelectTRACKProfile(){
        cy.getTestData().then((data)=>{
        cy.get(directConnectLocators.FEDERAL_K1).contains(data['SelectTRACKProfile']).click()
        })
    }
    ClickOnTaxonomyTemplateDropDown(){
        cy.xpath(directConnectLocators.TAXONOMY_TEMPLATE_MAPPING).click()
    }
    SelectTaxonomyTemplate(){
        cy.get(directConnectLocators.FEDERAL_K1).contains(' 2021 TESTING').click()
    }
    ClickOnInvestorDropDown(){
        cy.xpath(directConnectLocators.INVESTOR_FIELD).click()
    }
    SelectInvestor(){
        cy.get(directConnectLocators.FEDERAL_K1).contains(' GEORGE BLUTH FUND').click()
    }
    ClickOnInvestmentDropDown(){
        cy.xpath(directConnectLocators.INVESTMENT_FIELD).click()
    }
    SelectInvestment(){
        cy.get(directConnectLocators.FEDERAL_K1).contains(' GEORGE BLUTH FUND').click()
    }
    ClickOnInvestemntRadioBtn(){
        cy.get(directConnectLocators.INVESTMENT_RADIO_BTN).contains(' Investment ').click()
    }
    ClickOnIsForeignOrDomDD(){
        cy.xpath(directConnectLocators.IS_FOREIGN_OR_DOMESTIC).click()
    }
    SelectDomestic(){
        cy.get(directConnectLocators.FEDERAL_K1).contains(' Domestic').click()
    }
    ClickOnCategoryDropDown(){
        cy.xpath(directConnectLocators.CATEGORY_FIELD).click()
    }
    SelectActual(){
        cy.get(directConnectLocators.FEDERAL_K1).contains(' Actual').click()
    }
    ClickOnSaveButton()
    {
        cy.xpath(directConnectLocators.SAVE_BUTTON).click()
        // cy.intercept('https://dataflow-qa.api.pwcinternal.com/v2/document-center/expected-documents')
        //     .as('query')
        // cy.wait('@query').its('response.statusCode').should('eq', 200);
        //     cy.wait(2000)
    }
    SearchTaxYear(){
        cy.get(directConnectLocators.EXPECTED_DOCUMENT_PAGE).click()
        cy.get(directConnectLocators.INVESTOR_SEARCH_FIELD).eq(0).click()
        cy.xpath(directConnectLocators.RESET_GRID_BUTTON).click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
        cy.get(directConnectLocators.SEARCH_TAX_YEAR).eq(0).type('2021')
    }
    TypeInvestorNameToSearch(){
        cy.get(directConnectLocators.INVESTOR_SEARCH_FIELD).eq(1).click()
        cy.get(directConnectLocators.TYPE_INVESTOR_NAME).eq(0).type('GEORGE BLUTH FUND')
    }
    VerifyInvestorName(){
        cy.get(directConnectLocators.VERIFY_INVESTOR_NAME).should('contain','GEORGE BLUTH FUND')
    }
    VerifyInvestmentName(){
        cy.get(directConnectLocators.VERIFY_INVESTOR_NAME).should('contain','GEORGE BLUTH FUND')
    }
}
export default DirectConnectFunctions;