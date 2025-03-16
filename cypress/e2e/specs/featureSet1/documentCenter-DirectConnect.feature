Feature: Document Center - Direct Connect

   # Test Case ID: 1098798
   Scenario: User should be able to Verify data synced correctly into TRACK
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open Direct Connect section
         And I select the Direct connect profile to view associated documents and send them to TRACK
         Then I click on Send to TRACk button and verify the success message