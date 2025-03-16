/// <reference types= "cypress" />
import DashboardNullStateFunctions from "../../../pages/DashboardNullState.page";

var dashboardNullStateFunctions = new DashboardNullStateFunctions()


Given("I Open the application", () => {
    dashboardNullStateFunctions.openTheApp()
})

When("I Click on the existing engagement", () => {
    dashboardNullStateFunctions.openEngagement()
})

Then("I Verify the initial empty state of the Upload Widget", () => {
    dashboardNullStateFunctions.VerifyEmptyWidget()
})

And("I verify the Title of the Upload Widget", () => {
    dashboardNullStateFunctions.VerifyUploadWidgetTitle()
})

Then("I verify the Subtitle of the Upload Widget", () => {
    dashboardNullStateFunctions.VerifyUploadWidgetSubtitle()
})

And("I upload the file under the upload section of the Upload Widget", () => {
    dashboardNullStateFunctions.UploadFile()
})

Then("I verify the uploaded file under the upload section of the Upload Widget", () => {
    dashboardNullStateFunctions.VerifyUploadedFile()
})

And("I verify the Show Details button of the Upload Widget", () => {
    dashboardNullStateFunctions.VerifyShowDetailsButton()
})

Then("I Verify the initial empty state of the Expected, Actual and Prior Year Widget", () => {
    dashboardNullStateFunctions.VerifyEmptyActualPriorYearWidget()
})

And("I verify the Title of the Expected, Actual and Prior Year Widget", () => {
    dashboardNullStateFunctions.VerifyActualPriorYearTitle()
})

Then("I verify the Infomartion of the Expected, Actual and Prior Year Widget", () => {
    dashboardNullStateFunctions.VerifyActualPriorYearInfo()
})

And("I verify the Details Link of the Expected, Actual and Prior Year Widget", () => {
    dashboardNullStateFunctions.VerifyActualPriorYearDetailsLink()
})

Then("I Verify the initial empty state of the Cutoff Analyzer Widget", () => {
    dashboardNullStateFunctions.VerifyEmptyCutoffAnalyzerWidget()
})

And("I verify the Title of the Cutoff Analyzer Widget", () => {
    dashboardNullStateFunctions.VerifyCutoffAnalyzerTitle()
})

Then("I verify the Infomartion of the Cutoff Analyzer Widget", () => {
    dashboardNullStateFunctions.VerifyCutoffAnalyzerInfo()
})

And("I verify the Details Link of the Cutoff Analyzer Widget", () => {
    dashboardNullStateFunctions.VerifyCutoffAnalyzerDetailsLink()
})

And("I verify the Upload Link of the Cutoff Analyzer Widget", () => {
    dashboardNullStateFunctions.VerifyCutoffAnalyzerUploadLink()
})

Then("I Verify the initial empty state of the Documents Widget", () => {
    dashboardNullStateFunctions.VerifyEmptyDocumentsWidget()
})

And("I verify the Title of the Documents Widget", () => {
    dashboardNullStateFunctions.VerifyDocumentsWidgetTitle()
})

Then("I verify the Information of the Documents Widget", () => {
    dashboardNullStateFunctions.VerifyDocumentsWidgetInfo()
})

And("I verify the Details Link of the Documents Widget", () => {
    dashboardNullStateFunctions.VerifyDocumentsWidgetDetailsLink()
})

Then("I verify the Upload Link of the Documents Widget", () => {
    dashboardNullStateFunctions.VerifyDocumentsWidgetUploadLink()
})

Then("I Verify the initial empty state of the Diagnostics Widget", () => {
    dashboardNullStateFunctions.VerifyEmptyDiagnosticsWidget()
})

And("I verify the Title of the Diagnostics Widget", () => {
    dashboardNullStateFunctions.VerifyDiagnosticsWidgetTitle()
})

Then("I verify the Information of the Diagnostics Widget", () => {
    dashboardNullStateFunctions.VerifyDiagnosticsWidgetInfo()
})

And("I verify the Document Center Link of the Workpapers Widget", () => {
    dashboardNullStateFunctions.VerifyDiagnosticsDocumentCenterLink()
})

Then("I Verify the initial empty state of the New Jurisdictions Widget", () => {
    dashboardNullStateFunctions.VerifyNewJurisdictionsWidget()
})

And("I verify the Title of the New Jurisdictions Widget", () => {
    dashboardNullStateFunctions.VerifyNewJurisdictionsWidgetTitle()
})

Then("I verify the Information of the New Jurisdictions Widget", () => {
    dashboardNullStateFunctions.VerifyNewJurisdictionsWidgetInfo()
})

And("I verify the Toggle Button of the New Jurisdictions Widget", () => {
    dashboardNullStateFunctions.VerifyNewJurisdictionsWidgetToggle()
})

And("I verify the Toggle Button of the New Jurisdictions Widget", () => {
    dashboardNullStateFunctions.VerifyNewJurisdictionsWidgetUploadLink()
})

Then("I verify the Upload Link of the New Jurisdictions Widget", () => {
    dashboardNullStateFunctions.VerifyNewJurisdictionsWidgetUploadLink()
})

And("I verify the Details Link of the New Jurisdictions Widget", () => {
    dashboardNullStateFunctions.VerifyNewJurisdictionsWidgetDetailsLink()
})