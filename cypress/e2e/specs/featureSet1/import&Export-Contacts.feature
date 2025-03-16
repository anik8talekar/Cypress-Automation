Feature: Import and Export - Contacts

      # Test Case ID: 1104167
      Scenario: User should be able to Export All Data
            Given I open the application
            When I click on existing engagement
            Then I click on Import & Export Data and open Contacts section
            And I click on Export All Data Button

      # Test Case ID: 1104180
      Scenario: User should be able to Import Data
            Given I open the application
            When I click on existing engagement
            Then I click on Import & Export Data and open Contacts section
            And I click on Import Data Button
            Then I upload multiple entities

      # Test Case ID: 1104181
      Scenario: User should be able to download Import Template
            Given I open the application
            When I click on existing engagement
            Then I click on Import & Export Data and open Contacts section
            And I click on Download Blank Import Template button
            Then I verify the Import Template is downloaded successfully