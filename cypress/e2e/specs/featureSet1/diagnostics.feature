Feature: Diagnostics

    # Test Case ID: 1107331
    Scenario: User should be able to select and Run Diagnostics on the Document from Document Center
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I search and select the document to Run Diagnostics
         Then I diagnose and verify the result

    # Test Case ID: 1198266
    Scenario: User should be able to select and Run Diagnostics on the Document from Review Screen
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I review the document and Run Diagnostics on it
   
   