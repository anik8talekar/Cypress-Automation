import DashboardDiagnosticsLocators from "../locator files/Dashboard-Diagnostics.locator";

var dashboardDiagnosticsLocators = new DashboardDiagnosticsLocators

class DashboardDiagnosticsFunctions{
verifyDetails(){
    cy.wait(35000);
    cy.xpath(dashboardDiagnosticsLocators.HEALTH_METER).should('be.visible')
    cy.xpath(dashboardDiagnosticsLocators.COLUMN_COUNT).should('exist')
}
searchEngagement(){
    cy.xpath(dashboardDiagnosticsLocators.DROPDOWN).click();
    cy.xpath(dashboardDiagnosticsLocators.SEARCH).type(' DATAFLOW_QA_AUTOMATION ');
}
verifyResult(){
    cy.xpath(dashboardDiagnosticsLocators.OPTION).should('contain','DATAFLOW_QA_AUTOMATION')
}
}
export default DashboardDiagnosticsFunctions;