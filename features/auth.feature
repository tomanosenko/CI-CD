Feature: Authorization

Scenario: Succeed authorization
    Given user visit login page
    When user enters credentials
    And click the button "Login"
    Then user logs in successfully


