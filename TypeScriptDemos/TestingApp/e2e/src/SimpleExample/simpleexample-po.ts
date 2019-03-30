import { browser, element, by } from "protractor";

export class SimpleExamplePage{
    navigateTo(){
        return browser.get('/Home');
    }

    getMainHeading(){
        return element(by.css('app-root h1')).getText();
    }

    getParagraphContent(){
        return element(by.css('app-root p')).getText();
    }
}