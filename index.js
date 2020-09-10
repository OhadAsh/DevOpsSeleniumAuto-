const{Builder, By, key, util} = require("selenium-webdriver");
const assert = require('assert')
async function DevOpsSeTest(){
    let driver = new Builder().forBrowser("firefox").build();
    try {
    await driver.get("http://localhost:9090/OhadSaharReutF/");
    let element = await driver.findElement(By.css('[value=Reut]'))
    await element.click();
    element = await driver.findElement(By.css('[value=Ohad]'))
    await element.click();
    element = await driver.findElement(By.css('[value=Query]'))
    await element.click();

    let results = await  driver.findElements(By.tagName('li'))
    let text1 = await results[0].getText()
    assert (text1 === 'Ohad');
    let text2 = await results[1].getText()
    assert (text2 === 'Reut');

    element = await driver.findElement(By.css('[value=Sahar]'))
    await element.click();
    element = await driver.findElement(By.css('[value=Query]'))
    await element.click();
    results = await  driver.findElements(By.tagName('li'))
    let text3 = await results[0].getText()
    assert (text3 === 'Sahar');

    console.log('Test passed OK')
    }
    catch(e) {
        console.log('Test failed')
        throw e;
    }
    finally {
        await driver.quit()
    }


}
DevOpsSeTest()
.catch(console.log)