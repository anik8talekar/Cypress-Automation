Feature:  Appkit - Contacts

# Test Case ID: 1610427
Scenario: User should be able to Verify Contacts Slideout: Verify new look and feel is implemented
   Given I Open the Application
   When I click on existing engagement
   Then I Click on Contacts Section
   And I Click on Add Contacts Button and verify the slideout

# Test Case ID: 1610426
Scenario: User should be able to Verify Contacts Slideout: Verify Contacts page slideout is navigable
   Given I Open the Application
   When I click on existing engagement
   Then I Click on Contacts Section
   And I Click on Add Contacts Button and verify the slideout
   Then I navigate and fill values in the slideout

# Test Case ID: 1610428
Scenario: User should be able to Verify Contacts Slideout: Create Contact in Slideout
   Given I Open the Application
   When I click on existing engagement
   Then I Click on Contacts Section
   And I Click on Add Contacts Button and verify the slideout
   Then I navigate and fill values in the slideout
   And I click on save button to save new contact

# Test Case ID: 1610429
Scenario: User should be able to Verify Edit Contact in Slideout
   Given I Open the Application
   When I click on existing engagement
   Then I Click on Contacts Section
   And I edit the existing contact
   Then I click on save button to save edited contact

# Test Case ID: 1610430
Scenario: User should be able to Verify Contacts Slideout: Validation for Required Fields
   Given I Open the Application
   When I click on existing engagement
   Then I Click on Contacts Section
   And I Click on Add Contacts Button and verify the slideout
   And I click on save button forcefully
   Then I validate the required field error message for Name and Email

# Test Case ID: 1610431
Scenario: User should be able to Verify grid updates automatically when a contact is created
   Given I Open the Application
   When I click on existing engagement
   Then I Click on Contacts Section
   Then I search and verify new contact is created

# Test Case ID: 1653331
Scenario: User should be able to Verify Schedule Change Logs
   Given I Open the Application
   When I click on existing engagement
   Then I click on admin to open audit logs
   And I click on Schedule change logs
   Then I interact with the grid