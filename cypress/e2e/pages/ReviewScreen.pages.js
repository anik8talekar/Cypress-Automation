import ReviewScreenLocators from "../locator files/ReviewScreen.locators";
import ReviewDocumentScreenLocators from "../locator files/ReviewDocumentScreen.locator";

var reviewScreenLocators = new ReviewScreenLocators
var reviewDocumentScreenLocators = new ReviewDocumentScreenLocators

class ReviewScreenFunctions {
    searchDocument() {
        cy.xpath(reviewDocumentScreenLocators.SEARCH_DOCUMENT_TEXTBOX).type('2021 Lucille Bluth K1_1_14.pdf')
        cy.wait(3000)
      }
    ClickOnFootnotesTab() {
        cy.xpath(reviewScreenLocators.FEDERAL_FOOTNOTES).click()
    }
    ClickOnExpandFootnoteIcon() {
        cy.xpath(reviewScreenLocators.EXPAND_FOOTNOTES).eq(1).click()
    }
    EditOtherIncomeField() {
        cy.xpath(reviewScreenLocators.OTHER_INCOME_FIELD).invoke('text','').invoke('text','1234')
        cy.wait(3000)
        cy.get('[aria-rowindex="5"] > .manually-edited-cell').click({timeout:2000})
        cy.get('[aria-rowindex="4"] > .manually-edited-cell > .dx-template-wrapper').click()
        cy.wait(3000)
    }
    VerifyYellowTriangle() {
        cy.get(reviewScreenLocators.YELLOW_TRAINGLE).should('be.exist')
    }
    VerifyYellowTriangleK3() {
        cy.get(reviewScreenLocators.YELLOW_TRIANGLE_K3).should('be.exist')
    }
    ClickOnScheduleItemDetails() {
        cy.xpath(reviewScreenLocators.SCHEDULE_ITEM_DETAILS).click()
    }
    ExpandReportingGroup() {
        cy.xpath(reviewScreenLocators.REPORTING_GROUP).eq(0).click()
    }
    ClickOnCustomColumnDropdown() {
        cy.xpath(reviewScreenLocators.CUSTOM_COLUMN_DROPDOWN).eq(0).click()
    }
    ChooseDatePickerOption() {
        cy.xpath(reviewScreenLocators.DATEPICKER_OPTION).click()
    }
    EditDatePickerColumnName() {
        cy.xpath(reviewScreenLocators.DATEPICKER_COLUMN_NAME).eq(0).type('Datepicker')
    }
    SelectDatesDropdown() {
        cy.xpath(reviewScreenLocators.DATES_COLUMN).eq(0).click()
    }
    TypeCurrentDateDocsTab() {
        // Get the current date
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = today.getFullYear();

        const formattedToday = `${mm}/${dd}/${yyyy}`;

        // Select the current date
        // Assuming the date picker allows typing the date
        cy.xpath(reviewScreenLocators.DATE_FIELD).eq(2).type(formattedToday);
    }
    VerifyDocsTabDateColumn() {
        const today = new Date();
        cy.xpath(reviewScreenLocators.DOCUMENTS_GRID).should('contain', 'Dates')
        cy.xpath(reviewScreenLocators.DOCUMENTS_GRID).should('contain', today.getDate() - 1)
    }
    VerifyExpDocsTabDateColumn() {
        const today = new Date();
        cy.xpath(reviewScreenLocators.EXPECTED_DOCUMENTS_GRID).should('contain', 'Dates')
        cy.xpath(reviewScreenLocators.EXPECTED_DOCUMENTS_GRID).should('contain', today.getDate() - 1)
    }
    ClickOnRowsWithoutValuesToggle(){
        cy.get(reviewScreenLocators.ROWS_WITHOUT_VALUES_TOGGLE).click()
        cy.wait(5000);
    }
    VerifyNonZeroValues(){
        cy.get(reviewScreenLocators.ROWS_WITHOUT_VALUES_TOGGLE).dblclick().should('not.have.class', 'active');
 
        // Check that there are no cells with zero values in the Original Value column
        cy.xpath(reviewScreenLocators.ORIGINAL_VALUE_COLUMN).eq(0)
          .each(($cell) => {
            cy.wrap($cell).should('not.contain', '0');
          });
    }
    VerifyZeroValues(){
        // Check that at least one cell with zero value exists in the Original Value column
        cy.xpath(reviewScreenLocators.ORIGINAL_VALUE_COLUMN).eq(0)
          .then(($cells) => {
            // Assert that at least one of the cells contains '0'
            const containsZero = Array.from($cells).some((cell) => cell.innerText === '0');
            expect(containsZero).to.be.false;
          });
    }
    ClickOnPartII(){
        cy.xpath(reviewScreenLocators.PART_II).eq(0).click()
    }
    ClickOnSection2(){
        cy.xpath(reviewScreenLocators.SECTION_2).click()
    }
    ClickOnEyeIcon8621(){
        cy.xpath(reviewScreenLocators.EYE_ICON_8621).eq(0).click()
    }
    clickOnScheduleItemDEtails(){
        cy.contains(' Federal Overflow - Schedule Item Details').click()
    }
    ClickOnForm1040Button(){
        cy.get(reviewScreenLocators.FORM_1040_BUTTON).click()
    }
    VerifyNonZeroValuesForm8621(){
        cy.get(reviewScreenLocators.ROWS_WITHOUT_VALUES_TOGGLE).click()
    }
    ClickOnRowsWithoutValuesToggleCompare(){
        cy.get(reviewScreenLocators.ROWS_WITHOUT_VALUES_TOGGLE).eq(0).click()
        cy.wait(5000);
    }
    RightclickOnReviewIcon() {
        cy.get(reviewScreenLocators.REVIEW_BUTTON1).eq(1).rightclick({force: true})
    }
    ClickOnRightclickPopup(){
        cy.xpath(reviewScreenLocators.RIGHT_CLICK_POPUP).click()
    }
    CtrlClickPopup(){
        cy.get(reviewScreenLocators.REVIEW_BUTTON1).eq(1).click({ctrlkey:true,force:true})
    }
    VerifyNonZeroValuesComparison(){
        cy.get(reviewScreenLocators.ROWS_WITHOUT_VALUES_TOGGLE_COMPARISON).dblclick().should('not.have.class', 'active');
    }
}
export default ReviewScreenFunctions;