Feature: Direct Connect - Standard Descriptions

    #Test Case ID: 1787023
    Scenario: The User should able to select the Standard Descriptions template in the Direct Connect
        Given I Open the Application
        When I click on existing engagement
        And I click on Admin side menu and click on engagaement settings tab
        Then I click on Direct Connect tab
        And I add a new Direct Connect Profile
        Then I verify the Standard Descriptions Checkbox is enabled or not
        And I save the Direct Connect Profile