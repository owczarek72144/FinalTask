$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mystore-adding-adress.feature");
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
  "name": "an open browser with https://prod-kurs.coderslab.pl/index.php",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click SingIn icon",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "user complete email box with \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user complete password with \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on SingIn button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on the Your account/ Adress Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Add first adres",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user completes \u003calias\u003e,\u003cadress\u003e,\u003ccity\u003e,\u003czip\u003e,\u003ccountry\u003e,\u003cphone\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "succes message displayed \u003cmessageSave\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click update",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user will check the saved data \u003calias\u003e,\u003cadress\u003e,\u003ccity\u003e,\u003czip\u003e,\u003ccountry\u003e,\u003cphone\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click back to you account",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user is on the Your account/ Adress Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user click Adresses",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click delete on My Adress",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "succes message displayed \u003cmessageDelete\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "adding-and-checking-the-adress;user-can-add-adress;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "alias",
        "adress",
        "city",
        "zip",
        "country",
        "phone",
        "messageSave",
        "messageDelete"
      ],
      "line": 21,
      "id": "adding-and-checking-the-adress;user-can-add-adress;;1"
    },
    {
      "cells": [
        "mmmm@mm.pl",
        "password",
        "ADC",
        "Długa 51",
        "Opole",
        "44-444",
        "United Kingdom",
        "546321789",
        "Address successfully added!",
        "Address successfully deleted!"
      ],
      "line": 22,
      "id": "adding-and-checking-the-adress;user-can-add-adress;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "User can add adress",
  "description": "",
  "id": "adding-and-checking-the-adress;user-can-add-adress;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "an open browser with https://prod-kurs.coderslab.pl/index.php",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click SingIn icon",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "user complete email box with mmmm@mm.pl",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user complete password with password",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on SingIn button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on the Your account/ Adress Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Add first adres",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user completes ADC,Długa 51,Opole,44-444,United Kingdom,546321789",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "succes message displayed Address successfully added!",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click update",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user will check the saved data ADC,Długa 51,Opole,44-444,United Kingdom,546321789",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click back to you account",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user is on the Your account/ Adress Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user click Adresses",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click delete on My Adress",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "succes message displayed Address successfully deleted!",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStoreAddingAdress.userOpenMyStoreMainPage()"
});
formatter.result({
  "duration": 7035618400,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddingAdress.userClickSingInIcon()"
});
formatter.result({
  "duration": 477042900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mmmm@mm.pl",
      "offset": 29
    }
  ],
  "location": "MyStoreAddingAdress.userCompleteEmailBox(String)"
});
formatter.result({
  "duration": 114732800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 28
    }
  ],
  "location": "MyStoreAddingAdress.userCompletePasswordBox(String)"
});
formatter.result({
  "duration": 97449800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddingAdress.userClickOnSingInButton()"
});
formatter.result({
  "duration": 704130600,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddingAdress.userIsOnTheYourAccountPage()"
});
formatter.result({
  "duration": 77588800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddingAdress.userClickOnAddFirstAdress()"
});
formatter.result({
  "duration": 390093700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADC",
      "offset": 15
    },
    {
      "val": "Długa 51",
      "offset": 19
    },
    {
      "val": "Opole",
      "offset": 28
    },
    {
      "val": "44-444",
      "offset": 34
    },
    {
      "val": "United Kingdom",
      "offset": 41
    },
    {
      "val": "546321789",
      "offset": 56
    }
  ],
  "location": "MyStoreAddingAdress.userFillAdressForm(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 559775200,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddingAdress.userClickOnSaveAdressButton()"
});
formatter.result({
  "duration": 451103100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address successfully added!",
      "offset": 25
    }
  ],
  "location": "MyStoreAddingAdress.adressAddSuccesMesageDisplay(String)"
});
formatter.result({
  "duration": 59663800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddingAdress.userClickAdressUpdate()"
});
formatter.result({
  "duration": 406556200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADC",
      "offset": 31
    },
    {
      "val": "Długa 51",
      "offset": 35
    },
    {
      "val": "Opole",
      "offset": 44
    },
    {
      "val": "44-444",
      "offset": 50
    },
    {
      "val": "United Kingdom",
      "offset": 57
    },
    {
      "val": "546321789",
      "offset": 72
    }
  ],
  "location": "MyStoreAddingAdress.userCheckTheSavedData(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 235263100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddingAdress.userClickBackToAccount()"
});
formatter.result({
  "duration": 390733600,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddingAdress.userIsOnTheYourAccountPage()"
});
formatter.result({
  "duration": 47873000,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddingAdress.userClickAdress()"
});
formatter.result({
  "duration": 367727200,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreAddingAdress.userClickDeleteAdress()"
});
formatter.result({
  "duration": 467190200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address successfully deleted!",
      "offset": 25
    }
  ],
  "location": "MyStoreAddingAdress.adressAddSuccesMesageDisplay(String)"
});
formatter.result({
  "duration": 45520900,
  "status": "passed"
});
});