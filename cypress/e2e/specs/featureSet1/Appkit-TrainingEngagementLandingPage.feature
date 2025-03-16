Feature: Appkit - Training Engagement Landing Page

    # Test Case ID: 1610346
    Scenario: User should be able to verify new look and feel is implemented
         Given I open the application
         When I click on Training Engagement button
         Then I verify new look and feel is implemented

    # Test Case ID: 1610350
    Scenario: User should be able to verify new look and feel is implemented
         Given I open the application
         When I click on Training Engagement button 
         Then I set the viewport to 1280x720
         And I verify that new content is responsive
         Then I set the viewport to 768x1024
         And I verify that new content is responsive
         Then I set the viewport to 375x667
         And I verify that new content is responsive