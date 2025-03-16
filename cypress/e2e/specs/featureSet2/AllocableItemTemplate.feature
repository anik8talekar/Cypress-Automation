Feature: Allocable Item Template with Standard and Non-Standard Description

#Test Case ID: 1788098
Scenario: User should able to create a new Allocable Item Template with Standard Description
    Given I Open the Application
    When I click on existing engagement
    And I click on the Admin section
    Then I click on the Direct Connect
    And I add the Direct Connect Profile
    Then I edit the Direct Connect profile
    # And I create BE from TRACK FTE and import it
    Then I go to Allocable Item Template section
    And I add a new Allocable Template
    Then I map the Allocable Item Templates

#Test Case ID: 1788098
Scenario: User should able to create a new Allocable Item Template without Standard Description
    Given I Open the Application
    When I click on existing engagement
    And I click on the Admin section
    Then I click on the Direct Connect
    And I add the Direct Connect Profile without Standard Description
    Then I edit the newly added Direct Connect profile
    # And I create BE from TRACK FTE and import it
    Then I go to Allocable Item Template section
    And I add a new Allocable Template
    Then I map the Allocable Item Templates without Standard Description