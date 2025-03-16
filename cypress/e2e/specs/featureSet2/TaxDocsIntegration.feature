Feature: Tax Docs Integration

    # Test Case ID: 1097889 & 1092895
    Scenario: User should be able to file documents from document center for tax docs integration
        Given I open the application
        When I click on existing engagement
        Then I click on document Center and open documents section
        And I select the documents for comparison
        Then I file them to tax docs
    
    # Test Case ID: 1097889 & 1092895
    Scenario: User should be able to file documents from Download Extracts for tax docs integration
        Given I open the application
        When I click on existing engagement
        Then I click on document Center and open download extracts section
        And I Click on Export to Tax Docs Icon under actions column for specific document
        Then I Select engagement and click on save button
        