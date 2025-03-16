Feature: Direct Connect

  # Test Case ID: 1085767,1085770,1085822
  Scenario: User should be able to set up Direct Connect Profile, Automap Map FTEs to BE
    Given I open the Application
    When I create a Brand New Engagement
    Then I click on newly created engagement
    And I import some Business Entities
    Then I click on Admin and open Engagement Settings
    And I click on Direct Connect section
    Then I click on Add Profile button to add the Direct Connect Profile
    And I verify that Direct Connect Profile is created Successfilly
    Then I click on Edit Icon of existing profile
    And I click on Create BE from TRACK FTE button
    Then I verify Mapping Status to be Auto mapped
    And I click on Save Profile button
    Then I click on Save and Close button

  # Test Case ID: 1085780
  Scenario: User should be able to Test Direct Connect Filters
    Given I open the application
    When I click on existing engagement
    Then I click on Admin and open Engagement Settings
    And I click on Direct Connect section
    Then I click on Edit Icon of existing profile
    And I verify the appropriate column names for Business Entities
    Then I apply some filters

  # Test Case ID: 1786549
  Scenario: User should be able to Download K-3 taxonomies from TRACK to be viewed on Taxonomy template
    Given I open the application
    When I click on existing engagement
    Then I click on Admin and open Engagement Settings
    And I click on Direct Connect section
    Then I click on Resync button to resync the Direct Connect Profile
    And I check that Resynced Profile is still working

  # Test Case ID: 1812263
  Scenario: User should be able to Test DirectConnect.CanManageDefaultTemplate Permissions
    Given I open the application
    When I click on existing engagement
    Then I click on Admin and open Engagement Settings
    And I click on Direct Connect section
    Then I click on Edit Icon of existing profile
    And I go to Allocable Item Templates
    Then I verify Presence of Master K3 Buttons
    And I Export Master K3 Template

  # Test Case ID: 1085767,1085770,1085822
  Scenario: User should be able to set up Direct Connect Profile, Manually Map FTEs to BE
    Given I open the Application
    When I create a Brand New Engagement
    Then I click on newly created engagement
    And I import some Business Entities
    Then I click on Admin and open Engagement Settings
    And I click on Direct Connect section
    Then I click on Add Profile button to add the Direct Connect Profile
    And I verify that Direct Connect Profile is created Successfilly
    Then I click on Edit Icon of existing profile
    And I filter out the Unmapped Business Entities
    Then I manually map those FTEs to BEs
    And I verify Mapping Status to be Manually mapped
    Then I click on Save and Close button