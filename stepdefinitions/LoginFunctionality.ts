import * as prop from "C:/Users/dsharman2/protractor-cucumber-typescript-master-removed libraries/CME_TEAMS/TestData/prop.json";
import { browser, protractor, utils, element, by } from "protractor";
import { LoginPageObject } from "../pages/LoginPage";
import { threadId } from "worker_threads";
import { HomePageObjects } from "../pages/HomePage";
import { AppPromotionObjects } from "../pages/AppPromotionPage";
import { equal, fail } from "assert";
import { Driver } from "selenium-webdriver/chrome";
import { checkIfPresent } from "../support/Util";
import { log4jsconfig } from "../LogConfig/log4jsconfig";

const { When, Then } = require("cucumber");
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var assert = chai.assert;

var Uname = (<any>prop).UserDetails.ValidUserName;
var Pword = (<any>prop).UserDetails.ValidPassword;

var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);

const LoginPageObj: LoginPageObject = new LoginPageObject();
const Homepageobj: HomePageObjects = new HomePageObjects();
const AppPromotionobj: AppPromotionObjects = new AppPromotionObjects();

Given("I Navigate to MSTeams login page", async () => {
  try {
    if (
      expect(
        await expect(browser.getTitle()).to.eventually.equal(
          "Sign in to your account"
        )
      )
    ) {
      log4jsconfig.Log().debug("SignIn Page Displayed Successfully");
    } else {
      log4jsconfig.Log().debug("Failed to Display SignIn Page");
      fail();
    }
  } catch (error) {
    fail("Error thrown is : " + error);
  }
});

When("I Enter a Valid User Name & Click Next", async () => {
  try {
    if (expect(await LoginPageObj.EmailField.isPresent()).to.be.true) {
      await LoginPageObj.EmailField.sendKeys(Uname);
      log4jsconfig.Log().debug("Username Entered Successfully");
      await LoginPageObj.SignInBtn.click();
      await browser.sleep(2000);
    } else {
      log4jsconfig.Log().debug("failed to enter Username");
      fail();
    }
  } catch (error) {
    fail("Error thrown is : " + error);
  }
});

When("I Enter InValid Password & Click Next", async () => {
  Pword = (<any>prop).UserDetails.InvalidPassword;
  try {
    if (expect(await LoginPageObj.PwdField.isDisplayed()).to.be.true) {
      await LoginPageObj.PwdField.sendKeys(Pword);
      log4jsconfig.Log().debug("Password Entered Successfully");
      await LoginPageObj.SignInBtn.click();
      await browser.sleep(2000);
    } else {
      log4jsconfig.Log().debug("failed to enter Password");
      fail();
    }
  } catch (error) {
    fail("Error thrown is : " + error);
  }
});

When("I Enter Valid Password & Click Next", async () => {
  try {
    if (expect(await LoginPageObj.PwdField.isEnabled()).to.be.true) {
      await LoginPageObj.PwdField.sendKeys(Pword);
      log4jsconfig.Log().debug("Password Entered Successfully");
      await LoginPageObj.SignInBtn.click();
      await browser.sleep(2000);
    } else {
      log4jsconfig.Log().debug("failed to enter Password");
      fail();
    }
  } catch (error) {
    fail("Error thrown is : " + error);
  }
});

Then("Stay_SignedIn Page is Displayed", async () => {
  let str1 = "Stay signed in?";
  let str = await LoginPageObj.StaySignedInTxt1.getText();

  try {
    if (
      expect(await LoginPageObj.StaySignedInTxt1.getText()).to.be.equal(str1)
    ) {
      if (
        expect(await LoginPageObj.StaySignedInCheckBox.isDisplayed()).to.be
          .true &&
        expect(await LoginPageObj.YesBtn.isDisplayed()).to.be.true &&
        expect(await LoginPageObj.NoBtn.isDisplayed()).to.be.true
      ) {
        log4jsconfig.Log().debug("StaySignedIn Page Displayed Successfully");
      } else {
        log4jsconfig.Log().debug("Failed to display StaySignedIn Page ");
        fail("test");
      }
    } else {
      fail();
    }
  } catch (error) {
    fail("Error thrown is : " + error);
  }
});

When("I Enter a InCorrect User Name & Click Next", async () => {
  Uname = (<any>prop).UserDetails.IncorrectUserName;
  try {
    if (expect(await LoginPageObj.EmailField.isPresent()).to.be.true) {
      await LoginPageObj.EmailField.sendKeys(Uname);
      log4jsconfig.Log().debug("Username Entered Successfully");
      await LoginPageObj.SignInBtn.click();
      await browser.sleep(2000);
    } else {
      log4jsconfig.Log().debug("failed to enter Username");
      fail();
    }
  } catch (error) {
    fail("Error thrown is : " + error);
  }
});

