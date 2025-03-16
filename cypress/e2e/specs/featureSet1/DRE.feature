Feature: DRE

   # Test Case ID: 1103655
   Scenario: User should be able to enable DRE Function from the Engagement Management Screen
         Given I open the application
         When I click on existing engagement
         Then I click on Admin and open Engagement Settings
         And I enable the DRE Function

   # Test Case ID: 1105348
   Scenario: User should be able to verify Alternate Investor Name and TIN are emphasized when DRE toggle switched on 
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I search for the DRE Document
         Then I verify that orange circle indicator is present under those coloumns

    # Test Case ID: 1105357     
    Scenario: User should be able to verify Alternate Investor Name and TIN is displayed when DRE toggle switched on 
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I search for the DRE Document
         Then I verify that code H2 is present under part II