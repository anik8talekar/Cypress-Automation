import CustomFileNameLocators from "../locator files/CustomFileName.locator";

var customFileNameLocators = new CustomFileNameLocators

class CustomFileNameFunctions{
clickOnCustomPDFName(){
    cy.xpath(customFileNameLocators.CUSTOM_PDF_NAME).click();
}
turnOnExportCustomPDFNaming(){
    cy.xpath(customFileNameLocators.CHECKBOX).then(($button) => { const isButtonOn = $button.attr('aria-checked') === 'true'; 
    if(!isButtonOn){ 
    cy.xpath(customFileNameLocators.CHECKBOX).click(); 
    } 
  });
  cy.wait(5000);
}
clickOnSaveSelectedFields(){
    cy.xpath(customFileNameLocators.SAVE_SELECTED_FIELDS).click();
}
makePOSTRequest(){
    cy.getTestData().then((data)=>{
        cy.window().then((win)=>{
          const token = win.localStorage.getItem('accessToken')
          cy.log(token)
          cy.request(
            { 
                method: 'POST', 
                url: data['CUSTOM_FILE_NAME_API_URL'],
                headers: {
                     Authorization:'Bearer '+token,
                    Engagementid: data['ENGAEMENT_ID']
                },
                body:[
                  {
                      "availableColumnId": 1,
                      "fieldLabel": "File Name",
                      "fieldDescription": "File Name",
                      "sortOrder": 0,
                      "userDefined": false,
                      "value": null
                  }
              ],
                failOnStatusCode : false,
            })
            .as("response")
            .then((response)=>{ 
                expect(response.status).to.equal(200)
                cy.log(JSON.stringify(response.payload))
            })
       }) 
      })     
}
}
export default CustomFileNameFunctions;