import DashboardYearLocators from "../locator files/Dashboard-ExpActPriorYear.locators";
import Smartk1Locators from "../locator files/Smart-k1.locators";
import ExpDocumentsRolloverLocators from "../locator files/ExpDocumentsRollover.locators"

var dashboardYearLocators = new DashboardYearLocators
var smartK1Locators = new Smartk1Locators
var expDocumentsRolloverLocators = new ExpDocumentsRolloverLocators

class DashboardYearFunctions{

    ClickOnTaxYearDropdown(){
        cy.get(dashboardYearLocators.TAX_YEAR_DROPDOWN).eq(0).click()
        cy.wait(2000)
    }
    Select2021Year(){
        cy.wait(2000)
        cy.get(dashboardYearLocators.DISPLAY_EXP_YEAR).contains(' 2021').click()
    }
    VerifyChart(){
        cy.get(dashboardYearLocators.VERIFY_CHART).eq(0).should('be.visible').should(([Image]) =>{
            expect(Image.offsetWidth).to.equal(468);
            expect(Image.offsetHeight).to.equal(250);
        }
        );
    }
    VerifyChartDetailsTab(){
        cy.get(dashboardYearLocators.VERIFY_CHART).eq(0).should('be.visible').should(([Image]) =>{
            expect(Image.offsetWidth).to.equal(945);
            expect(Image.offsetHeight).to.equal(250);
        });
    }
    ShowDetailsButton(){
        cy.xpath(dashboardYearLocators.SHOW_DETAILS_BUTTON).eq(0).click()
    }
    VerifyColumnHeadings(){
        cy.get(dashboardYearLocators.VERIFY_INVESTMENT_NAME).should('contain','Investment Name')
        cy.get(dashboardYearLocators.VERIFY_INVESTOR).should('contain','Investor')
        cy.get(dashboardYearLocators.VERIFY_SCHEDULE_NAME).should('contain','Schedule Name')
        cy.get(dashboardYearLocators.VERIFY_PRIOR_YEAR_RECEIPT_DATE).should('contain','Prior Year Receipt Date')
        cy.get(dashboardYearLocators.VERIFY_EXPECTED_RECEIPT_DATE).should('contain','Expected Receipt Date')
        cy.get(dashboardYearLocators.VERIFY_ACTUAL_RECEIPT_DATE).should('contain','Actual Receipt Date')
    }
    ClickOnTaxYearSide(){
        cy.get(dashboardYearLocators.TAX_YEAR_DROPDOWN_DETAILS).eq(0).click()
    }
    SelectInvestorSide(){
        cy.get(dashboardYearLocators.TAX_YEAR_DROPDOWN_DETAILS).eq(1).click()
        cy.contains(' LUCILLE BLUTH FUND').click()
    }
    SelectScheduleSide(){
        cy.get(dashboardYearLocators.TAX_YEAR_DROPDOWN_DETAILS).eq(2).click()
        cy.contains(' Federal K-1 (Federal)').click()
    }
    ChooseDatesSide(){
        cy.get(dashboardYearLocators.DATE_FILTER_DETAILS).eq(0).click({force: true})
        cy.contains(' 1 ').click()
        cy.contains(' 30 ').click()
        cy.get(dashboardYearLocators.DATE_FILTER_DETAILS).eq(1).click({force: true})
        cy.contains(' 24 ').click()
        cy.get(dashboardYearLocators.DATE_FILTER_DETAILS).eq(2).click({force: true})
        cy.contains(' 30 ').click()
    }
    VerifySideFiltersInGrid(){
        cy.get(dashboardYearLocators.VERIFY_SIDE_FILTERS).should('contain','LUCILLE BLUTH FUND')
        cy.get(dashboardYearLocators.VERIFY_SIDE_FILTERS).should('contain','LUCILLE BLUTH FUND')
    }
}
export default DashboardYearFunctions;