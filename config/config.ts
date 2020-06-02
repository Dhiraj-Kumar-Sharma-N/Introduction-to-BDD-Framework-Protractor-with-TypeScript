import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
  //seleniumAddress: "http://127.0.0.1:4444/wd/hub",
  directConnect: true,
  // restartBrowserBetweenTests:true,

  SELENIUM_PROMISE_MANAGER: false,

  capabilities: {
    browserName: "chrome",
    args: ["--incognito"]
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  specs: ["../../features/Home.feature"],

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser
      .manage()
      .window()
      .maximize();
    Reporter.createDirectory(jsonReports);
    browser
      .manage()
      .timeouts()
      .pageLoadTimeout(40000);
    browser
      .manage()
      .timeouts()
      .implicitlyWait(25000);
    browser.manage().deleteAllCookies();
  },

  cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: "json:./reports/json/cucumber_report.json",
    require: [
      "../../typeScript/stepdefinitions/*.js",
      "../../typeScript/support/*.js"
    ],
    strict: true,
    tags:
      "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario or @LoginScenario or @HomeScenario"
  },

  onComplete: () => {
    Reporter.createHTMLReport();
  }
};
