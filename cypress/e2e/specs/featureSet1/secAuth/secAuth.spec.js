import ProcessingFunctions from "../../../pages/Processing.page";
import DataGenerator from "../../../../support/faker_test";
import SecAuthFunctions from "../../../pages/SecAuth.Page";

var processingFunctions = new ProcessingFunctions
var secAuthFunctions = new SecAuthFunctions


Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})

When("I click on Admin and open Security Authorization Tab", ()=>{
  secAuthFunctions.openSecAuth();
})

Then("I verify user grid is visible", ()=>{
  secAuthFunctions.verifyUserGrid();
})

Then("I search for the user", ()=>{
   secAuthFunctions.searchUser();
})

And("I edit details of that user and make sure GUID is not changable", ()=>{
   secAuthFunctions.editDetails();
})

And("I give access to that user to the new engagement", ()=>{
 secAuthFunctions.giveAccess();
})

And("I edit user group of the user", ()=>{
  secAuthFunctions.editUserGroup();
})

And("I extend access to that user to the new engagement", ()=>{
  secAuthFunctions.extendAccess();
})

And("I remove access of that user for the new engagement", ()=>{
   secAuthFunctions.removeAccess();
})

And("I provide new permissions to the user", ()=>{
   secAuthFunctions.provideNewPermission();
})

And("I provide additional permissions to the user", ()=>{
   secAuthFunctions.proideAdditionalPermission();
})

And("I remove new permissions of the user", ()=>{
   secAuthFunctions.removePermissions();
})