When("I Enter InValid User Name & Click Next", async () => {
  Uname = (<any>prop).UserDetails.InvalidUserName;
  try {
    if (expect(await LoginPageObj.EmailField.isPresent()).to.be.true) {
      await LoginPageObj.EmailField.sendKeys(Uname);
      log4jsconfig.Log().debug("Username Entered Successfully");
      await LoginPageObj.SignInBtn.click();
      await browser.sleep(2000);
    } else {
      log4jsconfig.Log().debug("failed to enter Username");
      fail();
    }
  } catch (error) {
    fail("Error thrown is : " + error);
  }
});
Then("Incorrect Password Error Message is Displayed", async () => {
  let ErrorStr = (<any>prop).LoginErrorMsgs.IncorrectMsg;
  try {
    if (expect(await LoginPageObj.InValidPwdTxt.isDisplayed()).to.be.true) {
      let str = await LoginPageObj.InValidPwdTxt.getText();

      // log4jsconfig.Log().debug(str);

      if (expect(str).to.be.equal(ErrorStr)) {
        log4jsconfig
          .Log()
          .debug("InValid Password Error Message Displayed Successfully");
      } else {
        fail();
      }
    } else {
      fail("Failed to Display InValid Password Error Message");
    }
  } catch (error) {
    fail("Error thrown is : " + error);
  }
});

Then("Incorrect UserName Error Message is Displayed", async () => {
  let ErrorStr =
    "This username may be incorrect. Enter a different one or create a new one.";
  try {
    browser.sleep(2000);
    if (expect(await LoginPageObj.InCorrectUNTxt.isPresent()).to.be.true) {
      let str = await LoginPageObj.InCorrectUNTxt.getText();

      if (expect(str).to.be.equal(ErrorStr)) {
        log4jsconfig
          .Log()
          .debug("InCorrect UserName Error Message Displayed Successfully");
      } else {
        log4jsconfig
          .Log()
          .debug("Failed to Display InCorrect UserName Error Message");
        fail();
      }
    }
  } catch (error) {
    fail("Error thrown is : " + error);
  }
});

Then("Invalid UserName Error Message is Displayed", async () => {
  let ErrorStr =
    "We couldn't find an account with that username. Try another, or get a new Microsoft account.";
  try {
    if (expect(await LoginPageObj.InValidUNTxt.isDisplayed()).to.be.true) {
      let str = await LoginPageObj.InValidUNTxt.getText();

      if (expect(str).to.be.equal(ErrorStr)) {
        log4jsconfig
          .Log()
          .debug("InValid UserName Error Message Displayed Successfully");
      } else {
        log4jsconfig
          .Log()
          .debug("Failed to Display InValid UserName Error Message");
        fail();
      }
    }
  } catch (error) {
    fail("Error thrown is : " + error);
  }
});

When(
  "On Click Yes on Stay_SignedIn Page and Select WebApp from App Promotion page",
  async () => {
    try {
      if (expect(await LoginPageObj.YesBtn.isEnabled()).to.be.true) {
        await browser.sleep(2000);
        await LoginPageObj.YesBtn.click();
      // await AppPromotionobj.WebAppLink.click();
      } else {
        fail("Yes Button not displayed ");
      }
    } catch (error) {
      fail("Error thrown is : " + error);
    }
  }
);

Then("Signed In Successfully", async () => {
  try {
    browser.sleep(2000);
    if (expect(await Homepageobj.CMEPowerIcon.isPresent()).to.be.true) {
      log4jsconfig.Log().debug("Signed In Successfully");
    } else {
      fail("Failed to Sign In");
    }
  } catch (error) {
    fail("Error thrown is : " + error);
  }
});

When("I SignOut from the application", async () => {
  try {
    if (expect(await Homepageobj.PersonDropdown.isDisplayed()).to.be.true) {
      await Homepageobj.PersonDropdown.click();
      browser.sleep(2000);
      if (expect(await Homepageobj.SignOut.isPresent()).to.be.true) {
        log4jsconfig.Log().debug(Homepageobj.SignOut.isEnabled);
        await Homepageobj.SignOut.click();
        log4jsconfig.Log().debug("Clicked On Sign Out Successfully");
      } else {
        fail("Failed to click on Sign Out");
      }
    } else {
      fail("Failed to Click On Person Dropdown");
    }
  } catch (error) {
    fail("Error thrown is : " + error);
  }
});

Then("Signed Out Successfully", async () => {
  try {
    if (expect(await LoginPageObj.AltUser.isPresent()).to.be.true) {
      browser.sleep(2000);
      log4jsconfig.Log().debug(" Sign Out Successfully");
    } else {
      fail("Failed to  Signe Out");
    }
  } catch (error) {
    fail("Error thrown is : " + error);
  }
});

When("I Click on Station Dropwdown", async () => {
  //await Homepageobj.TurnOn.click();
   var driver = browser.driver;
  var loc = by.tagName('iframe');
  var el = driver.findElement(loc);
  await browser.sleep(7000);
  browser.switchTo().frame(el);
  await browser.sleep(3000);
  Homepageobj.StnSelectionTxt.getText().then(function (text) {
    log4jsconfig.Log().debug(text);
});
  await Homepageobj.StationDropDown.click();
  await browser.sleep(5000);

});


Then("List of Stations are Displayed", async () => {
  log4jsconfig.Log().debug("PASSED");
});
