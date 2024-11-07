Feature: Trello Account Management

  Scenario: User sign up for a new Trello account
    Given the user is on the Trello sign-up page
    When the user enters a valid email and clicks the 'Sign Up' button
    Then the user should see a "What brings you here today?" title
    When the user clicks the 'Skip' button
    Then the user should see an "It all starts with the board" title
    When the user clicks the 'Skip' button
    Then the user should see an "Invite your team" title
    When the user clicks the 'Skip' button
    Then a verification email should be sent to the registered email address

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

  Scenario: Create a list on a board
    Given the user is viewing a specific Trello board
    When the user clicks on the '+ Add List' button
    Then the user should see list name field
    When the user enters a list name and clicks on the 'Add list' button
    Then the new list should appear on the board

  Scenario: Edit user profile information
    Given the user on the Trello boards page
    When the user click on account icon
    Then the user should see a account menu
    When the user click on Profile and visibility button
    Then the user navigates to the profile settings
    When the user update their profile information and click save button
    Then the changes should be saved successfully, and the user will see an alert

  Scenario: Search for a board
    Given the user is on the Trello homepage
    When the user clicks on the search bar
    Then the user should see a search popup
    When the user entered the board name
    Then the relevant board should appear in the search results

  Scenario: Create a card on a list
    Given the user has a list on a Trello board
    When the user clicks on the '+ Add a card' button
    Then the user should see a new card field
    When the user enters a card name and clicks on the 'Add a card' button
    Then the new card should be added to the list

  Scenario: Edit workspace details
    Given the user is viewing the Trello workspace settings
    When the user edits the workspace name or description and saves the changes
    Then the updated workspace details should be displayed
