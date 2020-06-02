import { $, ElementFinder } from "protractor";

export class LoginPageObject {
  public EmailField: ElementFinder;
  public SignInBtn: ElementFinder;
  public PwdField: ElementFinder;
  public StaySignedInTxt1: ElementFinder;
  public StaySignedInCheckBox: ElementFinder;
  public YesBtn: ElementFinder;
  public NoBtn: ElementFinder;
  public InValidPwdTxt: ElementFinder;
  public InCorrectUNTxt: ElementFinder;
  public InValidUNTxt: ElementFinder;
  public AltUser: ElementFinder;

  constructor() {
    this.EmailField = $("input[id='i0116']");
    this.SignInBtn = $("input[id='idSIButton9']");
    this.PwdField = $("input[id='i0118']");
    this.StaySignedInTxt1=$("div[class='row text-title']");
    this.StaySignedInCheckBox=$("input[id='KmsiCheckboxField']");
    this.YesBtn=$("input[value='Yes']");
    this.NoBtn=$("input[id='idBtn_Back']");
    this.InValidPwdTxt=$("div[id='passwordError']");
    this.InCorrectUNTxt=$("div[id='usernameError']");
    this.InValidUNTxt=$("div[id='usernameError']");
    this.AltUser=$("div[id='otherTileText']");
  }
}
