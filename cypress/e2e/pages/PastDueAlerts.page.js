import PastDueAlertLocators from "../locator files/pastDueAlerts.locator";
import EngagementNameGenerator from "../../support/engagementNameGenerator"

var pastDueAlertLocators = new PastDueAlertLocators();
var NameData;

before(()=>{
  cy.writeFile(
     "cypress/fixtures/engagementName.json",
     EngagementNameGenerator.generateEngagementName()
    );
    cy.readFile("cypress/fixtures/engagementName.json").then((data)=>{
     NameData = data;
     });
  })

  function getRandomDateLast60Days() {
    const currentDate = new Date(); // Get the current date
    const randomNumberOfDays = Math.floor(Math.random() * 60); // Generate a random number between 0 and 59
    const randomDate = new Date(currentDate);
    randomDate.setDate(currentDate.getDate() - randomNumberOfDays); // Subtract the random number of days
  
    // Format the date in MM/DD/YYYY format
    const month = String(randomDate.getMonth() + 1).padStart(2, '0'); // Month starts from 0, so add 1 and pad with '0'
    const day = String(randomDate.getDate()).padStart(2, '0'); // Pad the day with '0'
    const year = randomDate.getFullYear();
  
    return `${month}/${day}/${year}`;
  }
  
   
  
  const randomDateFormatted = getRandomDateLast60Days();
  console.log(randomDateFormatted);

class PastDueAlertsFunctions{
      openExpectedDocuments(){
        cy.xpath(pastDueAlertLocators.DOCUMENT_CENTER).click();
        cy.xpath(pastDueAlertLocators.EXPECTED_DOCUMENTS_SECTION).click();
                }
      createNewExpectedDocument(){
        cy.xpath(pastDueAlertLocators.ADD_EXPECTED_DOCUMENT_BTN).click();
        cy.xpath(pastDueAlertLocators.TAX_YEAR_TEXTBOX).type('2022');
        cy.xpath(pastDueAlertLocators.SCHEDULE_ID_DROPDOWN).click();
        cy.xpath(pastDueAlertLocators.FED_K1_OPTION).click();
        cy.xpath(pastDueAlertLocators.PROJECT_RECIEVE_DATE).type(randomDateFormatted);
 
        cy.xpath(pastDueAlertLocators.INVESTOR_ID_TEXTBOX).type(NameData.InvestorName)
        cy.get(pastDueAlertLocators.OPTION).click();
 
        cy.xpath(pastDueAlertLocators.INVESTMENT_ID_TEXTBOX).type(NameData.InvestmentName);
        cy.get(pastDueAlertLocators.OPTION).click();
 
        cy.xpath(pastDueAlertLocators.INVESTMENT_ENTITY).click();
        cy.xpath(pastDueAlertLocators.DOMESTIC).click();
 
        cy.xpath(pastDueAlertLocators.CATEGORY).click();
        cy.xpath(pastDueAlertLocators.ESTIMATE).click();
    
        cy.xpath(pastDueAlertLocators.SAVE).click();
            }
    openPastDueAlertsWidget(){
          // cy.xpath("//div[contains(text(),' Expected Document exists ')]").then(($message) => {
          //      if ($message.length > 0) {
          //         cy.log('Document already exists');
          //       } else {
           cy.xpath(pastDueAlertLocators.DASHBOARD).click();
           cy.xpath(pastDueAlertLocators.PAST_DUE_ALERTS).scrollIntoView();
           cy.xpath(pastDueAlertLocators.PAST_DUE).click();
           
           cy.xpath(pastDueAlertLocators.TABLE_CELL).contains('td', NameData.InvestmentName).should('have.text', NameData.InvestmentName)
           cy.xpath(pastDueAlertLocators.TABLE_CELL).contains('td', NameData.InvestorName).should('have.text',NameData.InvestorName)
           
           cy.get(pastDueAlertLocators.SUMMARY_TITLE_VALUE).eq(1).then(function(PDA1){
           cy.log(PDA1.text())
           cy.xpath(pastDueAlertLocators.SUMMARY_TITLE_VALUE).eq(1).should('have.text', (PDA1.text()))
           })
        //}
      }
      //);
}
//}
export default PastDueAlertsFunctions