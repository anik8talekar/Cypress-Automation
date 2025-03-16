Feature: Import and Export - Business Entities

      # Test Case ID: 1094745
      Scenario: User should be able to download Import Template
            Given I open the application
            When I click on existing engagement
            Then I click on Import & Export Data and open Business Entities section
            And I click on Download Blank Import Template button
            Then I verify the Import Template is downloaded successfully

      # Test Case ID: 1094745
      Scenario: User should be able to Import multiple entities
            Given I open the application
            When I click on existing engagement
            Then I click on Import & Export Data and open Business Entities section
            And I click on Import Data Button
            Then I upload multiple entities

      # Test Case ID: 1094753
      Scenario: User should be able to Export All Data
            Given I open the application
            When I click on existing engagement
            Then I click on Import & Export Data and open Business Entities section
            And I click on Export All Data Button

      # Test Case ID: 1095519
      Scenario: User should be able to Verify 'Is Foreign or Domestic' and 'Last Updated' column Filters
            Given I open the application
            When I click on existing engagement
            Then I click on Import & Export Data and open Business Entities section
            And I apply and verify those filters

