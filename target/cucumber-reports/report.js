$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Runner.feature");
formatter.feature({
  "name": "Booking confirmation page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "Verify the page components",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_user_is_on_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the uer enters the customer details with firstname lastname",
  "rows": [
    {
      "cells": [
        "Chandr",
        "Raj",
        "chandru@gmail.com",
        "test",
        "1224"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_uer_enters_the_customer_details_with_firstname_lastname(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they should be able to get the confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.they_should_be_able_to_get_the_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the page components",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_user_is_on_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the uer enters the customer details with firstname lastname",
  "rows": [
    {
      "cells": [
        "Kumar",
        "Raj",
        "raj@gmail.com",
        "test",
        "1224"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_uer_enters_the_customer_details_with_firstname_lastname(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they should be able to get the confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.they_should_be_able_to_get_the_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify teh page compnents three",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_user_is_on_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the uer enters the customer details with firstname lastname",
  "rows": [
    {
      "cells": [
        "Ajay",
        "Raj",
        "Ajay@gmail.com",
        "test",
        "1224"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_uer_enters_the_customer_details_with_firstname_lastname(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Customer\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAJESH-PC\u0027, ip: \u0027192.168.43.242\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\RAJESH\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50137}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e4b7cf91223ca813e1883ed6a1278bef\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Customer\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.cuccu.CucumberRunnerTag.StepDefinition.the_uer_enters_the_customer_details_with_firstname_lastname(StepDefinition.java:42)\r\n\tat ✽.the uer enters the customer details with firstname lastname(src/test/java/Runner.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "they should be able to get the confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.they_should_be_able_to_get_the_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});