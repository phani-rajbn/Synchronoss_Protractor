import { CalcPage } from "./calc-po";
import { browser } from 'protractor';

describe('Calc Demo Spec', () => {
    let pg : CalcPage;

    beforeAll(() => {
        this.pg = new CalcPage();
    });

    beforeEach(() => {
        this.pg.navigateTo()
    });

    it('should multiply Numbers', () => {
        this.pg.fillValues(3,2,'X');
        browser.sleep(3000);
        expect(this.pg.getResult()).toBe('6');
        console.log("success");
            
    });

    it('should have all operands', () => {
        expect(this.pg.getOperands().count()).toBe(5);
    });
});