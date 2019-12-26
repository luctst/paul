import test from "ava";
import puppeteer from "puppeteer";
let browser;
let page;
let ElementTest;

test.before("Launch the chronium instance", async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    ElementTest = await page.$("head");
    await page.addScriptTag({path: "./lib/paul.js"});
    
    page.on("console", async msg => {
        if (msg.text() === "JSHandle@object") {
            console.log(await msg.args()[0].jsonValue());
        } else {
            console.log(msg);
        }
    });

    page.on("error", msg => {
        console.log(msg);
    });
});

test("Check if first argument is an HTML Element", async t => {
    await t.notThrowsAsync(async () => await page.evaluate(DOMElementTest => Paul(DOMElementTest), ElementTest));
    await ElementTest.dispose();
});

test("Check if second argument is an array", async t => {
    await t.notThrowsAsync(async () => await page.evaluate(DOMElementTest => Paul(DOMElementTest, []), ElementTest));
    await ElementTest.dispose();
});

test.after("Close the chronium instance", async () => await browser.close());