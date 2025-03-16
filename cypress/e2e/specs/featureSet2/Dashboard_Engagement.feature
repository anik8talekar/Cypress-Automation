Feature: Dashboard Engagement

    # Test Case ID: 1650718
    Scenario: User Should be able to Allow to change engagement in breadcrumbs

        Given I Open the Application
        When I click on existing engagement
        And I click on dropdown icon besides the Engagement Name from Dashboard
        And I Select the same Engagement which we are on
        Then I Verify we stays on the same Engagement
        And I Choose different Engagement from dropdown
        Then I Verify we navigate to that particular Engagement