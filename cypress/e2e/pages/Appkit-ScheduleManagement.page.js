import AppkitScheduleManagementLocators from "../locator files/Appkit-ScheduleManagement.locator";

var appkitScheduleManagementLocators = new AppkitScheduleManagementLocators

class AppkitScheduleManagementFunctions{
    clickOnAdmin(){
        cy.xpath(appkitScheduleManagementLocators.ADMIN).eq(0).click();
        cy.xpath(appkitScheduleManagementLocators.ADMIN_TABS).should('be.visible');
    }
    clickonScheduleManagementButton(){
        cy.xpath(appkitScheduleManagementLocators.SCHEDULE_MANAGEMENT_BTN).click();
        cy.xpath(appkitScheduleManagementLocators.MANAGE_SCHEDULE_DATA_BTN).should('be.visible');
        cy.xpath(appkitScheduleManagementLocators.SCHEDULE_MANAGEMENT_PAGE).should('exist');
    }
    clickOnMigrateScheduleDataButton(){
        cy.xpath(appkitScheduleManagementLocators.MIGRATE_SCHEDULE_DATA_BTN).eq(0).click();
        cy.xpath(appkitScheduleManagementLocators.MIGRATE_SCHEDULE_PAGE).should('exist');
    }
    verifyJurisdiction(){
        cy.xpath(appkitScheduleManagementLocators.SEARCH_JURISDICTION).type('AK')
        cy.xpath(appkitScheduleManagementLocators.JURISDICTION_VALUE).should('have.text','AK')
        cy.xpath(appkitScheduleManagementLocators.FOOTER).click();
    }
    verifySchedule(){
        cy.xpath(appkitScheduleManagementLocators.SEARCH_SCHEDULE).type('K-1')
        cy.xpath(appkitScheduleManagementLocators.SCHEDULE_VALUE).should('have.text','K-1')
        cy.xpath(appkitScheduleManagementLocators.FOOTER).click();
    }
    verifyTaxYear(){
        cy.xpath(appkitScheduleManagementLocators.SEARCH_TAX_YRAR).type('2022')
        cy.xpath(appkitScheduleManagementLocators.TEAX_YEAR_VALUE).should('have.text','2022')
        cy.xpath(appkitScheduleManagementLocators.FOOTER).click();
    }
    verifyScheduleItemCount(){
        cy.xpath(appkitScheduleManagementLocators.SEARCH_SCHEDULE_ITEM_COUNT).type('52')
        cy.xpath(appkitScheduleManagementLocators.SCHEDULE_ITEM_COUNT_VALUE).should('have.text','52')
        cy.xpath(appkitScheduleManagementLocators.FOOTER).click();
    }
    verifyScheduleItemDetailCount(){
        cy.xpath(appkitScheduleManagementLocators.SEARCH_SCHEDULE_ITEM_DETAIL_COUNT).type('0')
        cy.xpath(appkitScheduleManagementLocators.SCHEDULE_ITEM_DETAIL_COUNT_VALUE).should('have.text','0')
        cy.xpath(appkitScheduleManagementLocators.FOOTER).click();
    }
    verifyScheduleItemOtherCount(){
        cy.xpath(appkitScheduleManagementLocators.SEARCH_SCHEDULE_ITEM_OTHER_COUNT).type('0')
        cy.xpath(appkitScheduleManagementLocators.SCHEDULE_ITEM_OTHER_COUNT_VALUE).should('have.text','0')
        cy.xpath(appkitScheduleManagementLocators.FOOTER).click();
    }
    verifyTotalMappingCount(){
        cy.xpath(appkitScheduleManagementLocators.SEARCH_TOTAL_MAPPING_COUNT).type('51')
        cy.xpath(appkitScheduleManagementLocators.TOTAL_MAPPING_COUNT_VALUE).should('have.text','51')
        cy.xpath(appkitScheduleManagementLocators.FOOTER).click();
    }
    verifyMappingProfileCount(){
        cy.xpath(appkitScheduleManagementLocators.SEARCH_MAPPING_PROFILE_COUNT).type('1')
        cy.xpath(appkitScheduleManagementLocators.MAPPING_PROFILE_COUNT_VALUE).should('have.text','1')
        cy.xpath(appkitScheduleManagementLocators.FOOTER).click();
    }
    verifyMigrationStatus(){
        cy.xpath(appkitScheduleManagementLocators.SEARCH_MIGRATION_STATUS).type('Update')
        cy.xpath(appkitScheduleManagementLocators.MIGRATION_STATUS_VALUE).should('have.text','Update')
        cy.xpath(appkitScheduleManagementLocators.FOOTER).click();
    }
    clickOnManageScheduleDataButton(){
       cy.xpath(appkitScheduleManagementLocators.MANAGE_SCHEDULE_DATA_BTN).eq(0).click();
    }
    verifymanageScheduleDataUI(){
        cy.xpath(appkitScheduleManagementLocators.MANAGE_SCHEDULE_DATA_UI).should('exist');
    }
}

export default AppkitScheduleManagementFunctions;