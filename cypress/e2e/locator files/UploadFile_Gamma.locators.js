class UploadFileLocatorsGamma{
    locators = {
        uploadFileMenu: () =>  cy.contains("Upload Files", { timeout: 30000 }),
        uploadFileBtn:() => cy.get('.upload-grid__toolbar-items > :nth-child(2) > .trux-button__button > .trux-button__content'),
        uploadFileArea: () => cy.xpath("//input[@type='file']"),
        closeBtn:() => cy.get('.trux-slideout-header__close-btn'),
        fileNameField:() =>cy.get('[aria-rowindex="1"] > [aria-describedby="dx-col-12"]', { timeout: 30000 }),
        expandBtn:() => cy.get(':nth-child(1) > .dx-command-expand > .dx-datagrid-group-closed', { timeout: 30000 }),
        totalNumberOfDocuemnts:() => cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > [aria-describedby="dx-col-13"]'),
        totalNumberOfPages:() => cy.get('.dx-state-hover > [aria-describedby="dx-col-14"]'),
        currentStatusField:() => cy.get('[aria-rowindex="1"] > [aria-describedby="dx-col-15"]', { timeout: 30000 }),
        //dropdown status Elements
        fileNameField:() => cy.xpath("//tr[@aria-rowindex='1']//td[@aria-colindex='1']//a[contains(text(),'2021 George Bluth K1_1_14.pdf')]"), 
        scheduleField:() => cy.xpath("//tr[@aria-rowindex='1']//td[@aria-colindex='2'] [contains(text(),'Federal K-1')]"),
        statusField:() => cy.xpath("//tr[@aria-rowindex='1']//td[@aria-colindex='3']//span[contains(text(),' Complete')]"),
        stepIndicatorField:() => cy.xpath("//div[@class='stepper-indicator ng-star-inserted']"),
        startingPageField:() => cy.xpath("//tbody[@role='presentation']//tr[@aria-rowindex='1']//td[@aria-colindex='6'] [contains(text(),'1')][@tabindex='0']"),
        pageCountField:() => cy.xpath("//tbody[@role='presentation']//tr[@aria-rowindex='1']//td[@aria-colindex='7'] [contains(text(),'14')][@tabindex='0']")

    }
}

export default UploadFileLocatorsGamma;