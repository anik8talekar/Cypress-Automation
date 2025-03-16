import UploadFileScreenFS1Locators from "../locator files/Reprocess.locators";

var uploadFileScreenFS1Locators = new UploadFileScreenFS1Locators

class UploadFileScreenFS1Functions{

    ClickOnStatusDropdown(){
        cy.xpath(uploadFileScreenFS1Locators.STATUS_DROPDOWN).click()
    }
    SelectSuccessOption(){
        cy.xpath(uploadFileScreenFS1Locators.SUCCESS_OPTION).click()
    }
    SearchFileName(){
        cy.xpath(uploadFileScreenFS1Locators.FILE_NAME).eq(0).type('2023 West Virginia NRW GST.pdf')
    }
    clickOnReprocessButton(){
        cy.xpath(uploadFileScreenFS1Locators.REPROCESS_BUTTON).eq(0).click()
    }
    ClickOnYesPopup(){
        cy.xpath(uploadFileScreenFS1Locators.YES_POPUP).click()
    }
    VerifyReprocessingStarted(){
        cy.xpath(uploadFileScreenFS1Locators.REPROCESS_NOTIFICATION).should('be.visible').then($tooltip => {
            const tooltipText = $tooltip.text()
            cy.log('Tooltip Message : ' + tooltipText)
        })
    }
    SelectErrorOption(){
        cy.xpath(uploadFileScreenFS1Locators.ERROR_OPTION).click()
    }
    ClickOnExpandIcon(){
        cy.wait(3000)
        cy.xpath(uploadFileScreenFS1Locators.FILE_EXPAND_ICON).eq(0).click()
        cy.wait(3000)
    }
    ClickOnDocName(){
        cy.xpath(uploadFileScreenFS1Locators.DOCUMENT_NAME).click()
    }
    ClickOnApproveButton(){
        cy.xpath(uploadFileScreenFS1Locators.APPROVE_BUTTON).click()
    }
    ClickOnApprovePopup(){
        cy.xpath(uploadFileScreenFS1Locators.APPROVE_POPUP).click()
    }
    VerifyDisabledReprocessButton(){
        cy.xpath(uploadFileScreenFS1Locators.REPROCESS_BUTTON).eq(0).should('be.disabled')
    }
    ClickOnUnApproveButton(){
        cy.xpath(uploadFileScreenFS1Locators.UNAPPROVE_BUTTON).click()
    }
    ClickOnUnApprovePopup(){
        cy.get(uploadFileScreenFS1Locators.UNAPPROVE_POPUP).click()
    }
    VerifyTaxYearDropDown(){
        cy.xpath(uploadFileScreenFS1Locators.DISABLED_TAX_YEAR).should('not.have.attr','tabindex','0')
    }
    VerifyScheduleDropDown(){
        cy.xpath(uploadFileScreenFS1Locators.DISABLED_SCHEDULE).should('not.have.attr','tabindex','0')
    }
    SearchFileNameSchedule(){
        cy.xpath(uploadFileScreenFS1Locators.FILE_NAME).eq(0).type('14-STANLEY SITWELL 1 7 5.pdf')
    }
    VerifySuccessStatus(){
        cy.xpath(uploadFileScreenFS1Locators.SUCCESS_STATUS).eq(0).should('have.text',' Success Documents ')
    }
    SelectErrorOption(){
        cy.xpath(uploadFileScreenFS1Locators.ERROR_OPTION).click()
    } 
    SelectDeletedOption(){
        cy.xpath(uploadFileScreenFS1Locators.DELETED_OPTION).eq(1).click()
    }
    SelectPasswordLockedOption(){
        cy.xpath(uploadFileScreenFS1Locators.PASSWORD_LOCKED_OPTION).click()
    }
    VerifyErrorStatus(){
        cy.xpath(uploadFileScreenFS1Locators.ERROR_STATUS).eq(0).should('have.text',' Error Documents ')
    }
    VerifyDeletedStatus(){
        cy.xpath(uploadFileScreenFS1Locators.DELETED_STATUS).eq(0).should('have.text',' Deleted Documents ')
    }
    VerifyPasswordLockedStatus(){
        cy.xpath(uploadFileScreenFS1Locators.PASSWORD_LOCKED_STATUS).eq(0).should('have.text',' Password Locked ')
    }
    SelectProcessingOption(){
        cy.xpath(uploadFileScreenFS1Locators.PROCESSING_OPTION).click()
    }
    VerifyProcessingStatus(){
        cy.xpath(uploadFileScreenFS1Locators.PROCESSING_STATUS).should('have.text',' Processing Documents ')
    }
    VerifySuccessIcon(){
        cy.xpath(uploadFileScreenFS1Locators.SUCCESS_ICON).eq(0).should('be.visible')
    }
    VerifyErrorIcon(){
        cy.xpath(uploadFileScreenFS1Locators.ERROR_ICON).eq(0).should('be.visible')
    }
    VerifyDeletedIcon(){
        cy.xpath(uploadFileScreenFS1Locators.DELETED_ICON).eq(0).should('be.visible')
    }
    VerifyDefaultColumnsHeading(){
        cy.xpath(uploadFileScreenFS1Locators.UPLOAD_FILES_GRID).should(($element)=>{
            expect($element).to.contain('File Name');
            expect($element).to.contain('Status');
            expect($element).to.contain('Message');
            expect($element).to.contain('Reprocess');
            expect($element).to.contain('User');
        })
    }
    ClickOnColumnDropdown(){
        cy.get(uploadFileScreenFS1Locators.COLUMN_DROPDOWN).click()
        cy.wait(3000);
    }
    UnselectDefaultColumns(){
        cy.xpath(uploadFileScreenFS1Locators.BYDEFAULT_SELECTED_COLUMNS).each(($checkbox)=>{
            cy.wrap($checkbox).click({force:true}).should('not.be.checked')
        })
    }
    VerifyDefaultColumnsHeadingDoc(){
        cy.xpath(uploadFileScreenFS1Locators.UPLOAD_FILES_GRID).should(($element)=>{
            expect($element).to.contain('Document Name');
            expect($element).to.contain('Status');
            expect($element).to.contain('Message');
            expect($element).to.contain('Tax year');
            expect($element).to.contain('Schedule');
            expect($element).to.contain('Reprocess');
            expect($element).to.contain('User');
        })
    }
    goToDocLevelGrid(){
        cy.xpath("//div[@aria-colindex='3']//button").click();
        cy.xpath("(//div[@ref='eSetFilterList']//input[@type='checkbox'])[1]").click();
        cy.xpath("(//div[@ref='eSetFilterList']//input[@type='checkbox'])[6]").click();
        cy.xpath("//div[@aria-label='Column Menu']//span[@unselectable='on']").click();
        cy.xpath("//div[@aria-rowindex='3']//div[@aria-colindex='1']//awm-button//ap-button//button").click();
    }
    chooseColumn(){
        cy.xpath("(//div[@row-index='1']//div[@class='ag-header-row ag-header-row-column']//span[@ref='eMenu'])[1]").click({force:true});
        cy.xpath("//span[@aria-label='columns']").click({force:true});
        cy.xpath("//div[@aria-label='Document ID Column']").click();
    }
    verifyDocIDColumn(){
        cy.xpath("//span[contains(text(),'Document ID')]").should('be.visible');
    }
}
export default UploadFileScreenFS1Functions