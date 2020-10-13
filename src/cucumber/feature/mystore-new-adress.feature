Feature: Adding and checking the adress
  Scenario Outline: User can add adress
    Given user open browser with my store login page
    When user is login to my store with <email>,<password>
    Then user is loged in with user name <userName>
    And user is on the new adress page
    When user fill <alias>,<adress>,<city>,<postcode>,<country>,<phone>
    And user save adress
    Then succes message displayed <messageSave>
    And user will check saved adresss
    And user click back to you account
    Then user is on the Your account/ Adress Page
    And user click Adresses
    And user click delete on My Adress
    Then succes message displayed <messageDelete>
    Examples:
      |email      |password |userName|alias  |adress  |city |postcode   |country        |phone    | messageSave               |messageDelete                |
      |marek@marek.pl|qwerty  |marek marek|ADC    |Długa 51|Opole|44-444|United Kingdom|546321789 |Address successfully added!|Address successfully deleted!|

