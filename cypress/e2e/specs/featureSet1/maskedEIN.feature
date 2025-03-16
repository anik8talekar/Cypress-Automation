Feature: Masked EIN

   # Test Case ID: 1088487
   Scenario: User should be able to Mask and Unmask the EINs from Document Center - Documents
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open documents section
         And I unmask the EINs and verify the EINs from documents
         Then I mask the EINs and verify the EINs from documents

   # Test Case ID: 1088498
   Scenario: User should be able to Mask and Unmask the EINs from Document Center - Executive Review
         Given I open the application
         When I click on existing engagement
         Then I click on document Center and open executive review section
         And I unmask the EINs and verify the EINs from executive review
         Then I mask the EINs and verify the EINs from executive review

  # Test Case ID: 1088521
  Scenario: User should be able to Mask and Unmask the EINs from Business Entities
         Given I open the application
         When I click on existing engagement
         Then I click on business entities section
         And I unmask the EINs and verify the EINs from Business Entities
         Then I mask the EINs and verify the EINs from Business Entities

  # Test Case ID: 1088530
  Scenario: User should be able to Mask and Unmask the EINs from Import & Export Data - Business Entities
         Given I open the application
         When I click on existing engagement
         Then I click on import & export data and open business entities section
         And I unmask the EINs and verify the EINs from business entities
         Then I mask the EINs and verify the EINs from business entities
