$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/cucumber/feature/purchase-of-the-product.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase of the product",
  "description": "",
  "id": "purchase-of-the-product",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "User can buy Hummingbird Printed Sweater",
  "description": "",
  "id": "purchase-of-the-product;user-can-buy-hummingbird-printed-sweater",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user open browser with my store login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user is login to my store with \u003cemail\u003e,\u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user is loged in with user name \u003cuserName\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user search product \u003cproduct\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user check \u003cdiscount\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user choise size \u003csize\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user will choose the quantity \u003cquantity\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user add product to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user choise adress",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user choise shiping method \u003cshippingMethod\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user choise payment option \u003cpaymentOption\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user order product",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "purchase-of-the-product;user-can-buy-hummingbird-printed-sweater;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "userName",
        "product",
        "discount",
        "size",
        "quantity",
        "shippingMethod",
        "paymentOption"
      ],
      "line": 20,
      "id": "purchase-of-the-product;user-can-buy-hummingbird-printed-sweater;;1"
    },
    {
      "cells": [
        "marek@marek.pl",
        "qwerty",
        "marek marek",
        "Hummingbird Printed Sweater",
        "20",
        "S",
        "5",
        "PrestaShop \"pick up in store\"",
        "Pay by Check"
      ],
      "line": 21,
      "id": "purchase-of-the-product;user-can-buy-hummingbird-printed-sweater;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6828930800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User can buy Hummingbird Printed Sweater",
  "description": "",
  "id": "purchase-of-the-product;user-can-buy-hummingbird-printed-sweater;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user open browser with my store login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user is login to my store with marek@marek.pl,qwerty",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user is loged in with user name marek marek",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user search product Hummingbird Printed Sweater",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user check 20",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user choise size S",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user will choose the quantity 5",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user add product to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user choise adress",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user choise shiping method PrestaShop \"pick up in store\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user choise payment option Pay by Check",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user order product",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.openMystorePage()"
});
formatter.result({
  "duration": 533526400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "marek@marek.pl",
      "offset": 31
    },
    {
      "val": "qwerty",
      "offset": 46
    }
  ],
  "location": "PurchaseOfTheProductSteps.userLoginToMyStore(String,String)"
});
formatter.result({
  "duration": 1170304100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "marek marek",
      "offset": 32
    }
  ],
  "location": "PurchaseOfTheProductSteps.userIsLogedInWith(String)"
});
formatter.result({
  "duration": 37944200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hummingbird Printed Sweater",
      "offset": 20
    }
  ],
  "location": "PurchaseOfTheProductSteps.userSearchProduct(String)"
});
formatter.result({
  "duration": 1313316300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 28500,
  "status": "passed"
});
});