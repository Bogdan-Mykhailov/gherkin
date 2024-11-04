Feature: Trello Account Management

#  Scenario: User sign up for a new Trello account
#    Given the user is on the Trello sign-up page
#    When the user enters a valid email and clicks the 'Sign Up' button
#    Then the user should see a "What brings you here today?" title
#    When the user clicks the 'Skip' button
#    Then the user should see an "It all starts with the board" title
#    When the user clicks the 'Skip' button
#    Then the user should see an "Invite your team" title
#    When the user clicks the 'Skip' button
#    Then a verification email should be sent to the registered email address
#
  Scenario: User signs in to an existing Trello account
    Given the user is on the Trello sign-in page
    When the user enters their email and clicks the 'Continue' button
    Then the user should see the password field
    When the user enters their password and clicks the 'Log in' button
    Then the user should be redirected to their Trello boards page

  Scenario: Create a new board
    Given the user is on the Trello dashboard
    When the user clicks on the 'Create' button
    Then the user should see a create board options list
    When the user clicks on the 'Create board' button
    Then the user should see create board menu
    When the user enters a title for the board and clicks 'Create' button
    Then the new board should be created and navigated to it

#  Scenario: Edit user profile information
#    Given the user is logged in to Trello workspace
#    When the user click on account icon and select Profile and visibility
#    Then the user navigates to the profile settings
#    When the user update their profile information and click save button
#    Then the changes should be saved successfully, and the user will see an alert
