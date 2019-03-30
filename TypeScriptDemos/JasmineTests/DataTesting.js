var excel = require('C:/Users/phani/AppData/Roaming/npm/node_modules/exceljs');


describe('Should test based on data', () => {
    var book = new excel.Workbook();
    var sheet = null;
    beforeAll(function(){
        book.xlsx.readFile("fileNameToRead");
        sheet = book.getWorksheet(1);
    })

    function testValues(v1, v2, operation, res) {
        it('should perform all tests', ()=>{
            var actual = v1 + v2;
            expect(actual).toBe(res);
        })
    }

    for (let i = 0; i < sheet.rowCount; i++) {
        var v1 = sheet.getRow(i).getCell(0).value;
        var v2 = sheet.getRow(i).getCell(1).value;
        var res = sheet.getRow(i).getCell(3).value;
        element(by.id('btnClick')).click();
        browser.sleep(3000);        
        testValues(v1, v2, "add", res);
        
    }

    it('should perform operation', () => {
        browser.get('http://localhost:8080/Calc.html');
        var book = new excel.Workbook();
        book.xlsx.readFile('E:\Programs\AQProtractorTraining\ProtractorDemo\DataTesting.xlsx').then(()=>{
            var sheet = book.getWorksheet(1);//first sheet...
            var v1 = sheet.getCell("A1").value;
            var v2 = sheet.getCell("B2").value;
            console.log(sheet.rowCount);
            console.log(sheet.columnCount);
            element(by.model('v1')).sendKeys(v1);
            element(by.model('v2')).sendKeys(v2);
            element(by.id('btnClick')).click();
            browser.sleep(3000);//to view the result...
        })
    });
});