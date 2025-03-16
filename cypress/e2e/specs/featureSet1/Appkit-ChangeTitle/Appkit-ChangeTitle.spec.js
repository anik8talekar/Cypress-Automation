import ProcessingFunctions from "../../../pages/Processing.page";
import SecAuthFunctions from "../../../pages/SecAuth.Page";
import AppkitChangeTitleFucntions from "../../../pages/Appkit-ChangeTitle.page";

var processingFunctions = new ProcessingFunctions
var secAuthFunctions = new SecAuthFunctions
var appkitChangeTitleFucntions = new AppkitChangeTitleFucntions


Given("I open the application", ()=>{
   processingFunctions.openTheApp();
})

When("I click on Admin and open Security Authorization Tab", ()=>{
  secAuthFunctions.openSecAuth();
})

Then("I click on Pending Requests Tab", ()=>{
   appkitChangeTitleFucntions.openPendingRequests();
})

And("I verify the titles", ()=>{
appkitChangeTitleFucntions.verifyTitles();
})

Then("I verify the count of both Tiles", ()=>{
    appkitChangeTitleFucntions.verifyTileCount();
})