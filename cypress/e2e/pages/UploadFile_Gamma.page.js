import UploadFileLocatorsGamma from "../locator files/UploadFile_Gamma.locators";
import UploadFileScreenLocators from "../locator files/UploadFileScreen.locators";
import 'cypress-file-upload'
import 'cypress-wait-until'

var uploadFilesLocators = new UploadFileLocatorsGamma();
var uploadFileScreenLocators = new UploadFileScreenLocators()

class UploadFilesFunctionsGamma{

    ClickOnUploadFilesTab(){
        cy.contains(' Upload Files ').click()
    }

     //Upload file Function 
    // open Upload file page and Upload the file through the parameter fileName
    uploadFile(fileName){
        uploadFilesLocators.locators.uploadFileMenu().click()
        uploadFilesLocators.locators.uploadFileBtn().click()
        uploadFilesLocators.locators.uploadFileArea().selectFile(fileName,{force: true})
        uploadFilesLocators.locators.closeBtn().click();
    }

    //Verify status Function 
    //wait until the status is Complete 
    verifyStatus(){
        cy.waitUntil(() => {
            return uploadFilesLocators.locators.currentStatusField().invoke('text').then((actualStatus)=>{
    
               switch(actualStatus){
                case ' Processing Requested\n':
                    
                    break;
                case ' Processing\n':
                        
                        break;
                case ' Complete\n':
                    
                    cy.get('[aria-rowindex="1"] > [aria-describedby="dx-col-15"]', { timeout: 30000 }).should('have.text', ' Complete\n')
                    uploadFilesLocators.locators.expandBtn().click({ force: true });
                    
                    break;
                case ' Failed\n':
                    
                    if (uploadFilesLocators.locators.fileNameField() != 'password_protected _new.pdf'){
                        uploadFilesLocators.locators.expandBtn().click();
                        //this.verifyValues()
                    }else{
                        cy.log("file still in "+ actualStatus + "status 4")
                    }
                    break;
                
                default:
                    
                    break;
            }
        })
        } , {timeout: 600000, interval: 10000}); 
    }

   /* verifyValues(){
        uploadFilesLocators.locators.fileNameField().its('length').then((files)=>{
            var numberOfFiles = files.valueOf()
            cy.log(numberOfFiles)
            for(var i=0; i<numberOfFiles; i++){
                uploadFilesLocators.locators.fileNameField().eq(i).should('be.visible')
                uploadFilesLocators.locators.scheduleField().eq(i).should('be.visible')
                uploadFilesLocators.locators.statusField().eq(i).should('have.text',' Complete\n')
                uploadFilesLocators.locators.stepIndicatorField().eq(i).should('be.visible')
                uploadFilesLocators.locators.startingPageField().eq(i).contains(/1|[1-9]/)
                uploadFilesLocators.locators.pageCountField().eq(i).contains(/1|[1-14]/)
            }
        });

    }*/
    expand(){
        cy.xpath("//tr[@aria-rowindex='4']//td[@aria-colindex='1' and @aria-label='Expand']").click();
    }
    verifyValues(){
        uploadFilesLocators.locators.fileNameField().its('length').then((files)=>{
            let numberOfFiles = files.valueOf()
            //cy.log(numberOfFiles)
            for(var i=0; i<numberOfFiles; i++){
                this.validateFieldName(i)
                this.validateScheduleField(i)
                this.validateStatusField(i)
                this.validateStepIndicatorFiled(i)
                //this.validateStartingPage()
                //uploadFilesLocators.locators.pageCountField().eq(i).should('have.text','14')
            }
        });   
        }
    
        validateFieldName(n){
            uploadFilesLocators.locators.fileNameField().eq(n).should('be.visible')
        }
    
        validateScheduleField(n){
            uploadFilesLocators.locators.scheduleField().eq(n).should('be.visible')
        }
        
        validateStatusField(n){
            uploadFilesLocators.locators.statusField().eq(n).should('have.text',' Complete\n')
        }
    
        validateStepIndicatorFiled(n){
            uploadFilesLocators.locators.stepIndicatorField().eq(n).should('be.visible')
        }
    
        validateStartingPage(){
            //this.elements.uploadFileMenu().click({ force: true });
            //this.elements.expandBtn().click({force: true})
            uploadFilesLocators.locators.fileNameField().its('length').then((files)=>{
                let numberOfFiles = files.valueOf()
                
                if(numberOfFiles == 1){
                    uploadFilesLocators.locators.startingPageField().eq(0).contains(/1|[1-10]/)
                }else{
                    for(var i=0; i<numberOfFiles-1; i++){
                        uploadFilesLocators.locators.pageCountField().eq(i).invoke('text').then(parseInt).as('pageCountNumber')
                        uploadFilesLocators.locators.startingPageField().eq(i+1).invoke('text').then(parseInt).as('nextStartingPageNumber')
                        cy.then(function(){
                            expect(this.pageCountNumber + 1).to.be.eq(this.nextStartingPageNumber)
                        })
                    }
                }
            });
        }
    clickFileLink(){
        uploadFilesLocators.locators.fileNameField().eq(0).click({force:true})
        /*uploadFilesLocators.locators.fileNameField().its('length').then((files)=>{
            var numberOfFiles = files.valueOf()
            cy.log(numberOfFiles)
            for(var i=0; i<numberOfFiles; i++){
                uploadFilesLocators.locators.fileNameField().eq(i).click({force:true})
            }
        })*/
    }
}

export default UploadFilesFunctionsGamma;