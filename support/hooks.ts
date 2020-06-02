const { BeforeAll, After, AfterAll, Status } = require("cucumber");
import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../config/config";
import { Before } from "cucumber";
import * as prop from "C:/Users/dsharman2/protractor-cucumber-typescript-master-removed libraries/CME_TEAMS/TestData/prop.json";

Before({ timeout: 100 * 1000 }, async () => {
  await browser.refresh();
  await browser.manage().deleteAllCookies();
  await browser.get((<any>prop).TestURL);
});

After(async function(scenario) {
  if (scenario.result.status === Status.FAILED) {
    // screenShot is a base-64 encoded PNG
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  }
});
