Feature: Project Horizon

   # Test Case ID: 1728716
       Scenario: User should be able to Sync TRACK Database for Standard Descriptions and Verify System Updates(Prequisite Test Case)
              Given I open the application
              When I click on existing engagement
              Then I click on Admin and open Schedule Management Screen
              And I click on Sync TRACK standard descriptions button
              And I Choose Client Name, Tax Year & Database Name from dropdowns
              And I click on Save button
              Then I go to Check Import Status tab
              And I Verify a new row is added in the Grid & verify its import status
              And I go to Manage Schedule data tab and hover over the Sync TRACK standard descriptions button & verify its tooltip message
              And I go to a Fed k1 review page 
              Then I Verify Standard Description exists for Schedule Items view
              Then I Verify Standard Description exists for Schedule Items Details view
              Then I Verify Standard Description exists for CSV Extract Excel File
            
             
        