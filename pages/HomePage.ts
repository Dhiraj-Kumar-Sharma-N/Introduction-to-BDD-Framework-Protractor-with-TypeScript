import { ElementFinder, $, element, by } from "protractor";

export class HomePageObjects {
  public PersonDropdown: ElementFinder;
  public SignOut: ElementFinder;
  public CMEPowerIcon: ElementFinder;
  public TurnOn: ElementFinder;
  public Iframe: ElementFinder;
  public StationDropDown: ElementFinder;
  public Dismiss: ElementFinder;
  public StnSelectionTxt: ElementFinder;


  constructor() {
    this.PersonDropdown = $("button[id='personDropdown']");
    this.SignOut = $("button[aria-label='Sign out of Microsoft Teams']");
    //this.CMEPowerIcon = $("span[data-tid='appBarText-ConnectMe']");
    this.CMEPowerIcon = element(by.xpath("(//*[contains(text(),'ConnectMe User Profile')])[2]"));    
    this.StationDropDown = element(
      by.xpath("//div[@data-control-name='StationDropDown']")
    );
    this.TurnOn = $("button[title='Turn on']");
    this.Iframe = element(by.tagName("iframe"));
    this.Dismiss = $("button[title='Dismiss']");
    this.StnSelectionTxt = element(
      by.xpath("//div[contains(text(),'Select Your Station')]")
    );
  }
}
