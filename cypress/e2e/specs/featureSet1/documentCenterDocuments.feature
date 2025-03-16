Feature: Document Center - Documents

   # Test Case ID: 1092104
   Scenario: User should be able to compare documents 
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I select the documents for comparison 
         Then I compare the selected documents side by side
      
   # Test Case ID: 1092106
   Scenario: User should be able to unhide/hide zero on compare documents screen
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I select the documents for comparison 
         Then I compare the selected documents side by side
         And I unhide and verify zero values are visible by turning toggle button yes from no
         Then I hide and verify zero values are not visible by turning toggle button no from yes

   # Test Case ID: 1092178 and 1814063
   Scenario: User should be able to verify doc grid counter
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open executive review section
         And I verify the counter elements under summary

   # Test Case ID: 1092256
   Scenario: User should be able to verify reset grid feature
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I drag and drop the columns to change the default sequence
         Then I reset the grid and verify the sequence

   # Test Case ID: 1092257 
   Scenario: User should be able to view duplicative document instances
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I click on display matching duplicates icon
         Then I verify the matching duplicates

   # Test Case ID: 1092891
  Scenario: User should be able to export grid data
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I click on export all data button and download the file

  # Test Case ID: 1092889
  Scenario: User should not be able to delete approved documents
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I filter out the approved documents
         Then I try to delete approved document

# Test Case ID: 1092895
 Scenario: User should be able to export to tax docs
           Given I open the application
           When I click on existing engagement
           Then I click on document Center and open documents section
           And I select the documents for comparison
           Then I file them to tax docs       
   
  # Test Case ID: 1092343
  Scenario: User should be able to delete pending documents
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I filter out the pending documents
         Then I select and delete the pending documents
