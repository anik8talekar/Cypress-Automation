import ProjectHorizonLocators from "../locator files/ProjectHorizon.locators";

var projectHorizonLocators = new ProjectHorizonLocators

class ProjectHorizonFunctions{
    ClickOnStandardDespBtn(){
        cy.xpath(projectHorizonLocators.STANDARD_DESP_BUTTON).click()
    }
    ClickOnClientNameDropDown(){
        cy.xpath(projectHorizonLocators.CLIENT_NAME_DROPDOWN).click()
    }
    SelectClientName(){
        cy.xpath('//trux-sdk-list[@selectionmode="single"]').click()
        .contains('BennyTam-QA ')
      .then((option) => {
        if (option.is(':visible')) {
          // If 'User Training' is visible, select it
          cy.wrap(option).click();
        } else {
          // If 'User Training' is not visible, select 'Benny tam QA'
          cy.get('//trux-sdk-list[@selectionmode="single"]')
            .contains('User Training ')
            .click();
        }
      });
    }
    ClickOnTaxYearDropDown(){
        cy.xpath(projectHorizonLocators.TAX_YEAR_DROPDOWN).click()
    }
    SelectTaxYear(){
        cy.contains('span', '2022').click();
    }
    ClickOnDbNameDropDown(){
        cy.xpath(projectHorizonLocators.DATABASE_NAME_DROPDOWN).click()
    }
    SelectDbName(){
        cy.contains('span', 'BennyTest2022').click();
    }
    ClickOnSaveButton(){
        cy.xpath(projectHorizonLocators.SAVE_BUTTON).click()
    }
    ClickOnCheckImportStatusTab(){
        cy.xpath(projectHorizonLocators.CHECK_IMPORT_STATUS_TAB).eq(0).click()
    }
    VerifyImportStatus(){
        cy.xpath(projectHorizonLocators.IMPORT_STATUS_GRID).should('contain','StandardDescriptionSync')
        cy.xpath(projectHorizonLocators.IMPORT_STATUS_GRID).should('contain','Sync Completed')
    }
    ClickOnManageScheduleItemTab(){
        cy.xpath(projectHorizonLocators.MANAGE_SCHEDULE_DATA).eq(0).click()
    }
    MouseHoverStandardBtn(){
        cy.wait(4000);
        cy.get(projectHorizonLocators.HOVER_STANDARD_DESP).eq(1).should('be.enabled').realHover();
    }
    VerifyToolTipMessage() {
        cy.xpath(projectHorizonLocators.TOOLTIP_TEXT).should('be.visible').then($tooltip => {
            const tooltipText = $tooltip.text()
            cy.log('Tooltip Message : ' + tooltipText)
        })
    }
    VerifyStandardDesp(){
        cy.xpath(projectHorizonLocators.SCHEDULE_ITEMS_GRID).should('contain', ' Final K-1 ')
        cy.xpath(projectHorizonLocators.SCHEDULE_ITEMS_GRID).should('contain', ' Amended K-1 ')
    }
    VerifyStandardDespDetails(){
        cy.xpath(projectHorizonLocators.SCHEDULE_ITEM_DETAILS_GRID).should('contain', 'ORDINARY BUSINESS INCOME/(LOSS)')
        cy.xpath(projectHorizonLocators.SCHEDULE_ITEM_DETAILS_GRID).should('contain', 'INTEREST INCOME')
        cy.xpath(projectHorizonLocators.SCHEDULE_ITEM_DETAILS_GRID).should('contain', 'ORDINARY DIVIDENDS')
    }
    VerifyDetailDescriptionCSV(){
        cy.task('readExcelData').then((data) => {
            // Print each value from the "detail description" column
            data.forEach((description) => {
              cy.log(description);
            });
          });
    }

}
export default ProjectHorizonFunctions;