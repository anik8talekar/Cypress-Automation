Feature: Dashboard Null State

    #Test Case ID: 1783272
    Scenario: User should able to verify the Null State of Upload Widget
        Given I Open the application
        When I Click on the existing engagement
        Then I Verify the initial empty state of the Upload Widget
        And I verify the Title of the Upload Widget
        Then I verify the Subtitle of the Upload Widget
        And I upload the file under the upload section of the Upload Widget
        Then I verify the uploaded file under the upload section of the Upload Widget
        And I verify the Show Details button of the Upload Widget


    #Test Case ID: 1778461
    Scenario: User should able to verify the Null State of Expected, Actual and Prior Year Widget
        Given I Open the application
        When I Click on the existing engagement
        Then I Verify the initial empty state of the Expected, Actual and Prior Year Widget
        And I verify the Title of the Expected, Actual and Prior Year Widget
        Then I verify the Infomartion of the Expected, Actual and Prior Year Widget
        And I verify the Details Link of the Expected, Actual and Prior Year Widget


    #Test Case ID: 1778473
    Scenario: User should able to verify the Null State of the Cutoff Analyzer Widget
        Given I Open the application
        When I Click on the existing engagement
        Then I Verify the initial empty state of the Cutoff Analyzer Widget
        And I verify the Title of the Cutoff Analyzer Widget
        Then I verify the Infomartion of the Cutoff Analyzer Widget
        And I verify the Details Link of the Cutoff Analyzer Widget
        Then I verify the Upload Link of the Cutoff Analyzer Widget

    #Test Case ID: 1784839
    Scenario: User should able to verify the Null State of the Documents Widget
        Given I Open the application
        When I Click on the existing engagement
        Then I Verify the initial empty state of the Documents Widget
        And I verify the Title of the Documents Widget
        Then I verify the Information of the Documents Widget
        And I verify the Details Link of the Documents Widget
        Then I verify the Upload Link of the Documents Widget

    #Test Case ID: 1784886
    Scenario: User should able to verify the Null State of the Diagnostics Widget
        Given I Open the application
        When I Click on the existing engagement
        Then I Verify the initial empty state of the Diagnostics Widget
        And I verify the Title of the Diagnostics Widget
        Then I verify the Information of the Diagnostics Widget

    #Test Case ID: 1784802
    Scenario: User should able to verify the Null State of the New Jurisdictions Widget
        Given I Open the application
        When I Click on the existing engagement
        Then I Verify the initial empty state of the New Jurisdictions Widget
        And I verify the Title of the New Jurisdictions Widget
        Then I verify the Information of the New Jurisdictions Widget
        And I verify the Toggle Button of the New Jurisdictions Widget
        Then I verify the Upload Link of the New Jurisdictions Widget
        And I verify the Details Link of the New Jurisdictions Widget