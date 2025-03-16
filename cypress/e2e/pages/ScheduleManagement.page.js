import ScheduleManagementLocators from "../locator files/ScheduleManagement.locator";

var scheduleManagementLocators = new ScheduleManagementLocators

class ScheduleManagementFunctions{
    openScheduleManagement(){
        cy.xpath(scheduleManagementLocators.ADMIN).click();
        cy.xpath(scheduleManagementLocators.SCHEDULE_MANAGEMENT).click();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    clickScheduleDataExport(){
        cy.xpath(scheduleManagementLocators.SCHEDULE_DATA_EXPORT_ICON).click();
        cy.xpath(scheduleManagementLocators.YES).click();
    }
    openMigrateScheduleData(){
        let baseURL = Cypress.env('baseURL')   
        if (baseURL.includes('qa')) {    
            cy.get(scheduleManagementLocators.MIGRATE_SCHEDULE_DATA).click(); 
        } else if (baseURL.includes('stg')) {     
            cy.log("Stage Does not have Migrate Schedule Data Section ")
        } 
    }
    migrateScheduleData(){
        let baseURL = Cypress.env('baseURL')   
        if (baseURL.includes('qa')) {    
        cy.xpath(scheduleManagementLocators.MIGRATION_STATUS).type('New');
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
        cy.xpath(scheduleManagementLocators.CHECKBOX).eq(0).click();
        cy.xpath(scheduleManagementLocators.MIGRATE_SCHEDULE_DATA_ICON).should('be.visible')
        cy.xpath(scheduleManagementLocators.MIGRATE_SCHEDULE_DATA_ICON).should('exist')

        cy.xpath(scheduleManagementLocators.JURISDICTION).then(function(Schedule){
        cy.log(Schedule.text())
        cy.xpath(scheduleManagementLocators.MIGRATE_SCHEDULE_DATA_ICON).click();
        cy.xpath(scheduleManagementLocators.YES).click();
        cy.get(scheduleManagementLocators.NOTIFICATION).should('have.text','SUCCESS Schedule migration started, check schedule import status for progress ')
      })
        } else if (baseURL.includes('stg')) {     
            cy.log("Stage Does not have Migrate Schedule Data Section ")
        } 
    }
    openCheckImportStatus(){
        cy.xpath(scheduleManagementLocators.CHECK_IMPORT_STATUS).eq(0).click();
    }
    verifyFileNames(){
        cy.xpath(scheduleManagementLocators.FILE_NAME_CELL_1).invoke('text').then((text1)=>{
        cy.xpath(scheduleManagementLocators.FILE_NAME_CELL_1).should('not.be.empty').should('contain.text',text1);  
        })
        cy.xpath(scheduleManagementLocators.FILE_NAME_CELL_2).invoke('text').then((text2)=>{
        cy.xpath(scheduleManagementLocators.FILE_NAME_CELL_2).should('not.be.empty').should('contain.text',text2);  
        })
    }
}

export default ScheduleManagementFunctions;