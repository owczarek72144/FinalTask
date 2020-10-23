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
  "name": "user check discount \u003cdiscount\u003e",
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
  "name": "user choise adress by alias \u003calias\u003e",
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
formatter.step({
  "line": 16,
  "name": "take screenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user go to order history",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user check order data and order status \u003corderStatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
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
        "alias",
        "shippingMethod",
        "paymentOption",
        "orderStatus"
      ],
      "line": 23,
      "id": "purchase-of-the-product;user-can-buy-hummingbird-printed-sweater;;1"
    },
    {
      "cells": [
        "marek@marek.pl",
        "qwerty",
        "marek marek",
        "Hummingbird Printed Sweater",
        "20",
        "L",
        "5",
        "ADCd1523",
        "Pick up in-store",
        "Pay by Check",
        "Awaiting check payment"
      ],
      "line": 24,
      "id": "purchase-of-the-product;user-can-buy-hummingbird-printed-sweater;;2"
    },
    {
      "cells": [
        "marek@marek.pl",
        "qwerty",
        "marek marek",
        "Hummingbird Printed Sweater",
        "20",
        "XL",
        "5",
        "ADCd1523",
        "Pick up in-store",
        "Pay by Check",
        "Awaiting check payment"
      ],
      "line": 25,
      "id": "purchase-of-the-product;user-can-buy-hummingbird-printed-sweater;;3"
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
        "ADCd1523",
        "Pick up in-store",
        "Pay by Check",
        "Awaiting check payment"
      ],
      "line": 26,
      "id": "purchase-of-the-product;user-can-buy-hummingbird-printed-sweater;;4"
    },
    {
      "cells": [
        "marek@marek.pl",
        "qwerty",
        "marek marek",
        "Hummingbird Printed Sweater",
        "20",
        "M",
        "5",
        "ADCd1523",
        "Pick up in-store",
        "Pay by Check",
        "Awaiting check payment"
      ],
      "line": 27,
      "id": "purchase-of-the-product;user-can-buy-hummingbird-printed-sweater;;5"
    },
    {
      "cells": [
        "marek@marek.pl",
        "qwerty",
        "marek marek",
        "Hummingbird Printed Sweater",
        "20",
        "L",
        "5",
        "ADCd1523",
        "My carrier",
        "Pay by Check",
        "Awaiting check payment"
      ],
      "line": 28,
      "id": "purchase-of-the-product;user-can-buy-hummingbird-printed-sweater;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13853601300,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d86.0.4240.111)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-MHT8DPL\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00B1D383+3134339]\n\tOrdinal0 [0x00A0A171+2007409]\n\tOrdinal0 [0x008AAD90+568720]\n\tOrdinal0 [0x008A1364+529252]\n\tOrdinal0 [0x008A19FC+530940]\n\tOrdinal0 [0x008A2C15+535573]\n\tOrdinal0 [0x0089DFC5+516037]\n\tOrdinal0 [0x008ABF70+573296]\n\tOrdinal0 [0x00851916+203030]\n\tOrdinal0 [0x00850C1D+199709]\n\tOrdinal0 [0x0084EB0B+191243]\n\tOrdinal0 [0x00832E77+77431]\n\tOrdinal0 [0x00833E3E+81470]\n\tOrdinal0 [0x00833DC9+81353]\n\tOrdinal0 [0x00A20CD9+2100441]\n\tGetHandleVerifier [0x00C8B75A+1396954]\n\tGetHandleVerifier [0x00C8B3D9+1396057]\n\tGetHandleVerifier [0x00C97126+1444518]\n\tGetHandleVerifier [0x00C8BCE8+1398376]\n\tOrdinal0 [0x00A17F51+2064209]\n\tOrdinal0 [0x00A222EB+2106091]\n\tOrdinal0 [0x00A22411+2106385]\n\tOrdinal0 [0x00A349C4+2181572]\n\tBaseThreadInitThunk [0x76376359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77617C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x77617BF4+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat productsearch.PurchaseOfTheProductSteps.setUp(PurchaseOfTheProductSteps.java:33)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 24,
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
  "name": "user check discount 20",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user choise size L",
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
  "name": "user choise adress by alias ADCd1523",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user choise shiping method Pick up in-store",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user choise payment option Pay by Check",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user order product",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "take screenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user go to order history",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user check order data and order status Awaiting check payment",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.openMystorePage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": " 20",
      "offset": 19
    }
  ],
  "location": "PurchaseOfTheProductSteps.userCheckDiscount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 17
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoiseSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 30
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoiseQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.addProductToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.userGoToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ADCd1523",
      "offset": 28
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoiseAdress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pick up in-store",
      "offset": 27
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoiseShippingMethod(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pay by Check",
      "offset": 27
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoisePaymentOptionPaymentOption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.userOrderProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.userTakeScreenshot()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.userGoToOrderHistory()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Awaiting check payment",
      "offset": 39
    }
  ],
  "location": "PurchaseOfTheProductSteps.userCheckOrderData(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 162300,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.close()\" because \"this.driver\" is null\r\n\tat productsearch.PurchaseOfTheProductSteps.tearDown(PurchaseOfTheProductSteps.java:49)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 6247315400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User can buy Hummingbird Printed Sweater",
  "description": "",
  "id": "purchase-of-the-product;user-can-buy-hummingbird-printed-sweater;;3",
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
  "name": "user check discount 20",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user choise size XL",
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
  "name": "user choise adress by alias ADCd1523",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user choise shiping method Pick up in-store",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user choise payment option Pay by Check",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user order product",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "take screenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user go to order history",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user check order data and order status Awaiting check payment",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.openMystorePage()"
});
formatter.result({
  "duration": 556709900,
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
  "duration": 1096022700,
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
  "duration": 37482700,
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
  "duration": 1354440900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 20",
      "offset": 19
    }
  ],
  "location": "PurchaseOfTheProductSteps.userCheckDiscount(String)"
});
formatter.result({
  "duration": 62610000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XL",
      "offset": 17
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoiseSize(String)"
});
formatter.result({
  "duration": 127586900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 30
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoiseQuantity(String)"
});
formatter.result({
  "duration": 1221884200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.addProductToCart()"
});
formatter.result({
  "duration": 1388039600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.userGoToCheckout()"
});
formatter.result({
  "duration": 542430900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADCd1523",
      "offset": 28
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoiseAdress(String)"
});
formatter.result({
  "duration": 1070344100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pick up in-store",
      "offset": 27
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoiseShippingMethod(String)"
});
formatter.result({
  "duration": 1039736700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pay by Check",
      "offset": 27
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoisePaymentOptionPaymentOption(String)"
});
formatter.result({
  "duration": 91723800,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.userOrderProduct()"
});
formatter.result({
  "duration": 1033874200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.userTakeScreenshot()"
});
formatter.result({
  "duration": 5252596500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.userGoToOrderHistory()"
});
formatter.result({
  "duration": 1319636600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Awaiting check payment",
      "offset": 39
    }
  ],
  "location": "PurchaseOfTheProductSteps.userCheckOrderData(String)"
});
formatter.result({
  "duration": 56085400,
  "status": "passed"
});
formatter.after({
  "duration": 73941600,
  "status": "passed"
});
formatter.before({
  "duration": 6063177600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User can buy Hummingbird Printed Sweater",
  "description": "",
  "id": "purchase-of-the-product;user-can-buy-hummingbird-printed-sweater;;4",
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
  "name": "user check discount 20",
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
  "name": "user choise adress by alias ADCd1523",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user choise shiping method Pick up in-store",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user choise payment option Pay by Check",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user order product",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "take screenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user go to order history",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user check order data and order status Awaiting check payment",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.openMystorePage()"
});
formatter.result({
  "duration": 310564900,
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
  "duration": 1101400200,
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
  "duration": 34594300,
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
  "duration": 1343954000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " 20",
      "offset": 19
    }
  ],
  "location": "PurchaseOfTheProductSteps.userCheckDiscount(String)"
});
formatter.result({
  "duration": 69852000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 17
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoiseSize(String)"
});
formatter.result({
  "duration": 76220500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 30
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoiseQuantity(String)"
});
formatter.result({
  "duration": 1209395200,
  "error_message": "java.lang.AssertionError: Brak produktu\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat productsearch.PurchaseOfTheProductSteps.userChoiseQuantity(PurchaseOfTheProductSteps.java:87)\r\n\tat ✽.And user will choose the quantity 5(src/cucumber/feature/purchase-of-the-product.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.addProductToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.userGoToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ADCd1523",
      "offset": 28
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoiseAdress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pick up in-store",
      "offset": 27
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoiseShippingMethod(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pay by Check",
      "offset": 27
    }
  ],
  "location": "PurchaseOfTheProductSteps.userChoisePaymentOptionPaymentOption(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.userOrderProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.userTakeScreenshot()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PurchaseOfTheProductSteps.userGoToOrderHistory()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Awaiting check payment",
      "offset": 39
    }
  ],
  "location": "PurchaseOfTheProductSteps.userCheckOrderData(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 66326800,
  "status": "passed"
});
