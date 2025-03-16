Feature: Engagement Creation

   # Test Case ID: 1076176
   Scenario: User should be able to Create New Engagement and Verify the Shards Feature
         Given I open the Application
         When I create a Brand New Engagement
         Then I search for newly created engagement
         And I click on Edit icon
         Then I verify that user should not be able to change the location
        