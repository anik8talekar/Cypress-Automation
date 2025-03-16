Feature: Executive Review

# Test Case ID: 1654867
Scenario: User Should be able to see Executive Review Details from Executive Review tab
    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review page and Select any document
    And I Click on Details Button 
    And I Select all the Footnotes type one by one & Verify data in the grid
    
# Test Case ID: 1655029
Scenario: User Should be able to Export all Data from Executive Review tab
    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review tab from Document Center
    Then I Click on Export all Data Button & download the file 
 
# Test Case ID: 1656083
Scenario: User Should be able to Perform Masked EIN functionality
    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review tab from Document Center
    And I Hover on the eye icon from Investment & Investor Tax ID & Click on eye icon
    Then I Verify whole Investment & Investor Tax ID is visible without X sign

# Test Case ID: 1658605
Scenario: User Should be able to Perform View Side by Side functionality
    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review tab from Document Center
    And I Select two or more documents
    Then I click on view side by side button

# Test Case ID: 1663754
Scenario: User Should be able to Perform Board Update Test Case
    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review tab from Document Center
    And I Click on any column header to sort
    Then I Verify column header sorting
    And I Select & Unselect column headers from dropdown
    Then I Verify Columns are present or not
    And I Search Filename & Filter Tax year from dropdown
    Then I Verify Filename & Tax year in the grid
    And I Click on Save Search Button & give name to saved Search and click on save button
    Then I Search the Saved Search from Saved Search bar on the top and above the grid
    And I Select two or more documents from Executive Review tab
    Then I Click on Details Button

# Test Case ID: 1666066
Scenario: User Should be able to Perform UL Fund Detail Summary View test cases
    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review tab from Document Center
    And I Select Tax Year from Tax Year dropdown
    Then I Verify Selected Tax Year in grid
    And I Select Multiple Investors from Executive Review grid
    Then I Click on Details Button
    And I verify them in Executive Review details page & also in grid
    Then I Click on Export all Data Button from Executive Review Details tab

# Test Case ID: 1666248
 Scenario: User Should be able to Perform Fund Summary Query Initial test cases
    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review tab from Document Center
    Then I Verify Summary Information from Fund Summary tab

# Test Case ID: 1666326
    Scenario: User Should be able to Perform Fund Details Query Initial test cases
      Given I Open the Application
      When I click on existing engagement
      And I go to Executive Review tab from Document Center
      And I go to Executive Review page and Select any document
      And I Click on Details Button 
      Then I Verify Fund Details Summary Information from Executive Review Details tab

# Test Case ID: 1667151
 Scenario: User Should be able to Perform Fund Summary View test cases
    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review tab from Document Center
    Then I Scroll the Executive Review Summary grid to view all data
    And I Check Custom Column Settings Button above grid
    And I Check Saved Search Button above grid
    Then I Check Masked EIN Button above grid

# Test Case ID: 1668568
 Scenario: User Should be able to View Underlying Fund Document Details
    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review tab from Document Center
    And I go to Executive Review page and Select any document
    And I Click on Details Button 
    Then I click on Show 0 Values & Show Final Values Button
    And I Verify Final Value Column & 0 Values in grid
    Then I Verify Column Headings of Executive Review Details grid
   
# Test Case ID: 1675325
 Scenario: User Should be able to View Fund Summary Totals
    Given I Open the Application
    When I click on existing engagement
    And I go to Executive Review tab from Document Center
    And I go to Executive Review page and Select any document
    And I Click on Details Button 
    Then I Verify totals displayed on Totals bar

# Test Case ID: 1675419
 Scenario: User Should be able to Ensure Executive Review and Consolidated Reports Include PFIC data from K3
    Given I Open the Application
    When I click on existing engagement
    And I Click on Document Center Section
    Then I Click on Documents tab
    And I Select bulk documents and click on generate consolidated comparison report 
    Then I Click on Download Extract tab
    And I click on download button
    And I go to Executive Review tab from Document Center
    And I go to Executive Review page and Select any document
    And I Click on Details Button
    Then I open 8621 details for both the documents selected
    Then I verify the total number of 8621 instances

# Test Case ID: 1676689
   Scenario: User Should be able to use Saved Search Functionality
      Given I Open the Application
      When I click on existing engagement
      And I go to Executive Review tab from Document Center
      And I go to Executive Review page and Select any document
      And I Click on Save Search Button & give name to saved Search and click on save button
      And I Reset the Executive Review grid
      Then I Click on Click on Saved Search dropdown and select newly created saved Search
      Then I Favorite a Saved Search
