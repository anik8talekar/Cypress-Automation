import CutoffAnalyzerLocators from "../locator files/Dashboard-CutoffAnalyzer.locators";

var cutoffAnalyzerLocators = new CutoffAnalyzerLocators

class CutoffAnalyzerFunctions{
    ClickOnShowDetailsButton(){
        cy.getTestData().then((data)=>{
            cy.xpath(data['SHOW_DETAILS_CUTOFF']).eq(1).click()
        })
    }
    VerifyChart(){
        cy.get(cutoffAnalyzerLocators.VERIFY_CHART).should('be.visible').should(([Image]) =>{
            expect(Image.offsetWidth).to.equal(1177);
            expect(Image.offsetHeight).to.equal(300);
        }
    )};
    VerifyDocumentsCount(){
        cy.get(cutoffAnalyzerLocators.VERIFY_NO_OF_DOC).should('contain','Number of Documents')
        cy.get(cutoffAnalyzerLocators.VERIFY_NO_OF_DOC).should('contain','8886')
        cy.get(cutoffAnalyzerLocators.VERIFY_NO_OF_DOC).should('contain','8865')
        cy.get(cutoffAnalyzerLocators.VERIFY_NO_OF_DOC).should('contain','8621')
        cy.get(cutoffAnalyzerLocators.VERIFY_NO_OF_DOC).should('contain','926')
    }
    VerifyDates(){
        cy.get(cutoffAnalyzerLocators.VERIFY_DATES_ROW).should('contain','Total Expected')
        cy.get(cutoffAnalyzerLocators.VERIFY_DATES_ROW).should('contain','Received to Date')
        cy.get(cutoffAnalyzerLocators.VERIFY_DATES_ROW).should('contain','Total Expected by Cutoff Date')
        cy.get(cutoffAnalyzerLocators.VERIFY_DATES_ROW).should('contain','Total Expected after Cutoff Date')
    }
    SelectInvestor(){
        cy.get(cutoffAnalyzerLocators.INVESTOR_DROPDOWN).eq(1).click()
        cy.contains(' LUCILLE BLUTH FUND').click()
    }
    SelectInvestment(){
        cy.get(cutoffAnalyzerLocators.INVESTOR_DROPDOWN).eq(2).click({force: true})
        cy.contains(' LUCILLE BLUTH FUND').click()
    }
    SelectTaxYear(){
        cy.get(cutoffAnalyzerLocators.INVESTOR_DROPDOWN).eq(3).click({force: true})
        cy.contains(' 2021').click()
    }
    SelectCutoffDate(){
        cy.get(cutoffAnalyzerLocators.CUTOFF_DATE).click()
        cy.contains(' October 2022 ').click()
        cy.get(cutoffAnalyzerLocators.CHANGE_CALENDAR_YEAR).click()
        cy.contains(' Dec ').click()
        cy.contains(' 31 ').click()
    }
    SelectCutoffDateApply(){
        cy.get(cutoffAnalyzerLocators.CUTOFF_DATE).click()
        cy.SelectCurrentDate()
    }
    ClickOnSaveButton(){
        cy.contains(' Save ').click({force: true})
    }
    TypeSearchName(){
        cy.xpath(cutoffAnalyzerLocators.SEARCH_NAME_FIELD).type('Swaraj_LUCILLE')
    }
    ClickOnSaveButtonSlideout(){
        cy.get(cutoffAnalyzerLocators.SAVE_BUTTON_SEARCH_NAME_SLIDEOUT).contains(' Save ').click()
    }
    VerifySavedCutoffs(){
        cy.get(cutoffAnalyzerLocators.INVESTOR_DROPDOWN).eq(0).click({force: true})
        cy.get(cutoffAnalyzerLocators.VERIFY_SAVED_CUTOFF).should('contain',' Swaraj_LUCILLE ')
    }
    DeleteSavedCutoff(){
        cy.get(cutoffAnalyzerLocators.DELETE_SAVED_CUTOFF_ICON).eq(1).click()
    }
    clickOnDeletePopup(){
        cy.contains(' Delete ').click()
    }
    SelectSavedCutoff(){
        cy.getTestData().then((data)=>{
        cy.get(cutoffAnalyzerLocators.INVESTOR_DROPDOWN).eq(0).click()
        cy.contains(data['SavedCutoff']).click()
        })
    }
    TypeCutOffDate(){
        cy.xpath(cutoffAnalyzerLocators.SEARCH_CUT_OFF_DATE).type('8/21/2024')
        cy.xpath('//div[@class="document-center-page"]').click()
        cy.wait(4000);
    }
    VerifyCutoffDateExpDocTab(){
        cy.get(cutoffAnalyzerLocators.VERIFY_CUTOFF_DATE_EXPECTED_DOCUMENTS).should('contain','8/21/2024')
    }
    ChangeTaxYear(){
        cy.get(cutoffAnalyzerLocators.INVESTOR_DROPDOWN).eq(3).click({force: true})
        cy.contains(' 2020').click()
    }
    TaxYearDropdown(){
        cy.get(cutoffAnalyzerLocators.INVESTOR_DROPDOWN).eq(1).click()
    }
    ChangeTaxYearAll(){
        cy.xpath(cutoffAnalyzerLocators.TAX_YEAR_ALL).click()
        cy.xpath("//div[@class='dx-loadpanel-indicator dx-loadindicator dx-widget']",{timeout:60000}).should('not.be.visible');
    }
    clickOnYesPopup(){
        cy.contains(' Yes ').click()
    }
    VerifyChangedTaxYear(){
        cy.get(cutoffAnalyzerLocators.INVESTOR_DROPDOWN).eq(3).click({force: true})
        cy.get(cutoffAnalyzerLocators.VERIFY_CHANGED_TAX_YEAR).should('have.text',' 2020\n')
    }
    ClickOnResetSelectionButton(){
        cy.contains(' Reset Selection ').click()
    }
    VerifyEmptyFilterFields(){
        cy.get(cutoffAnalyzerLocators.EMPTY_SAVED_CUTOFF).should('not.exist')
        cy.get(cutoffAnalyzerLocators.EMPTY_INVESTOR).should('not.exist')
        cy.get(cutoffAnalyzerLocators.EMPTY_INVESTMENT).should('not.exist')
        cy.get(cutoffAnalyzerLocators.EMPTY_CUTOFF_DATE).should('not.exist')
    }
    VerifyLineChart(){
        cy.get(cutoffAnalyzerLocators.VERIFY_LINECHART).should('contain','Number of Documents')
        cy.get(cutoffAnalyzerLocators.VERIFY_LINECHART).should('contain','8886')
        cy.get(cutoffAnalyzerLocators.VERIFY_LINECHART).should('contain','8865')
        cy.get(cutoffAnalyzerLocators.VERIFY_LINECHART).should('contain','926')
    }
    ClickOnDoughnutChart(){
        cy.contains(' Doughnut Chart ').click()
    }
    VerifyDoughnutChart(){
        cy.get(cutoffAnalyzerLocators.VERIFY_DOUGHNUT_CHART).eq(0).should('contain',' Documents, Ending Capital, Taxable Income, NAV ')
        cy.get(cutoffAnalyzerLocators.VERIFY_DOUGHNUT_CHART).eq(1).should('contain',' UBTI, ECI, FDAP ')
        cy.get(cutoffAnalyzerLocators.VERIFY_DOUGHNUT_CHART).eq(2).should('contain',' 8886, 8865, 8621, 926 ')
    }
    ClickOnApplyCutoffDateButton(){
        cy.contains(' Apply Cutoff Date ').click()
    }
    ExpectedDocumentsTab(){
        cy.xpath(cutoffAnalyzerLocators.EXPECTED_DOCUMENTS_TAB).click()
    }
    ClickOnCloseIcon(){
        cy.get(cutoffAnalyzerLocators.CLOSE_ICON).click()
    }
    ClickOnRecalculateButton(){
        cy.contains(' Recalculate ').click()
    }
    VerifyRecalculationStartedMsg(){
        cy.get(cutoffAnalyzerLocators.RECALCULATION_STARTED_POPUP).should('be.visible')
    }
    VerifyRecalculationText(){
        cy.get(cutoffAnalyzerLocators.RECALCULATION_STARTED_TEXT).invoke('text').then((resp)=>{
              expect(resp).to.equal('Recalculation Started') 
           })
    }

}
export default CutoffAnalyzerFunctions;

