Feature: Canoe Integration

     # Test Case ID: 1097069
     Scenario: User should be able to verify that only manager and above can change engagement settings
          Given I open the application
          When I click on existing engagement
          Then I click on Admin and open Engagement Settings
          And I open Document Import and Export section
          Then I verify that only manager and above can change engagement settings

     # Test Case ID: 1097080
     Scenario: User should be able to add Client Id/secret
          Given I open the application
          When I click on existing engagement
          Then I click on Admin and open Engagement Settings
          And I open Document Import and Export section
          Then I click on Canoe Settings
          And I click on Add Client Credential Button
          Then I type Client ID and Client Secret and click on Save button

     # Test Case ID: 1097103
     Scenario: User should be able to verify that Client secret is not visible to user
          Given I open the application
          When I click on existing engagement
          Then I click on Admin and open Engagement Settings
          And I open Document Import and Export section
          Then I click on Canoe Settings
          And I make sure that Client secret is not visible

     #   Test Case ID: 1097094
     Scenario: User should be able to delete Client Id/secret
          Given I open the application
          When I click on existing engagement
          Then I click on Admin and open Engagement Settings
          And I open Document Import and Export section
          Then I click on Canoe Settings
          And I select the Client ID and Secret
          Then I delete that Client ID and Secret

     # Test Case ID: 1097109
     Scenario: User should be able to verify that Documents automatically processed when configuration switched on
          Given I open the application
          When I click on existing engagement
          Then I click on Admin and open Engagement Settings
          And I open Document Import and Export section
          Then I click on Canoe Settings
          And I verify that only manager and above can change engagement settings
          Then I click on Add Client Credential button
          And I type Client ID and Client Secret and click on Save button
          Then I turn the Configuration switch on
          And I go to Available Documents to send a Document to process
          Then I verify that Documents are processing