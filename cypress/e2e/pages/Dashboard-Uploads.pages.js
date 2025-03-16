import DashboardUploadsLocators from "../locator files/Dashboard-Uploads.locators";
 
var dashboardUploadsLocators = new DashboardUploadsLocators
 
class DashboardUploadFunctions{
    ClickOnUploadButton(){
        cy.wait(2000)
        cy.get(dashboardUploadsLocators.UPLOAD_BUTTON).contains(' Upload ').click({force: true}).attachFile('2021 George Bluth K1.pdf',{subjectType:'drag-n-drop'})
        cy.wait(2000)
    }
    VerifyFileName(){
        cy.get(dashboardUploadsLocators.VERIFY_UPLOADED_FILE_NAME).should('contain','Recently Uploaded Files')
    }
     UploadEXEFile(){
        cy.wait(2000)
        cy.get(dashboardUploadsLocators.UPLOAD_BUTTON).contains(' Upload ').click({force: true}).attachFile('SpecSync.AzureDevOps.Console.3.4.14.zip',{subjectType:'drag-n-drop'},{timeout: 60000})
        cy.wait(2000)
    }
    VerifyErrorMessage(){
        cy.get(dashboardUploadsLocators.LARGE_FILE_ERROR_MSG).should('contain','ERROR')
        cy.get(dashboardUploadsLocators.LARGE_FILE_ERROR_MSG).should('contain',' File is too large ')
    }
    ClickOnShowDetailsButton(){
        cy.get(dashboardUploadsLocators.SHOW_DETAILS_BUTTON).eq(3).click()
    }
    VerifyUploadFilesTab(){
        cy.getTestData().then((data)=>{
        cy.xpath(dashboardUploadsLocators.UPLOAD_FILES_BUTTON).eq(0).should('contain',data['VerifyUploadFilesTab'])
        })
    }
 
}
export default DashboardUploadFunctions;