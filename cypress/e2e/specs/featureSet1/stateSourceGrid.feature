Feature: SSI Grid/State K-1: State Source grid

   # Test Case ID: 1577997 and 1784767
   Scenario: User should be able to Add grouping mechanism for column
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I search and open the required document
         Then I select State Source from the dropdown
         And I select column from column chooser

   # Test Case ID: 1581969
   Scenario: User should be able to Change allocable item creation logic for Federal document on Ready for Track review button click
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I search and open the required document
         Then I select State Source from the dropdown
         And I click on Ready for TRACK review button

   # Test Case ID: 1581976
   Scenario: User should be able to Add Custom Taxonomy mappings 
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I search and open the required document
         Then I select State Source from the dropdown
         And I verify that Taxonomy row is present in the grid 

   # Test Case ID: 1582020
   Scenario: User should be able to Attach master row data 
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open Direct Connect section
         And Then I select Direct Connect Profile
         Then I select a document and click on Review Allocable Items button
         And I select State Taxonomy Template and verify the amount column and its values

   # Test Case ID: 1582050
   Scenario: User should be able to Fetch proper value on TRACK export 
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open Direct Connect section
         And Then I select Direct Connect Profile
         Then I select a document and click on Send to TRACK button

   # Test Case ID: 1582070
   Scenario: User should be able to Reapply Taxonomy Template
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I search and open the required document
         Then I select State Source from the dropdown
         And I click on Ready for TRACK review button
         Then I select TRACK allocable items from dropdown
         And I click on Reapply Template button and verify the message

   # Test Case ID: 1582065 and 1608220
   Scenario: User should be able to Clear Master State Source Row table on unmatch operation
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I search and open the Arizona document
         Then I match unmatch and rematch the Arizona document
         And I edit the metadata of Arizona document
         Then I delete the document

   # Test Case ID: 1582054 and 1582042 , 1582002
   Scenario: User should be able to Add endpoint for undo for setting default value
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I search and open the Upper Tier One document
         Then I select State Source from the dropdown
         And I expand Arizona group to edit the default values
         Then I undo the edited values and verify the default value is present