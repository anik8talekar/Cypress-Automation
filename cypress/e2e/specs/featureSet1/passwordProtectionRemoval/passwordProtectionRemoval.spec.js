import PasswordProtectionRemovalFunctions from "../../../pages/passwordProtectionRemoval.page";
import ProcessingFunctions from "../../../pages/Processing.page";

var processingFunctions = new ProcessingFunctions();
var passwordProtectionRemovalFunctions = new PasswordProtectionRemovalFunctions();

Given("I open the application", () => {
   processingFunctions.openTheApp();
});

When("I click on existing engagement", () => {
   processingFunctions.openEngagement();
});

And("I open upload files section", () => {
   processingFunctions.openUploadFiles();
});

// TC1
Then("I click on upload files button and upload Test Case 1 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC1pdf();
});

And("I verify the Correct Status for Test Case 1 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC1pdf();
});

// TC6
Then("I click on upload files button and upload Test Case 6 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC6pdf();
});

And("I verify the Correct Status for Test Case 6 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC6pdf();
});

// TC7
Then("I click on upload files button and upload Test Case 7 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC7pdf();
});

And("I verify the Correct Status for Test Case 7 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC7pdf();
});

// TC12
Then("I click on upload files button and upload Test Case 12 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC12pdf();
});

And("I verify the Correct Status for Test Case 12 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC12pdf();
});

//unlock zip files

Then("I click on upload files button and upload password protected zip file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadZipFile();
   passwordProtectionRemovalFunctions.unlockZipFile();   
});

And("I verify that zip file is unlocked and getting processed", () => {
   passwordProtectionRemovalFunctions.verifyZipUnlocked();
});

//unlock pdf files

Then("I click on upload files button and upload password protected pdf file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadPdfFile();
   passwordProtectionRemovalFunctions.unlockPdfFile();   
});

And("I verify that pdf file is unlocked and getting processed", () => {
   passwordProtectionRemovalFunctions.verifyPdfUnlocked();
   passwordProtectionRemovalFunctions.verifypdfStatus();
});

        
        
        
     
  

