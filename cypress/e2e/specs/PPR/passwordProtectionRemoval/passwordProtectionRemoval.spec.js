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

// TC2
Then("I click on upload files button and upload Test Case 2 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC2pdf();
});

And("I verify the Correct Status for Test Case 2 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC2pdf();
});

// TC3
Then("I click on upload files button and upload Test Case 3 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC3pdf();
});

And("I verify the Correct Status for Test Case 3 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC3pdf();
});

// TC4
Then("I click on upload files button and upload Test Case 4 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC4pdf();
});

And("I verify the Correct Status for Test Case 4 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC4pdf();
});

// TC5
Then("I click on upload files button and upload Test Case 5 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC5pdf();
});

And("I verify the Correct Status for Test Case 5 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC5pdf();
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

// TC8
Then("I click on upload files button and upload Test Case 8 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC8pdf();
});

And("I verify the Correct Status for Test Case 8 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC8pdf();
});

// TC9
Then("I click on upload files button and upload Test Case 9 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC9pdf();
});

And("I verify the Correct Status for Test Case 9 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC9pdf();
});

// TC10
Then("I click on upload files button and upload Test Case 10 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC10pdf();
});

And("I verify the Correct Status for Test Case 10 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC10pdf();
});

// TC11
Then("I click on upload files button and upload Test Case 11 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC11pdf();
});

And("I verify the Correct Status for Test Case 11 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC11pdf();
});

// TC12
Then("I click on upload files button and upload Test Case 12 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC12pdf();
});

And("I verify the Correct Status for Test Case 12 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC12pdf();
});

// TC13
Then("I click on upload files button and upload Test Case 13 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC13pdf();
});

And("I verify the Correct Status for Test Case 13 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC13pdf();
});

// TC14
Then("I click on upload files button and upload Test Case 14 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC14pdf();
});

And("I verify the Correct Status for Test Case 14 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC14pdf();
});

// TC15
Then("I click on upload files button and upload Test Case 15 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC15pdf();
});

And("I verify the Correct Status for Test Case 15 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC15pdf();
});

// TC16
Then("I click on upload files button and upload Test Case 16 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC16pdf();
});

And("I verify the Correct Status for Test Case 16 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC16pdf();
});

// TC17
Then("I click on upload files button and upload Test Case 17 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC17pdf();
});

And("I verify the Correct Status for Test Case 17 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC17pdf();
});

// TC18
Then("I click on upload files button and upload Test Case 18 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC18pdf();
});

And("I verify the Correct Status for Test Case 18 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC18pdf();
});

// TC19
Then("I click on upload files button and upload Test Case 19 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC19pdf();
});

And("I verify the Correct Status for Test Case 19 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC19pdf();
});

// TC20
Then("I click on upload files button and upload Test Case 20 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC20pdf();
});

And("I verify the Correct Status for Test Case 20 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC20pdf();
});

// TC21
Then("I click on upload files button and upload Test Case 21 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC21pdf();
});

And("I verify the Correct Status for Test Case 21 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC21pdf();
});

// TC22
Then("I click on upload files button and upload Test Case 22 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC22pdf();
});

And("I verify the Correct Status for Test Case 22 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC22pdf();
});

// TC23
Then("I click on upload files button and upload Test Case 23 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC23pdf();
});

And("I verify the Correct Status for Test Case 23 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC23pdf();
});

// TC24
Then("I click on upload files button and upload Test Case 24 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC24pdf();
});

And("I verify the Correct Status for Test Case 24 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC24pdf();
});

// TC25
Then("I click on upload files button and upload Test Case 25 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC25pdf();
});

And("I verify the Correct Status for Test Case 25 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC25pdf();
});

// TC26
Then("I click on upload files button and upload Test Case 26 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC26pdf();
});

And("I verify the Correct Status for Test Case 26 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC26pdf();
});

// TC27
Then("I click on upload files button and upload Test Case 27 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC27pdf();
});

And("I verify the Correct Status for Test Case 27 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC27pdf();
});

// TC28
Then("I click on upload files button and upload Test Case 28 file", () => {
   processingFunctions.clickUploadFilesButton();
   passwordProtectionRemovalFunctions.uploadTC28pdf();
});

And("I verify the Correct Status for Test Case 28 pdf", () => {
   passwordProtectionRemovalFunctions.verifyTC28pdf();
});

        
        
        
     
  

