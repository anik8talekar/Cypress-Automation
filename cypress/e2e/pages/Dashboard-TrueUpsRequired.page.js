import DashboardTrueUpsRequiredLocators from "../locator files/Dashboard-TrueUpsRequired.locators";

var dashboardTrueUpsRequiredLocators = new DashboardTrueUpsRequiredLocators

class DashboardTrueUpsRequiredFunctions {
    ClickOnTaxYearDropdown() {
        cy.xpath(dashboardTrueUpsRequiredLocators.TAXYEARDROPDOWN).click();
    }

    SelectTaxYear() {
        cy.xpath(dashboardTrueUpsRequiredLocators.TAXYEAR).click();
    }

    VerifyChartForTaxYear() {
        cy.xpath(dashboardTrueUpsRequiredLocators.VERIFYCHART).should('have.text', ' Summary Information ');
    }

    ClickOnShowDetails() {
        cy.xpath(dashboardTrueUpsRequiredLocators.SHOWDETAILS).click();
    }

    SelectTaxYearDropdown() {
        cy.xpath(dashboardTrueUpsRequiredLocators.TAXYEARDROPDOWN_2).eq(0).click();
        cy.wait(5000)
    }

    SelectTaxYear2() {
        cy.xpath(dashboardTrueUpsRequiredLocators.SELECTTAXYEAR).click();
    }

    SelectProcessDate() {
        cy.xpath(dashboardTrueUpsRequiredLocators.PROCESSDATE).eq(0).type('05/01/2024 - 05/30/2024');
        cy.xpath(dashboardTrueUpsRequiredLocators.SOURCEPAGE).click();
    }

    SelectFinalDate() {
        cy.xpath(dashboardTrueUpsRequiredLocators.FINALDATE).eq(1).type('05/01/2024 - 06/30/2024');
        cy.xpath(dashboardTrueUpsRequiredLocators.SOURCEPAGE).click();
    }

    VerifySummary() {
        cy.xpath(dashboardTrueUpsRequiredLocators.SUMMARY).should('have.text', ' Summary ');
    }

    VerifyGridColumnNames() {
        cy.xpath(dashboardTrueUpsRequiredLocators.COULMN_1).should('have.text', 'Investment Name');
        cy.xpath(dashboardTrueUpsRequiredLocators.COLUMN_2).should('have.text', 'Investment Tax ID');
        cy.xpath(dashboardTrueUpsRequiredLocators.COLUMN_3).should('have.text', 'Investor Tax ID');
        cy.xpath(dashboardTrueUpsRequiredLocators.COLUMN_4).should('have.text', 'Investor Name');
        cy.xpath(dashboardTrueUpsRequiredLocators.COLUMN_5).should('have.text', 'Estimate Taxable Income');
        cy.xpath(dashboardTrueUpsRequiredLocators.COLUMN_6).should('have.text', 'Estimate Process Date');
        cy.xpath(dashboardTrueUpsRequiredLocators.COLUMN_7).should('have.text', 'Final Taxable Income');
        cy.xpath(dashboardTrueUpsRequiredLocators.COLUMN_8).should('have.text', 'Final Process Date');
    }

    NavigateToWidget() {
        cy.xpath(dashboardTrueUpsRequiredLocators.TRUEUPSWIDGET).scrollIntoView().should('be.visible');
    }

    VerifyChartFields() {
        cy.xpath(dashboardTrueUpsRequiredLocators.TAXYEARDROPDOWN).click();
        cy.xpath(dashboardTrueUpsRequiredLocators.TAXYEAR).click();
        cy.xpath(dashboardTrueUpsRequiredLocators.VERIFYCHART).should('have.text', ' Summary Information ');
        cy.wait(3000)
        cy.xpath(dashboardTrueUpsRequiredLocators.ESTIMATE).should('have.text', ' Estimate ');
        cy.xpath(dashboardTrueUpsRequiredLocators.ACTUAL).should('have.text', ' Actual ');
        cy.xpath(dashboardTrueUpsRequiredLocators.DIFFERENCE).should('have.text', ' Difference ');
    }


}
export default DashboardTrueUpsRequiredFunctions;