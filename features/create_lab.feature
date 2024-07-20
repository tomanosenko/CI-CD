Feature: Label creation

Scenario: Succeed label creation
    Given user opens login page
    When user enters credentials and click the button "Login" 
    And click the link "Labels" 
    And click the button "New Label" 
    And fill the title of the label 
    And click the button "Create"
    Then user creates the label successfully 
    
