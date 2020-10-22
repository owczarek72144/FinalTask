Feature: Purchase of the product
  Scenario Outline: User can buy Hummingbird Printed Sweater
    Given user open browser with my store login page
    When user is login to my store with <email>,<password>
    Then user is loged in with user name <userName>
    And user search product <product>
    And user check discount <discount>
    And user choise size <size>
    And user will choose the quantity <quantity>
    Then user add product to cart
    And user go to checkout
    And user choise adress
    And user choise shiping method <shippingMethod>
    And user choise payment option <paymentOption>
    Then user order product



    Examples:
    |email|password|userName|product|discount|size|quantity|shippingMethod|paymentOption|
    |marek@marek.pl|qwerty   |marek marek| Hummingbird Printed Sweater | 20|L|5|PrestaShop "pick up in store"|Pay by Check|

