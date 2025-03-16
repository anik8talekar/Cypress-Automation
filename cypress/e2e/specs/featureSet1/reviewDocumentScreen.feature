Feature: Review Document Screen

       # Test Case ID: 1092471
       Scenario: User should be able to edit schedule item details
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I filter out the correct document to review
              And I click on review icon to open the review document screen
              Then I open schedule item details
              And I expand the reporting group
              Then I type the original values from the input document

       # Test Case ID: 1092977
       Scenario: User should be able to delete schedule item details
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I filter out the correct document to review
              And I click on review icon to open the review document screen
              Then I open schedule item details
              And I expand the reporting group
              Then I clear the original values from the input document

       # Test Case ID: 1093030
       Scenario: User should be able to unhide/hide zero on schedule item details
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I filter out the correct document to review
              And I click on review icon to open the review document screen
              Then I unhide and verify zero values are visible by turning toggle button yes from no
              And I hide and verify zero values are not visible by turning toggle button no from yes

       # Test Case ID: 1092483
       Scenario: User should be able to add comments from Schedule Items screen
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I filter out the correct document to review
              And I click on review icon to open the review document screen
              Then I click on notes icon to open Add a note slideout
              And I enter appropriate Comment and click on add button
              Then I verify the comments are added successfully and click on close button

       # Test Case ID: 1092492
       Scenario: User should be able to edit extracted values
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I filter out the correct document to review
              And I click on review icon to open the review document screen
              And I type the extracted values from the input document

       # Test Case ID: 1092577
       Scenario: User should be able to download current view of the uploaded document
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I filter out the correct document to review
              And I click on review icon to open the review document screen
              Then I click on more options and select Download PDF in View Option from the dropdown

       # Test Case ID: 1092583
       Scenario: User should be able to download original uploaded document
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I filter out the correct document to review
              And I click on review icon to open the review document screen
              Then I click on more options and select Download Original PDF from the dropdown

       # Test Case ID: 1092913
       Scenario: User should not be able to edit approved documents
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I filter out the approved documents
              Then I verify that the edit icon is not present for approved documents

       # Test Case ID: 1097877
       Scenario: User should be able to match documents, add comments, add notes and add attachments to approved documents
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I filter out the approved documents
              Then I click on review icon to open the review document screen
              And I click on notes icon to open Add a note slideout
              Then I enter appropriate Comment and click on add button
              And I verify the comments are added successfully and click on close button
              Then I click on Attachments Icon and add attachment

       # Test Case ID: 1092941
       Scenario: User should be able to unapprove the approved document
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I filter out the approved documents
              Then I click on review icon to open the review document screen
              And I verify and click on unapprove button
              Then I approve the the document again for prerequisite of this scenario