import { ElementFinder,$ } from "protractor";


export class AppPromotionObjects{

    public WindowsAppBtn:ElementFinder;
    public WebAppLink:ElementFinder;

    constructor(){

        this.WindowsAppBtn=$("button[class='ts-btn ts-btn-fluent ts-btn-fluent-primary download-app-btn']");
        this.WebAppLink=$("a[class='use-app-lnk']");
        
    }
}