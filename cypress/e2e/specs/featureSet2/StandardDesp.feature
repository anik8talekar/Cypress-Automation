Feature: Standard Description

# Test Case ID: 1793895
Scenario: Document Review - SSI Grid: Honor standard description selection

    Given I Open the Application
    When I click on existing engagement
    And I click on Admin side menu and click on engagaement settings tab
    Then I click on Direct Connect tab 
    And I click on edit button under actions column and Click on Allocable Item Templates tab
    Then I Check for Standard Description & Standard Description if Negative Column is Present
    And I go to State tab from Allocable Item Template view
    Then I Check for Default Federal Standard Description & Default Federal Standard Description if Negative Column is Present

# Test Case ID: 1796726 & 1796719
Scenario: Functional - Taxonomy Template Selection and Editing in Direct Connect Profile

    Given I Open the Application
    When I click on existing engagement
    And I click on Admin side menu and click on engagaement settings tab
    Then I click on Direct Connect tab 
    And I click on edit button under actions column and Click on Allocable Item Templates tab
    And I Select Schedule K1 from Allocable Item Templates tab
    Then I Edit some of the fields in the grid from the row dropdowns for Schedule K1
    And I Select Schedule K3 from Allocable Item Templates tab
    Then I Edit some of the fields in the grid from the row dropdowns for Schedule k3
    And I Click on Save Profile Button

# # Test Case ID: 1793843
# Scenario: Document Review - TRACK Allocable Item grid - Federal: Honor standard description selection- Functional Test cases

#     Given I Open the Application
#     When I click on existing engagement for TRACK Allocable Item grid
#     And I go to Document Center Documents tab 
#     Then I Choose a Matched Fed K1 Doc & go to its review page
#     And I go to view by dropdown & choose TRACK Allocable Items Option
#     Then I Check for TRACK Taxonomy Description Column is Present