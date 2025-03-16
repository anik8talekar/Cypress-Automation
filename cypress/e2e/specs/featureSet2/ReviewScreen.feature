Feature: Review Screen

       # Test Case ID: 1658443
       Scenario: User should be able to Mark K-1 Updated Values from Footnotes tab
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I filter out the correct document to review
              And I click on review icon to open the review document screen
              Then I open Footnotes tab from view by dropdown
              And I expand a footnote 
              Then I check the edited value is marked with yellow traingle

       # Test Case ID: 1658440
       Scenario: User should be able to Mark K-3 Updated Values from Footnotes tab
              Given I open the application
              When I click on existing engagement
              And I go to Document Center Documents tab & Open a 2022 K-3 Doc & go to Part VII Section 1 & 2 Tab 
              Then I check the edited value is marked with yellow traingle for K3 Footnotes tab

       # Test Case ID: 1658436
       Scenario: User should be able to Mark Schedule Item Details K-1 Updated Values from Footnotes tab
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I filter out the correct document to review
              And I click on review icon to open the review document screen
              Then I open Schedule Item Details tab from view by dropdown
              Then I check the edited value is marked with yellow traingle for Schedule Item Details tab

       # Test Case ID: 1659518
       Scenario: User should be able to Integrate Custom Columns
              Given I open the application
              When I click on existing engagement
              And I Click on Admin tab from side menu
              Then I Click on Engagement Settings tab from admin menu
              And I Click on Custom Columns tab
              Then I Click on Add Custom Column Button
              And I click on Add Value Button and add values under new value text field
              And I Go to Document Center Documents tab and Select Multiple Documents
              Then I click on Set Custom Columns Option from Actions Dropdown from Documents Tab
              And I Set the values from the dropdowns from the set custom columns slideout
              Then I Click on save button
              Then I verify the date is set to newly created datepicker column in docs tab 
              And I click on Set Custom Columns Option from Actions Dropdown from Expected Documents Tab
              Then I Click on save button
              Then I verify the date is set to newly created datepicker column in Exp docs tab

       # Test Case ID: 1710685
       Scenario: User should be able to See Relables for Show Blank values Toggle for K-1 Review Page
              Given I open the application
              When I click on existing engagement
              And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to it's review page
              And I Check for the rows are not showing zero values after Turning Off the Toggle Button
              Then I Check for the rows are showing zero values after Turning On the Toggle Button
             
       # Test Case ID: 1710685
       Scenario: User should be able to See Relables for Show Blank values Toggle for K-3 Review Page
              Given I open the application
              When I click on existing engagement
              And I go to Document Center Documents tab & Open a 2022 K-3 Doc & go to it's review page
              And I Go To Part 2 Section 2
              And I Check for the rows are not showing zero values after Turning Off the Toggle Button
              Then I Check for the rows are showing zero values after Turning On the Toggle Button

       # Test Case ID: 1710685
       Scenario: User should be able to See Relables for Show Blank values Toggle for form 8621 Preview Page
              Given I open the application
              When I click on existing engagement
              And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Footnotes tab
              And I Click on Show Preview 8621 icon
              And I Check for the rows are not showing zero values after Turning Off the Toggle Button for form 8621
         
       # Test Case ID: 1710685
       Scenario: User should be able to See Relables for Show Blank values Toggle for 1040 Preview Page
              Given I open the application
              When I click on existing engagement
              And I go to Document Center Documents tab & Open a 2022 K-1 Doc & go to Schedule Item Details tab
              And I Click on Form 1040 icon above the grid
              And I Check for the rows are not showing zero values after Turning Off the Toggle Button for form 1040

       # Test Case ID: 1710685
       Scenario: User should be able to See Relables for Show Blank values Toggle for Comparison Page
              Given I open the application
              When I click on existing engagement
              And I Click on Document Center Section
              Then I Click on Documents tab
              And I Select Multiple documents
              Then I Click On Actions Button
              And I Click on view side by side option
              And I Check for the rows are not showing zero values after Turning Off the Toggle Button for Comparison page

       # Test Case ID: 1709026
       Scenario: User should be able to See Review Icon: Right Click pop up Menu
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I filter out the correct document to review
              And I Right Click on the Review Button for selected document
              Then I Click on the popup option
       
        # Test Case ID: 1709026
       Scenario: User should be able to See Review Icon: Ctrl Click pop up Menu
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I filter out the correct document to review
              And I Ctrl + Click on the Review Button for selected document
       