import Form8621P3Locators from "../locator files/Form8621P3.locators";

var form8621P3Locators = new Form8621P3Locators

import DataGenerator from "../../support/faker_test";

var testdata;

before(()=>{
  cy.writeFile("cypress/fixtures/testdata.json",
  DataGenerator.generatetestData()
  );
  cy.readFile("cypress/fixtures/testdata.json").then((data)=>{
    testdata=data;
  });
});


class Form8621P3Functions{
    ClickOnPreviewIcon(){
        cy.get(form8621P3Locators.PREVIEW_ICON).eq(1).click({force: true})
    }
    ClickOnCheckbox(){
        cy.xpath(form8621P3Locators.EDIT_CHECKBOX).eq(0).click()
    }
    EditTextField(){
        cy.xpath(form8621P3Locators.EDIT_TEXT_FIELD).eq(0).clear()
        cy.wait(3000)
        cy.xpath(form8621P3Locators.EDIT_TEXT_FIELD).eq(0).type(testdata.firstName)
    }
    EditNumericalField(){
        cy.xpath(form8621P3Locators.EDIT_TEXT_FIELD).eq(1).clear()
        cy.wait(3000)
        cy.xpath(form8621P3Locators.EDIT_TEXT_FIELD).eq(1).type(testdata.randomNumber)
    }
    EditDateField(){
        cy.get(form8621P3Locators.EDIT_DATE).eq(0).clear()
        cy.wait(3000)    
    }
    TypeCurrentDate(){
     // Get the current date
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
 
    const formattedToday = `${mm}/${dd}/${yyyy}`;
 
    // Select the current date
    // Assuming the date picker allows typing the date
    cy.get(form8621P3Locators.EDIT_DATE).eq(0).type(formattedToday);

    // Assert that both dates match
    // expect(expectedDate).to.equal(formattedToday);
    }
    FillEmptyTextField(){
        cy.xpath(form8621P3Locators.EMPTY_TEXT_FIELD).eq(0).type(testdata.randomNumber)
    }
    Expand8621InstancesGrid(){
        cy.get(form8621P3Locators.EXPAND_GRID).eq(2).click()
    }
    Expand8621InstancesGridExecReview(){
        cy.get(form8621P3Locators.EXPAND_GRID).eq(1).click()
    }
    VerifyEditedValues(){
        cy.fixture('testdata').then((data) => {
            cy.wrap(data.randomNumber).as('randomNumber');
        });
        cy.get('@randomNumber').then((randomNumber) => {
        cy.log(`The random number is: ${randomNumber}`);

        cy.get(form8621P3Locators.VERIFY_GRID).should('contain',' Form 8621 ')

        cy.get(form8621P3Locators.VERIFY_RANDOM_NUMBER).eq(11).should('contain', randomNumber.toString());

        cy.fixture('testdata').then((data) => {
            cy.wrap(data.firstName).as('firstName');
        });
        cy.get('@firstName').then((firstName) => {
        cy.get(form8621P3Locators.VERIFY_RANDOM_NUMBER).eq(9).should('contain', firstName.toString())
        })  
    })
    }
    VerifyK3Grid(){
        cy.fixture('testdata').then((data) => {
            cy.wrap(data.randomNumber).as('randomNumber');
        });
        cy.get(form8621P3Locators.VERIFY_K3_GRID).should('contain',' Form 8621 ')
        cy.get(form8621P3Locators.VERIFY_K3_GRID).should('contain', '695');
        cy.fixture('testdata').then((data) => {
            cy.wrap(data.firstName).as('firstName');
        });
        cy.get('@firstName').then((firstName) => {
        cy.get(form8621P3Locators.VERIFY_K3_GRID).should('contain', firstName.toString())
        })
    }
    ClickOnReviewIcon8621Instance(){
        cy.get(form8621P3Locators.PREVIEW_ICON_EXEC_REVIEW).eq(4).click({force: true})
    }
    VerifyExecReviewGrid(){
        cy.fixture('testdata').then((data) => {
            cy.wrap(data.randomNumber).as('randomNumber');
        });
        cy.get('@randomNumber').then((randomNumber) => {
        cy.log(`The random number is: ${randomNumber}`);

        cy.get(form8621P3Locators.VERIFY_EXEC_REVIEW_GRID).should('contain',' Form 8621 ')

        cy.get(form8621P3Locators.VERIFY_EXEC_REVIEW_GRID).should('contain', randomNumber.toString());
        cy.fixture('testdata').then((data) => {
            cy.wrap(data.firstName).as('firstName');
        });
        cy.get('@firstName').then((firstName) => {
        cy.get(form8621P3Locators.VERIFY_EXEC_REVIEW_GRID).should('contain', firstName.toString())
        })
    })
    }
}
export default Form8621P3Functions;