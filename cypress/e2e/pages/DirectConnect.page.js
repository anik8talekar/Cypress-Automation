import EngagementNameGenerator from "../../support/engagementNameGenerator";
import CanoeIntegrationLocators from "../locator files/CanoeIntegration.locator";
import DirectConnectLocators from "../locator files/DirectConnect.locator";

var directConnectLocators = new DirectConnectLocators
var canoeIntegrationLocators = new CanoeIntegrationLocators
var NameData;

class DirectConnectFunctions{
    generateName(){
        cy.writeFile(
            "cypress/fixtures/engagementName.json",
            EngagementNameGenerator.generateEngagementName()
           );
           cy.readFile("cypress/fixtures/engagementName.json").then((data)=>{
            NameData = data;
            });
    }
    createEngagement(){
        cy.xpath(directConnectLocators.ADMIN).eq(0).click();
        cy.xpath(directConnectLocators.ADD_ENGAGEMENT).click();
        cy.wait(3000);
        cy.xpath(directConnectLocators.CLIENT_NAME).type('Test')
        cy.xpath(directConnectLocators.SELECT_CLIENT_NAME).eq(0).click();
        cy.xpath(directConnectLocators.ENGAGEMENT_NAME).type(NameData.EngagementName)
        cy.xpath(directConnectLocators.LINE_OF_BUSINESS).type('Testing')
        cy.xpath(directConnectLocators.TESTING_TYPE).eq(0).click();
        cy.xpath(directConnectLocators.ENGAGEMENT_TYPE).click();
        cy.xpath(directConnectLocators.TESTORTRAIN).click();
        cy.xpath(directConnectLocators.OK).click();
        cy.xpath(directConnectLocators.SAVE).click();
        cy.xpath(directConnectLocators.SAVE,{timeout:60000}).should('not.be.visible');
    }
    openNewEngagement(){
        cy.xpath(directConnectLocators.SEARCH).type(NameData.EngagementName)
        cy.xpath(directConnectLocators.HIGHLIGHT).click();
    }
    importBusinessEntities(){
        cy.xpath(directConnectLocators.IMPORT_AND_EXPORT_DATA).click();
        cy.xpath(directConnectLocators.IMPORT_DATA_BUTTON).click();
        cy.xpath(directConnectLocators.UPLOAD_BTN).selectFile('cypress/fixtures/2021 DataFlow_BusEnt-QA.xlsx',{force: true});
        cy.xpath(directConnectLocators.PROGRESS_BAR).should('have.text',' 2021 DataFlow_BusEnt-QA.xlsx ')
        cy.xpath(directConnectLocators.CLOSE_SLIDEOUT).click();
    }
    openEngagementSettings(){
        cy.xpath(canoeIntegrationLocators.ADMIN).click();
        cy.xpath(canoeIntegrationLocators.ENGAGEMENT_SETTINGS).click();
    }
    openDirectConnect(){
        cy.xpath(directConnectLocators.DIRECT_CONNECT).click();
    }
    addDirectConnectProfile(){

       cy.getTestData().then((data)=>{
        cy.xpath(directConnectLocators.ADD_PROFILE_BTN).click();
        cy.xpath (directConnectLocators.CLIENT_ID).click();
        cy.xpath(data['CLIENT_NAME']).click();
        cy.xpath (directConnectLocators.TAX_YEAR).click();
        cy.xpath(directConnectLocators.TAX_YEAR_VALUE).click();
        cy.xpath(directConnectLocators.DATABASE_NAME).click();
        cy.xpath(data['SELECT_DATABASE_NAME']).click();
        cy.xpath(directConnectLocators.SAVE).click();
        cy.wait(10000);
    })

    }
    verifyDirectConnectProfile(){
        cy.getTestData().then((data)=>{
        cy.reload();
        cy.xpath(directConnectLocators.PROFILE_NAME).eq(0).should('have.text', data['PROFILE_NAME'])
        cy.xpath(directConnectLocators.VERIFY_CLIENT_NAME).should('have.text',data['BENNY_TAM_QA'])
        cy.xpath(directConnectLocators.VERIFY_DATABASE_NAME).should('have.text',data['DATABASE_NAME'])
        cy.xpath(directConnectLocators.SELECT_TAX_YEAR).should('have.text',data['TAX_YEAR'])
    })
    }
    clickOnEditIcon(){
        cy.xpath(directConnectLocators.EDIT_ICON).eq(0).click({force: true});
    }
    clickOnCreateBEFromTRACK(){
        cy.wait(3000);
        cy.xpath(directConnectLocators.CREATE_BE_FROM_TRACK_BTN).eq(1).click();
        cy.wait(3000);
        cy.xpath(directConnectLocators.SELECT_ALL).click();
        cy.xpath(directConnectLocators.IMPORT).click();
    }
    clickOnSaveProfileButton(){
        cy.xpath(directConnectLocators.SAVE_PROFILE_BUTTON).click();
        cy.wait(5000);
        cy.xpath(directConnectLocators.CANCEL_BTN).click();   
    }
    filterUnmappedBE(){
        cy.wait(3000);
        cy.xpath(directConnectLocators.MAPPING_STATUS).click();
        cy.xpath(directConnectLocators.SELECT_MAPPING_STATUS).click();
    }
    mapManually(){
        cy.xpath(directConnectLocators.TRACK_FTE_DROPDOWN).click();
        cy.xpath(directConnectLocators.SELECT_TRACK_FTE).eq(1).click();
    }
    verifyMappingStatusForManual(){
        cy.wait(3000);
        cy.xpath(directConnectLocators.MAPPING_STATUS).click();
        cy.xpath(directConnectLocators.MAPPING_STATUS_SELECT).click();
        cy.xpath(directConnectLocators.VERIFY_MAPPING_STATUS).eq(0).should('have.text','Manually mapped')
    }
    verifyMappingStatusForImported(){
        cy.xpath(directConnectLocators.MAPPING_STATUS_1).eq(0).should('have.text','Imported')
        cy.xpath(directConnectLocators.MAPPING_STATUS_2).eq(0).should('have.text','Imported')
        cy.xpath(directConnectLocators.MAPPING_STATUS_3).eq(0).should('have.text','Imported')
        cy.xpath(directConnectLocators.MAPPING_STATUS_4).eq(0).should('have.text','Imported')
        cy.xpath(directConnectLocators.MAPPING_STATUS_5).eq(0).should('have.text','Imported')
        cy.xpath(directConnectLocators.MAPPING_STATUS_6).eq(0).should('have.text','Imported')
        cy.xpath(directConnectLocators.MAPPING_STATUS_7).eq(0).should('have.text','Imported')
    }
    verifyColumnNamesForBE(){
        cy.xpath(directConnectLocators.MAPPING_STATUS_COLUMN).should("exist")
        cy.xpath(directConnectLocators.BUSSINESS_ENTITY_NAME_COLUMN).should("exist")
        cy.xpath(directConnectLocators.PRIMARY_ID_COLUMN).should("exist")
        cy.xpath(directConnectLocators.TAX_ID_COLUMN).should("exist")
        cy.xpath(directConnectLocators.FOREIGN_COLUMN).should("exist")
        cy.xpath(directConnectLocators.TRACK_FTE_COLUMN).should("exist")
        cy.xpath(directConnectLocators.TRACK_FTE_TAX_COLUMN).should("exist")
    }
    applyAndTestFilters(){
        cy.wait(3000);
        cy.xpath(directConnectLocators.MAPPING_STATUS_DROPDOWN).click();
        cy.wait(1000);
        cy.xpath(directConnectLocators.SELECT_MAPPING_STATUS).click();
        cy.wait(1000);
        cy.xpath(directConnectLocators.FOREIGN_DOMESTIC_DROPDOWN).click();
        cy.wait(1000);
        cy.xpath(directConnectLocators.SELECT_FOREIGN).click();
        cy.wait(1000);
    
        cy.xpath(directConnectLocators.MAPPING_STATUS_DROPDOWN).click();
        cy.wait(1000);
        cy.xpath(directConnectLocators.MAPPING_STATUS_SELECT).click();
        cy.wait(1000);
        cy.xpath(directConnectLocators.FOREIGN_DOMESTIC_DROPDOWN).click();
        cy.wait(1000);
        cy.xpath(directConnectLocators.SELECT_DOMESTIC).click();
    }
    clickonSaveAndClose(){
        cy.xpath(directConnectLocators.SAVE_AND_CLOSE_BTN).click();
    }
    resyncProfile(){
        cy.xpath(directConnectLocators.SELECT_ROW).click({force:true});
        cy.xpath(directConnectLocators.RESYNC).should('be.visible')
        cy.xpath(directConnectLocators.RESYNC).click();
        cy.intercept('https://dc.services.visualstudio.com/v2/track').as('query')
        cy.wait('@query',{timeout:60000}).its('response.statusCode').should('eq', 200);
    }
    openAllocableItemTemplates(){
        cy.xpath(directConnectLocators.ALLOCABLE_ITEM_TEMPLATE).click();
    }
    verifyPresenceofMasterK3(){
        cy.xpath(directConnectLocators.EXPORTK3).should('be.visible');
        cy.xpath(directConnectLocators.IMPORTK3).should('be.visible');
    }
    exportMasterK3Template(){
        cy.xpath(directConnectLocators.EXPORTK3).click();
    }
    verifyMasterK3ExportTemplate() {
        cy.readFile('cypress/downloads/MasterK3AllocableItemMapping-ImportTemplate.xlsx').should('exist')
    }
}
export default DirectConnectFunctions