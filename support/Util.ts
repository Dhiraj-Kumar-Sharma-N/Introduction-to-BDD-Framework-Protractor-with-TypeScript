import { browser, protractor, utils, element, by } from "protractor";

export function DefaultTimeoutOverride(milliseconds: number) {
  browser.driver
    .manage()
    .timeouts()
    .setScriptTimeout(milliseconds);
}

export function DefaultTimeoutRestore() {
  browser.driver
    .manage()
    .timeouts()
    .setScriptTimeout(browser.allScriptsTimeout);
}

export function checkIfPresent(maxSec, elm, blnPresent) {
  if (maxSec > 0) {
    browser.sleep(1000).then(function() {
      elm.isPresent().then(function(bln) {
        if (bln != blnPresent) {
          checkIfPresent(maxSec - 1, elm, blnPresent);
        }
      });
    });
  }
}

export function WindowHandler() {
  browser.getTitle().then(function(txt) {
    let windowHandles = browser.getAllWindowHandles();
    let parentHandle, childHandle;

    windowHandles.then(function(handles) {
      parentHandle = handles[0];
      childHandle = handles[1];
      console.log("Total Handles :- " + handles.length);

      browser
        .switchTo()
        .window(childHandle)
        .then(function() {
          browser.getTitle().then(function(txt) {
            console.log("Child browser title :- " + txt);
            browser.close();
          });
        });

      browser
        .switchTo()
        .window(parentHandle)
        .then(function() {
          console.log("Returning to main windows...");
          browser.getTitle().then(function(txt) {
            console.log("Main browser title :- " + txt);
          });
        });
    });
  });
}
