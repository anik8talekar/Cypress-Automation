Feature: CSV Extract

   # Test Case ID: 1094711
   Scenario: User should be able to select multiple documents for CSV Extract in Document Center
         Given I open the application
         When I click on existing engagement
         And I click on document Center and open documents section
         Then I select the documents for comparison
         And I click on CSV Data Extract option from Actions dropdown and verify the Sucesss Message
         Then I click on Download Extracts section and Download the CSV file

   # Test Case ID: 1789050
   Scenario: User should be able to verify Doc Center - Download Extracts tab Not Showing Proper Status Icons
         Given I open the application
         When I click on existing engagement
         And I click on document Center and open documents section
         Then I select the documents for comparison
         And I click on CSV Data Extract option from Actions dropdown and verify the Sucesss Message
         Then I click on Download Extracts section to verify the proper Status Icon
