import { SimpleExamplePage } from "./simpleexample-po";

describe('Should display SimpleExample Page', () => {
    let page  : SimpleExamplePage;
    beforeAll(()=>{
        this.page = new SimpleExamplePage();
    })
    beforeEach(()=>{
        this.page.navigateTo();        
    })
    
    it('should display our Heading', () => {
        expect(this.page.getMainHeading()).toEqual("Simple Example")
    });

    it('should display our content', () => {
        expect(this.page.getParagraphContent()).toEqual("Testing Paragraph for the example");
    });
});