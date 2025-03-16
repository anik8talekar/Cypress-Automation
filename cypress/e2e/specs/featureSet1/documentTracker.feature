Feature: Document Center - Document Tracker

   # Test Case ID: 1668386
   Scenario: User should be able to Add columns for User Input fields
         Given I open the application
         When I click on existing engagement
         And I navigate to Document Tracker tab
         Then I verify required columns are visible or not in the Fund Summary
         And I select an investor and verify the detail summary view
         Then I verify New Columns are visible or not

   # Test Case ID: 1668516
   Scenario: User should be able to verify Cutoff Calculation Modifications
         Given I open the application
         When I click on existing engagement
         And I navigate to Document Tracker tab
         Then I verify required cut off columns are visible or not in the Fund Summary

   # Test Case ID: 1673537
   Scenario: User should be able to verify Unselectable Underlying Fund Details
         Given I open the application
         When I click on existing engagement
         And I navigate to Document Tracker tab
         And I select an investor and verify the detail summary view
         Then I make sure fund cannot be selected if footnotes are not matched 

   # Test Case ID: 1673688
   Scenario: User should be able to verify Cutoff Calculation Modifications
         Given I open the application
         When I click on existing engagement
         And I navigate to Document Tracker tab
         Then I verify recieved column is right aligned and cutoff date column is left aligned

   # Test Case ID: 1673706
   Scenario: User should be able to verify Persist Grid User Preferences 
         Given I open the application
         When I click on existing engagement
         And I navigate to Document Tracker tab
         Then I select some columns from the dropdown and reload the page
         And I verify that the colums are still selected

   # Test Case ID: 1676689
   Scenario: User should be able to verify Saved Search filters 
         Given I open the application
         When I click on existing engagement
         Then I navigate to Document Tracker tab
         And I perform search operation
         Then I save the search pattern and hit reset grid
         And I apply saved filters and verify the result
         Then I delete the saved filter

