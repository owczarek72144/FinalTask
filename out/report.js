$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/cucumber/feature/new-adress-feature/mystore-new-adress.feature");
formatter.feature({
  "line": 1,
  "name": "Adding and checking the adress",
  "description": "",
  "id": "adding-and-checking-the-adress",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "User can add adress",
  "description": "",
  "id": "adding-and-checking-the-adress;user-can-add-adress",
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
  "name": "user go to the your adress page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user fill \u003calias\u003e,\u003cadress\u003e,\u003ccity\u003e,\u003cpostcode\u003e,\u003ccountry\u003e,\u003cphone\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user save adress",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "succes message displayed \u003cmessageSave\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user will check saved adresss",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is on the Your addresses page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user choise added adress and delete it",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "succes message displayed \u003cmessageDelete\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user is on the Your addresses page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user will check deleted adresss",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "adding-and-checking-the-adress;user-can-add-adress;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "userName",
        "alias",
        "adress",
        "city",
        "postcode",
        "country",
        "phone",
        "messageSave",
        "messageDelete"
      ],
      "line": 17,
      "id": "adding-and-checking-the-adress;user-can-add-adress;;1"
    },
    {
      "cells": [
        "marek@marek.pl",
        "qwerty",
        "marek marek",
        "ADCd",
        "Długa 51",
        "Opole",
        "44-444",
        "United Kingdom",
        "546321789",
        "Address successfully added!",
        "Address successfully deleted!"
      ],
      "line": 18,
      "id": "adding-and-checking-the-adress;user-can-add-adress;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2651814600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User can add adress",
  "description": "",
  "id": "adding-and-checking-the-adress;user-can-add-adress;;2",
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
  "name": "user go to the your adress page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user fill ADCd,Długa 51,Opole,44-444,United Kingdom,546321789",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user save adress",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "succes message displayed Address successfully added!",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user will check saved adresss",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is on the Your addresses page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user choise added adress and delete it",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "succes message displayed Address successfully deleted!",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user is on the Your addresses page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user will check deleted adresss",
  "keyword": "And "
});
formatter.match({
  "location": "NewAdressSteps.openMystorePage()"
});
formatter.result({
  "duration": 488808500,
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
  "location": "NewAdressSteps.userLoginToMyStore(String,String)"
});
formatter.result({
  "duration": 951762600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "marek marek",
      "offset": 32
    }
  ],
  "location": "NewAdressSteps.userIsLogedInWith(String)"
});
formatter.result({
  "duration": 35521800,
  "status": "passed"
});
formatter.match({
  "location": "NewAdressSteps.goToTheYourAdressPage()"
});
formatter.result({
  "duration": 602507800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADCd",
      "offset": 10
    },
    {
      "val": "Długa 51",
      "offset": 15
    },
    {
      "val": "Opole",
      "offset": 24
    },
    {
      "val": "44-444",
      "offset": 30
    },
    {
      "val": "United Kingdom",
      "offset": 37
    },
    {
      "val": "546321789",
      "offset": 52
    }
  ],
  "location": "NewAdressSteps.userFillNewAdressForm(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 889359300,
  "status": "passed"
});
formatter.match({
  "location": "NewAdressSteps.userSaveAdress()"
});
formatter.result({
  "duration": 328329300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address successfully added!",
      "offset": 25
    }
  ],
  "location": "NewAdressSteps.successMessageDisplayed(String)"
});
formatter.result({
  "duration": 40029800,
  "status": "passed"
});
formatter.match({
  "location": "NewAdressSteps.chceckSavedAdress()"
});
formatter.result({
  "duration": 66135600,
  "status": "passed"
});
formatter.match({
  "location": "NewAdressSteps.userOnTheYourAdressesPage()"
});
formatter.result({
  "duration": 212138200,
  "status": "passed"
});
formatter.match({
  "location": "NewAdressSteps.userChoiseAdedAdressAndDelete()"
});
formatter.result({
  "duration": 404202600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address successfully deleted!",
      "offset": 25
    }
  ],
  "location": "NewAdressSteps.successMessageDisplayed(String)"
});
formatter.result({
  "duration": 36485300,
  "status": "passed"
});
formatter.match({
  "location": "NewAdressSteps.userOnTheYourAdressesPage()"
});
formatter.result({
  "duration": 193249400,
  "status": "passed"
});
formatter.match({
  "location": "NewAdressSteps.userWillCheckDeletedAdresss()"
});
formatter.result({
  "duration": 38421700,
  "status": "passed"
});
formatter.after({
  "duration": 109382000,
  "status": "passed"
});
});