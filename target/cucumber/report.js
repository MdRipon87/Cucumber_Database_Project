$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Varify the Techfios login",
  "description": "",
  "id": "varify-the-techfios-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 4225722400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep.on_the_Techfios_login_page()"
});
formatter.result({
  "duration": 595444000,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "valid use should able to login with valid credentials",
  "description": "",
  "id": "varify-the-techfios-login;valid-use-should-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "enters username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enters password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "should be on dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.enters_username()"
});
formatter.result({
  "duration": 1417496000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.enters_password()"
});
formatter.result({
  "duration": 117653200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.clicks_on_login()"
});
formatter.result({
  "duration": 5065730000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.should_be_on_dashboard()"
});
formatter.result({
  "duration": 7575500,
  "status": "passed"
});
});