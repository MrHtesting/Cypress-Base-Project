Feature: Poc Feature

  @test
  Scenario: Navigation
    Given I navigate to Home Page of "BaseURL"
    When I type "Abc" to SearchBar
    And I click SearchButton
    Then I should see page URL contains "google"
    Then I should see Title has text "Videos1"

#  Scenario: POC Steps
#    Then I should see elements have text
#      | element | text |
#      |         |      |

#    And I scroll to element
#    And I hover over element and element is displayed
#    And I select "text" from dropdown element
#  And I enter Random First name in element
#  And I enter Random Last name in element
#  And I enter Random string in element of length ""
#  And I enter Random number in element of length ""
