let page;
jest.setTimeout(100000);

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  
beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, { 
      visible: true
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  });
});

describe("Github next page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/account");
  });
   test("The h1 header content'", async () => {
    const firsSteptLink = await page.$("#login > div.auth-form-header.p-0 > h1");
    await page.waitForSelector('h1');
    const title3 = await page.title();
    expect(title3).toEqual('Sign in to GitHub · GitHub');
  });

  test("The first step link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains another Sign in button", async () => {
    const btnSelector = "#login > p";
    await page.waitForSelector(btnSelector, { 
      visible: true
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("New to GitHub?")
  });
});


