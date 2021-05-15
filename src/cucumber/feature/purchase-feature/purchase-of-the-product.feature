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
    And user choise adress by alias <alias>
    And user choise shiping method <shippingMethod>
    And user choise payment option <paymentOption>
    Then user order product
    Then take screenshot
    And user go to order history
    Then user check order data and order status <orderStatus>



    Examples:
    |email         |password |userName   |product                      |discount|size|quantity|alias   |shippingMethod  |paymentOption  |orderStatus           |
    |marek@marek.pl|qwerty   |marek marek| Hummingbird Printed Sweater | 20     |L   |5       |ADCd7326|Pick up in-store|Pay by Check   |Awaiting check payment|
    |marek@marek.pl|qwerty   |marek marek| Hummingbird Printed Sweater | 20     |XL  |5       |ADCd7326|Pick up in-store|Pay by Check   |Awaiting check payment|
    |marek@marek.pl|qwerty   |marek marek| Hummingbird Printed Sweater | 20     |S   |5       |ADCd7326|Pick up in-store|Pay by Check   |Awaiting check payment|
    |marek@marek.pl|qwerty   |marek marek| Hummingbird Printed Sweater | 20     |M   |5       |ADCd7326|Pick up in-store|Pay by Check   |Awaiting check payment|
    |marek@marek.pl|qwerty   |marek marek| Hummingbird Printed Sweater | 20     |L   |5       |ADCd7326|My carrier      |Pay by Check   |Awaiting check payment|
    |marek@marek.pl|qwertz   |marek marek| Hummingbird Printed Sweater | 20     |L   |5       |ADCd7326|My carrier      |Pay by Check   |Awaiting check payment|
    |marek@marek.pl|qwerth   |marek marek| Hummingbird Printed Sweater | 20     |L   |5       |ADCd7326|My carrier      |Pay by Check   |Awaiting check payment|


