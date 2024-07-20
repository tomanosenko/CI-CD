Feature: Team creation

Scenario: Succeed team creation
    Given user opens login page
    When user enters credentials and click the button "Login" 
    And click the link "Teams" 
    And click the button "Create a team" 
    And fill the title of the team 
    And click the button "Create"
    Then user creates the team successfully 
