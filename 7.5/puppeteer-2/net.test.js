const { expect, config } = require("chai");
const { clickElement, getText} = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Cinema tickets tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  test("The first test'", async () => {
    const title = await page.title();
    console.log("Page title: " + title);
    await clickElement(page,"body > nav > a.page-nav__day.page-nav__day_chosen > span.page-nav__day-number");
  });
  
  test ("The first link leads on booking page", async () => {
    await clickElement(page,"body > nav > a:nth-child(7)");
    await clickElement(page,"body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(1) > a");
    const actual = await getText(page, "body > main > section > button");
    await expect(actual).toContain("Забронировать");
  });

  test ("assert that a nav exist", async () => {
    const navbar = await page.$eval(".page-nav", el => (el ? true : false));
    expect(navbar).toBe(true);
 
});

test("assert that main title contains the correct text", async () => {
  const mainTitleText = await page.$eval("body > header > h1", el => el.textContent);
  expect(mainTitleText).toEqual("Идёмвкино");
});

test.only("can't click the button", async () => {
  await clickElement(page,"body > nav > a:nth-child(4)");
  await clickElement(page,"body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a");
  pageNext = await browser.newPage();
  await pageNext.goto("https://qamid.tmweb.ru/client/hall.php");
  const result = await clickElement(pageNext,"body > main > section > button");
 expect(result).equal(undefined);
})
})
