import DiagnosticsLocators from "../locator files/Diagnostics.locator";

var diagnosticsLocators = new DiagnosticsLocators();

class DiagnosticsPageFunctions{
    runDiagnostics(){
        cy.xpath(diagnosticsLocators.RUN_DIAGNOSTICS).click();
        cy.get(diagnosticsLocators.RUN_DIAGNOSTICS_POPUP, { timeout: 5000 })
        .should('be.visible')
        .and('contain', 'Diagnostics Process Started You may continue using the application - results will appear automatically when completed');
        cy.reload();
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
        cy.xpath(diagnosticsLocators.VIEW_DIAGNOSTICS,{timeout:60000}).eq(1).should('be.visible');
        cy.xpath(diagnosticsLocators.VIEW_DIAGNOSTICS).eq(1).click();
    }
    diagnostics(){
        cy.xpath(diagnosticsLocators.MORE).click();
        cy.xpath(diagnosticsLocators.DIAGNOSTICS).click();
        cy.wait(3000);
        cy.xpath(diagnosticsLocators.RUN_DIAGNOSTICS).click();
        cy.get(diagnosticsLocators.RUN_DIAGNOSTICS_POPUP).should('be.visible');
    }
    selectAllDocuments(){
        cy.xpath(diagnosticsLocators.SELECT_ALL_CHECKBOX).click();
    }
}

export default DiagnosticsPageFunctions;
