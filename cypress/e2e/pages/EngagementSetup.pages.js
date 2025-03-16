
import EngagementSetupLocators from "../locator files/EngagementSetup.locators";
import DataGenerator from "../../support/faker_test";

var testdata;

before(()=>{
  cy.writeFile("cypress/fixtures/testdata.json",
  DataGenerator.generatetestData()
  );
  cy.readFile("cypress/fixtures/testdata.json").then((data)=>{
    testdata=data;
  });
});

var engagementSetupLocators = new EngagementSetupLocators

class EnagegementSetupFunctions{
    openTheApp(){
      cy.visit(Cypress.env('baseURL'))     
     }
     openEngagement(){
        cy.xpath(engagementSetupLocators.EXISTING_ENGAGEMENT).click()
     }
     ClickOnBusinessEntitiesSection(){
       cy.xpath(engagementSetupLocators.BUSINESS_ENTITIES).click()
       cy.wait(3000)
     }
     ClickOnAddBusinessEntity(){
      cy.xpath(engagementSetupLocators.ADD_BUSINESS_ENTITIES).contains(' Add Business Entity ').click()
     }
     TypePrimaryID(){
      cy.get(engagementSetupLocators.PRIMARY_ID).type(testdata.firstName)
     }
     TypeName1(){
      cy.get(engagementSetupLocators.NAME1).type(testdata.firstName)
     }
     TypeName2(){
      cy.get(engagementSetupLocators.NAME2).type(testdata.firstName)
     }
     TypeTaxIdentifier(){
      cy.get(engagementSetupLocators.TAX_IDENTIFIER).type(testdata.lastName)
     }
     ClickOnIsForeignOrDomestic(){
      cy.get(engagementSetupLocators.IS_FOREIGN_OR_DOMESTIC).click() 
     }
     ClickOnDomestic(){
      cy.get(engagementSetupLocators.DOMESTIC).click()
     } 
     ClickOnSaveButtonBE(){
      cy.xpath(engagementSetupLocators.SAVE_BTN_BE).click()
     } 
     VerifyNewlyCreatedBe(){
      cy.get(engagementSetupLocators.SEARCH_PRIMARY_ID_BE).type('Swar2104')
      cy.get(engagementSetupLocators.VERIFY_BE).should('contain','Swar2104')
     }
     ClickOnImportAndExportDataTab(){
      cy.contains(' Import & Export Data ').click()
     }
     ClickOnBusinessEntitiesTab(){
    //  cy.xpath(engagementSetupLocators.BUSINESS_ENTITIES_TAB).click()
     }
     ClickOnUploadFilesArea(){
      cy.get(engagementSetupLocators.FILE_UPLOAD).click({force: true}).attachFile('2021 DataFlow_BusEnt-QA.xlsx',{subjectType:'drag-n-drop'})
      cy.wait(3000)
     }
     ClickOnImportCloseButton(){
      cy.get(engagementSetupLocators.CLOSE_UPLOAD_FILES_SLIDEOUT).click({multiple:true})
     }
     ClickOnImportStatusTab(){
      cy.xpath(engagementSetupLocators.IMPORT_STATUS_TAB).click({multiple:true})
     }
     VerifySuccessfulImportStatus(){
      cy.get(engagementSetupLocators.SUCCESSFUL_IMPORT_STATUS).should('contain','Successful')
     }
     ClickOnDocumentCenterTab(){
      cy.get(engagementSetupLocators.DOCUMENT_CENTER_TAB).eq(1).click()
     }
     ClickOnDocuments(){
      cy.contains(' Documents ').click()
     }
  ClickOnMatchButton() {
    cy.xpath(engagementSetupLocators.SCHEDULEDROPDOWN).click()
    cy.xpath(engagementSetupLocators.SCHEDULENAME_K1).click()
    cy.get(engagementSetupLocators.MATCH_BUTTON).eq(1).click({ force: true })
  }
     ClickOnNewButton(){
      cy.xpath(engagementSetupLocators.NEW_BUTTON_REVIEW_SCREEN).eq(1).click()
     }
     ClickOnInvestmentNameDropDown(){
      cy.get(engagementSetupLocators.INVESTMENT_NAME_DROPDOWN).eq(2).click()
      cy.get(engagementSetupLocators.SWARAJ_INVESTMENT_NAME).click() 
      cy.get(engagementSetupLocators.INVESTMENT_NAME_DROPDOWN).eq(3).click()  
      cy.get(engagementSetupLocators.CENTRAL_INVESTOR_NAME).click()
      cy.get(engagementSetupLocators.INVESTMENT_NAME_DROPDOWN).eq(4).click()  
      cy.get(engagementSetupLocators.OPTION).click()
      cy.get(engagementSetupLocators.INVESTMENT_NAME_DROPDOWN).eq(5).click()    
    }
    ClickOnMatchSlideoutClose(){
      cy.get(engagementSetupLocators.MATCH_SLIDEOUT_CLOSE_BTN).click()
    }
    TypeInvestmentName(){
      cy.xpath(engagementSetupLocators.INVESTMENT_NAME_FIELD).eq(1).type('MADISON')
    }
    VerifyBEs(){
      cy.get(engagementSetupLocators.VERIFY_MATCHED_DOCUMENT).should('contain',' Matched ')
      cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
      cy.xpath(engagementSetupLocators.SEARCH_INVESTMENT_NAME).click()
      cy.get(engagementSetupLocators.VERIFY_MATCHED_DOCUMENT).should('contain','MADISON')
    }
    ClickOnNewContact(){
      cy.get(engagementSetupLocators.INVESTMENT_NAME_DROPDOWN).eq(2).click()
      cy.get(engagementSetupLocators.SWARAJ_INVESTMENT_NAME).click() 
      cy.get(engagementSetupLocators.INVESTMENT_NAME_DROPDOWN).eq(3).click()  
      cy.get(engagementSetupLocators.CENTRAL_INVESTOR_NAME).click()
    }
    ClickOnMatchButtonSlideOut(){
      cy.xpath(engagementSetupLocators.MATCH_BUTTON_SLIDEOUT).click()
    }
    ClickOnReviewButton(){
      cy.get(engagementSetupLocators.REVIEW_BUTTON).eq(0).click({force: true})
    }
    ClickOnMatchButtonReviewScreen(){
      cy.xpath(engagementSetupLocators.MATCH_BUTTON_REVIEW_SCREEN).click({force: true})
    } 
    ClickOnNewButtonReviewScreen(){
      cy.xpath(engagementSetupLocators.NEW_BUTTON_REVIEW_SCREEN).click()
    }
    ClickOnInvestmentNameMatch(){
      cy.get(engagementSetupLocators.INVESTMENT_NAME_MATCH).eq(2).click()
    }
    ClickOnContactsTab(){
      cy.get(engagementSetupLocators.DOCUMENT_CENTER_TAB).eq(4).click({force: true})
     }
     ClickOnAddContactsButton(){
      cy.xpath(engagementSetupLocators.ADD_CONTACT_BUTTON).click()
     }
     ClickOnNameField(){
        cy.xpath(engagementSetupLocators.NAME_CONTACT).type(testdata.firstName)
     }
     ClickOnEmailField(){
      cy.xpath(engagementSetupLocators.EMAIL_FIELD).type(testdata.email)
    }
    SearchContact(){
      cy.xpath(engagementSetupLocators.INVESTMENT_NAME_FIELD).eq(0).type('Swaraj')
      cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    SearchContactEmail(){
      cy.xpath(engagementSetupLocators.INVESTMENT_NAME_FIELD).eq(2).type('Swar@1234')
      cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    VerifyCreatedContact(){
      cy.reload()
      cy.xpath(engagementSetupLocators.SEARCH_CONTACT_EMAIL_ADDRESS).type('Swar@1234')
      cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
      cy.get(engagementSetupLocators.VERIFY_CONTACT).should('contain','Swar@1234')
    }
    ClickOnNameFieldDup(){
      cy.xpath(engagementSetupLocators.NAME_CONTACT).type(testdata.lastName)
    }
    ClickOnEmailFieldDup(){
      cy.xpath(engagementSetupLocators.EMAIL_FIELD).type('abcd@qw.com')      
    }
    ClickPhoneNumberField(){
      cy.xpath(engagementSetupLocators.PHONE_NUMBER_FIELD).type('5555551234')
    }
    ClickOnCompanyField(){
      cy.xpath(engagementSetupLocators.COMPANY_FIELD).type(testdata.company)
    }
    ClickOnPortalURLField(){
      cy.xpath(engagementSetupLocators.PORTAL_URL).type(testdata.firstName)
    }
    ClickOnSaveButton(){
      cy.xpath(engagementSetupLocators.SAVE_BTN_CONTACTS).click()
    }
    WaitForAPICall(){
      cy.intercept('https://dc.services.visualstudio.com/v2/track').as('query')
      cy.wait('@query',{timeout:60000}).its('response.statusCode').should('eq', 200);
      cy.wait(2000)
    }
    ClickOnInvestmentNameDropDownContact(){
      cy.get(engagementSetupLocators.INVESTMENT_NAME_DROPDOWN).eq(2).click()
      cy.get(engagementSetupLocators.SWARAJ_INVESTMENT_NAME).click() 
      cy.get(engagementSetupLocators.INVESTMENT_NAME_DROPDOWN).eq(3).click()  
      cy.get(engagementSetupLocators.CENTRAL_INVESTOR_NAME).click()
    }
    ClickOnNewExpDoc(){
      cy.xpath(engagementSetupLocators.NEW_BUTTON).eq(2).click()
    }
    ClickOnNewContactName(){
      cy.get(engagementSetupLocators.NEW_BUTTON).eq(8).click()
    }
    TypeContactName(){
      cy.xpath(engagementSetupLocators.NAME_CONTACT_MATCH).type(testdata.firstName)
    }
    TypeEmail(){
      cy.xpath(engagementSetupLocators.EMAIL_FIELD_MATCH).type(testdata.email)
    }
    TypePhoneNumber(){
      cy.xpath(engagementSetupLocators.PHONE_NUMBER_FIELD_MATCH).type('7768981544')
    }
    TypeCompany(){
      cy.xpath(engagementSetupLocators.COMPANY_FIELD_MATCH).type(testdata.company)
    }
    TypePortalURL(){
      cy.xpath(engagementSetupLocators.PORTAL_URL_MATCH).type(testdata.firstName)
    }
   
    SelectReportingGroup(){
      cy.get(engagementSetupLocators.INVESTMENT_NAME_DROPDOWN).eq(4).click()  
      cy.get(engagementSetupLocators.TESTING_REPORTING_TYPE).click()
      cy.get(engagementSetupLocators.MATCH_BUTTON_SLIDEOUT).click() 
    }
    ClickOnCloseButtonSlideout(){
      cy.get(engagementSetupLocators.CLOSE_BUTTON_SLIDEOUT).click()
    }
    VerifyContactFromContactTab(){
      cy.get(engagementSetupLocators.FILTER_CELL_CONTACTS).eq(0).type('QA_Automation')
      cy.get(engagementSetupLocators.VERIFY_CONTACT_NAME).should('contain','QA_Automation')
    }
    ClickOnExpectedDocumentsTab(){
      cy.xpath(engagementSetupLocators.EXPECTED_DOC_IMPORT_EXPORT).eq(0).click()
    }
    ClickOnImportDataButtonBEe(){ 
      cy.wait(3000) 
      cy.get(engagementSetupLocators.IMPORT_DATA_BUTTON_BES).click()
      cy.wait(3000) 
     // cy.get(engagementSetupLocators.IMPORT_DATA_BUTTON_ED).click({force:true})
    }
    ClickOnUploadButtonBes(){
      cy.get(engagementSetupLocators.UPLOAD_BUTTON_BES).contains(' Upload ').click({force:true}).attachFile('ExpectedDocuments-ImportTemplate (QA Testing).xlsx',{subjectType:'drag-n-drop'} )
      cy.wait(3000)
    }
    ClickOnExportAllDataButton(){
      cy.get(engagementSetupLocators.EXPORT_ALL_DATA_BUTTON_ED).click()
    }
    ClickOnExportAllDataButtonBe(){
      cy.get(engagementSetupLocators.EXPORT_ALL_DATA_BUTTON_BE).click()
    }
    ClickOnDownloadBlankImportBe(){
      cy.get(engagementSetupLocators.DOWNLOAD_BLANK_IMPORT_TEMPLATE_BES).click()
    }
    ClickOnDownloadBlankImportEd(){
      cy.get(engagementSetupLocators.DOWNLOAD_BLANK_IMPORT_TEMPLATE_EDS).click()
    }
    ClickOnApprovedColumnDropDown(){
      cy.get(engagementSetupLocators.APPROVED_COLUMN_DROPDOWN).eq(0).click()
    }
    ClickOnApprovedDropDown(){
      cy.xpath(engagementSetupLocators.APPROVED_DROPDOWN).click()
    }
    ClickOnSaveSearchButton(){
      cy.xpath(engagementSetupLocators.SAVE_SEARCH_BUTTON).click()
    }
    TypeSearchName(){
      cy.get(engagementSetupLocators.SEARCH_NAME_FIELD).type(testdata.firstName)
    }
    ClickOnSearchByDropdown(){
      cy.get(engagementSetupLocators.SEARCH_BY_DROPDOWN).click({force:true})
    }
    ClickOnSaveButtonSavedSearch(){
      cy.xpath(engagementSetupLocators.SAVE_BUTTON_SAVED_SEARCH).click()
    }
    ClickOnSwarajTesting(){
      cy.xpath(engagementSetupLocators.SWARAJTESTING_SAVED_SEARCH).click()
    }
    ClickOnNewButtonInvestment(){
      cy.xpath(engagementSetupLocators.NEW_BUTTON_REVIEW_SCREEN).eq(2).click()
    }
    TypeInvestmentNamePrimaryID(){
      cy.xpath(engagementSetupLocators.INVESTMENT_PRIMARY_ID).type(testdata.firstName)
      cy.xpath(engagementSetupLocators.INVESTMENT_NAME_LINE1).type(testdata.firstName) 
      cy.xpath(engagementSetupLocators.INVESTMENT_NAME_LINE2).type(testdata.firstName)
      cy.xpath(engagementSetupLocators.INVESTMENT_TAX_ID).type(testdata.firstName)
    }
    SelectIsForeignOrDomestic(){
      cy.xpath(engagementSetupLocators.IS_FOREIGN_OR_DOMESTIC_INVESTMENT).click()
    }
    SelectDomestic(){
      cy.get(engagementSetupLocators.DOMESTIC_SELECT).contains(' Domestic').click()
    }
    ClickOnNewButtonInvestor(){
      cy.xpath(engagementSetupLocators.NEW_BUTTON_REVIEW_SCREEN).eq(3).click()
      cy.xpath(engagementSetupLocators.INVESTOR_PRIMARY_ID).type(testdata.lastName)
      cy.xpath(engagementSetupLocators.INVESTOR_NAME_LINE1).type(testdata.lastName)
      cy.xpath(engagementSetupLocators.INVESTOR_NAME_LINE2).type(testdata.lastName)
      cy.xpath(engagementSetupLocators.INVESTOR_TAX_ID).type(testdata.lastName)
    }
    SelectIsForeignOrDomesticInvestor(){
      cy.xpath(engagementSetupLocators.IS_FOREIGN_OR_DOMESTIC_INVESTOR).click()
    }
    SelectDomesticInvestor(){
      cy.get(engagementSetupLocators.DOMESTIC_SELECT).contains(' Domestic').click()
    }
    ClickOnNewButtonContact(){
      cy.xpath(engagementSetupLocators.NEW_BUTTON_REVIEW_SCREEN).eq(4).click()
      cy.xpath(engagementSetupLocators.NEW_CONTACT_NAME).type(testdata.firstName)
      cy.xpath(engagementSetupLocators.NEW_CONTACT_EMAIL).type('sss@1234.com')
      cy.xpath(engagementSetupLocators.MATCH_BUTTON_SLIDEOUT).click()
    }
    ClickOnNewButtonContactMatch(){
      cy.xpath(engagementSetupLocators.NEW_BUTTON_REVIEW_SCREEN).eq(3).click()
      cy.xpath(engagementSetupLocators.NEW_CONTACT_NAME).type(testdata.firstName)
      cy.xpath(engagementSetupLocators.NEW_CONTACT_EMAIL).type('sss@1234.com')
      cy.xpath(engagementSetupLocators.MATCH_BUTTON_SLIDEOUT).click()
    }
    VerifyErrorMessage(){
     cy.get(engagementSetupLocators.ERROR_MESSAGE_CONTACTS).should('be.visible')
    }
    VerifyErrorText(){
      cy.get(engagementSetupLocators.ERROR_MESSAGE_TEXT).invoke('text').then((resp)=>{
            expect(resp).to.equal('ERROR') 
         })
         cy.get(engagementSetupLocators.EMAIL_ERROR).invoke('text').then((resp)=>{
          expect(resp).to.equal('ERROR Email address abcd@qw.com already exists ')
       })
    }
    searchAndVerifyNewContact(){
      cy.xpath(engagementSetupLocators.SEARCH_NAME_GRID).type(testdata.firstName)
      cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
      cy.wait(3000);
      cy.xpath(engagementSetupLocators.NAME_VALUE).eq(0).should('have.text',testdata.firstName);
      cy.xpath(engagementSetupLocators.PHONE_NUMBER_VALUE).eq(0).should('have.text',' (555)-555-1234 ');
      cy.xpath(engagementSetupLocators.EMAIL_VALUE).should('have.text',testdata.email);
  }
}
export default EnagegementSetupFunctions;