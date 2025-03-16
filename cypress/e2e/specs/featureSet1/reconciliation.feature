Feature: Reconciliation

       # Test Case ID: 1812256
       Scenario: User should be able to Enable reconciliation tile on K-3 pages
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I search for K3 Document
              Then I open K3 Document
              And I navigate to Part II Section 1 and 2 to verify Reconciliation tile
              Then I navigate to Part X Section 1 and 2 to verify Reconciliation tile
              And I navigate to Allocable Items to verify Reconciliation tile

       # Test Case ID: 1796920 and 1796935
       Scenario: User should be able to Dsiplay reconciliation tile on K-1 pages
              Given I open the application
              When I click on existing engagement
              Then I click on document Center and open documents section
              And I search for K1 Document
              Then I open K1 Document
              And I navigate to Schedule Items to verify Reconciliation tile
              Then I navigate to Schedule Items Details to verify Reconciliation tile
              And I navigate to Federal Footnotes to verify Reconciliation tile
              Then I navigate to Federal Reclasses to verify Reconciliation tile
              And I navigate to State Source to verify Reconciliation tile
