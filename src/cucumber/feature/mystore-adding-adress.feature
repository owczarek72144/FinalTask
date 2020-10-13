#Feature: Adding and checking the adress
#  Scenario Outline: User can add adress
#    Given an open browser with https://prod-kurs.coderslab.pl/index.php
#    And user click SingIn icon
#    When user complete email box with <email>
#    When user complete password with <password>
#    And user clicks on SingIn button
#    Then user is on the Your account/ Adress Page
#    And user clicks on Add first adres
#    When user completes <alias>,<adress>,<city>,<zip>,<country>,<phone>
#    And user click on save button
#    Then succes message displayed <messageSave>
#    And user click update
#    And user will check the saved data <alias>,<adress>,<city>,<zip>,<country>,<phone>
#    And user click back to you account
#    Then user is on the Your account/ Adress Page
#    And user click Adresses
#    And user click delete on My Adress
#    Then succes message displayed <messageDelete>
#    Examples:
#    |email      |password |alias  |adress  |city |zip   |country        |phone    | messageSave               |messageDelete                |
#    |mmmm@mm.pl|password  |ADC    |Długa 51|Opole|44-444|United Kingdom|546321789 |Address successfully added!|Address successfully deleted!|
#
#
#
#
#
