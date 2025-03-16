Feature: Dashboard- Cutoff Analyzer

# Test Case ID: 1099249
Scenario: User Should be able to see details of cutoff Analyzer
    Given I Open the Application
    When I click on existing engagement
    And I Click on show details button from Cutoff Analyzer card on the dashboard
    Then I Check for Filters Chart and the grid

# Test Case ID: 1099252
Scenario: User Should be able to see details of Total Expected, Recived to date, Total Expected by Cutoff Date, Total Expected After Cut Off Date
    Given I Open the Application
    When I click on existing engagement
    And I Click on show details button from Cutoff Analyzer card on the dashboard
    Then I Check for the dates under the grid

# Test Case ID: 1099256
Scenario: User Should be able to see save searches
    Given I Open the Application
    When I click on existing engagement
    And I Click on show details button from Cutoff Analyzer card on the dashboard
    Then I apply filters for Investor Investment Tax Year and Cutoff Date
    And I Click on Save Button
    Then I type a save search name and click on save button
    And I Verify the saved search from saved cutoffs dropdown
    Then I Delete the saved cutoff as a prequisite step

# Test Case ID: 1099260
 Scenario: User Should be able to update save search criteria
     Given I Open the Application
     When I click on existing engagement
     And I Click on show details button from Cutoff Analyzer card on the dashboard
     Then I Select a Saved Cutoff from saved cutoffs dropdown
     And I Change Tax Year
     Then I Click on Save Button and click on Yes Popup
     And I Verify the changed Tax Year from Tax Year dropdown

# Test Case ID: 1099270
 Scenario: User Should be able to reset selection
     Given I Open the Application
     When I click on existing engagement
     And I Click on show details button from Cutoff Analyzer card on the dashboard
     Then I Select a Saved Cutoff from saved cutoffs dropdown
     And I Click on Reset Selection Button 
     Then I verify all the data is cleared from the filters tab

# Test Case ID: 1099783
 Scenario: User Should be able to view data in chart format
     Given I Open the Application
     When I click on existing engagement
     And I Click on show details button from Cutoff Analyzer card on the dashboard
     Then I Select a Saved Cutoff from saved cutoffs dropdown
     And I Click on Line Chart from View by tab and verify the data in the chart
     Then I Click on Doughnut Chart tab from View by and verify the data in the chart

# Test Case ID: 1099803
 Scenario: User Should be able to verify apply cutoff date functionality
     Given I Open the Application
     When I click on existing engagement
     And I Click on show details button from Cutoff Analyzer card on the dashboard
     Then I Select a Tax Year and also select a Cutoff date from the filters tab on LHS
     And I Click on Save Button and add name to my saved search
     Then I Click on Apply Cutoff Date Button
     And I go to document center Expected Documents tab and check cutoff date is applied under cutoff date column

# Test Case ID: 1099836
 Scenario: User Should be able to verify Recalculate functionality
     Given I Open the Application
     When I click on existing engagement
     And I Click on show details button from Cutoff Analyzer card on the dashboard
     Then I Select a Saved Cutoff from saved cutoffs dropdown
     And I Click on Recalculate Button
     Then I Verify Recalculation Started Popup Message

# Test Case ID: 1099867
 Scenario: User Should be able to see data in the grid based on saved cutoffs
    Given I Open the Application
    When I click on existing engagement
    And I Click on show details button from Cutoff Analyzer card on the dashboard
    Then I Select a Saved Cutoff from saved cutoffs dropdown
    And I Verify data in the grid under line chart
    
    
