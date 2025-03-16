Feature: Import and Export - Expected Documents

   # Test Case ID: 1093681
   Scenario: User should be able to download Import Template
         Given I open the application
         When I click on existing engagement
         Then I click on Import & Export Data and open Expected Documents section
         And I click on Download Blank Import Template button
         Then I verify the Import Template is downloaded successfully

   # Test Case ID: 1093687
   Scenario: User should be able to import multiple entities
         Given I open the application
         When I click on existing engagement
         Then I click on Import & Export Data and open Expected Documents section
         And I click on Import Data Button
         Then I upload multiple entities

   # Test Case ID: 1093691
   Scenario: User should be able to Export All Data
         Given I open the application
         When I click on existing engagement
         Then I click on Import & Export Data and open Expected Documents section
         And I click on Export All Data Button

    # Test Case ID: 1093692      
    Scenario: User should be able to verify filters for 'Schedule','Category','Direct Connect','Projected Received Date' and 'Actual Received Date'
         Given I open the application
         When I click on existing engagement
         Then I click on Import & Export Data and open Expected Documents section
         And I apply and verify all the filters 
