import { browser, element, by } from "protractor";

export class CalcPage{

    navigateTo(){
        return browser.get('/Calc');
    }
    
    getOperands(){
        let options = element.all(by.tagName("option"));
        return options;
    }

    fillValues(k1:number, k2:number, op1:string){
        element(by.css('[name = "firstValue"]')).sendKeys(k1);
        element(by.css('[name = "secondValue"]')).sendKeys(k2);
        element(by.css('[name ="operand"]')).sendKeys(op1);
        element.all(by.tagName("button")).get(0).click();
    }

    getResult(){
        return element(by.id('pDisplay')).getText();
    }
}