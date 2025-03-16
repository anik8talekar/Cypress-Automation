Feature: Security Authorization

   # Test Case ID: 1210330
   Scenario: User should be able to Verify User grid loads successfully
         Given I open the application
         When I click on Admin and open Security Authorization Tab
         Then I verify user grid is visible
    
    # Test Case ID: 1210399
    Scenario: User should be able to edit user details except GUID
         Given I open the application
         When I click on Admin and open Security Authorization Tab
         Then I search for the user
         And I edit details of that user and make sure GUID is not changable
    
    # Test Case ID: 1210419
    Scenario: User should be able to assign new engagements to user
         Given I open the application
         When I click on Admin and open Security Authorization Tab
         Then I search for the user
         And I give access to that user to the new engagement
     
     # Test Case ID: 1091144
     Scenario: User should be able to edit User Groups of the user
         Given I open the application
         When I click on Admin and open Security Authorization Tab
         Then I search for the user
         And I edit user group of the user

    # Test Case ID: 1090409
     Scenario: User should be able to extend access for the user
         Given I open the application
         When I click on Admin and open Security Authorization Tab
         Then I search for the user
         And I extend access to that user to the new engagement
     
     # Test Case ID: 1210430
     Scenario: User should be able to remove access of the engagement
         Given I open the application
         When I click on Admin and open Security Authorization Tab
         Then I search for the user
         And I remove access of that user for the new engagement
     
     # Test Case ID: 1090366
     Scenario: User should be able to provide new permissions to the user
         Given I open the application
         When I click on Admin and open Security Authorization Tab
         Then I search for the user
         And I provide new permissions to the user
     
     # Test Case ID: 1090366
     Scenario: User should be able to provide additional permissions to the user
         Given I open the application
         When I click on Admin and open Security Authorization Tab
         Then I search for the user
         And I provide additional permissions to the user

     # Test Case ID: 1090374
     Scenario: User should be able to remove new permissions of the user
         Given I open the application
         When I click on Admin and open Security Authorization Tab
         Then I search for the user
         And I remove new permissions of the user
