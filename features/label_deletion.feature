Feature: Label deletion

Scenario: Succeed label deletion
    Given user opens login page
    When user enters credentials and click the button "Login" 
    And click the link "Labels" 
    And click the button for label deletion
    And click the button "Do it!"
    Then user deletes the label successfully 
