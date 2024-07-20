Feature: User adding

Scenario: Succeed user adding
    Given user opens login page
    When user enters credentials and click the button "Login" 
    And click the link "Teams" 
    And click the button "Team"
    And fill the name of the user
    And click the button "Add to team"
    Then the user adds a new user to the team successfully 
