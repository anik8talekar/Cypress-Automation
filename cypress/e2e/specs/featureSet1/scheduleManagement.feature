Feature: Schedule Management

   # Test Case ID: 1095523
   Scenario: User should be able to Verify Schedule Management Exports work as expected
         Given I open the application
         When I click on existing engagement
         Then I click on Admin and open Schedule Management Screen
         And I click on Schedule Data Export Icon to download Schedule Data
  
  # Test Case ID: 1095523
  Scenario: User should be able to Verify Migrate Schedule Data lists all schedules from Stage and has an option to Migrate Schedule data in Actions column
         Given I open the application
         When I click on existing engagement
         Then I click on Admin and open Schedule Management Screen
         And I open Migrate Schedule Data section
         Then I verify Migrate Schedule Data is working fine

  # Test Case ID: 1793071
  Scenario: User should be able to Verify file name in Check Import Status Tab
         Given I open the application
         When I click on existing engagement
         Then I click on Admin and open Schedule Management Screen
         And I click on Check Import Status tab 
         Then I verify the file names are present in the file namre column
