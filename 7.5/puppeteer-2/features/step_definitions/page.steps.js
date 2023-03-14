const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { getText, clickElement } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", {timeout:60000}, async function (string) {
  return await this.page.goto(`https://qamid.tmweb.ru/client${string}`, {
    setTimeout: 100000,
  });
});

When("user clicksElement {string}",{timeout:60000}, async function (string) {
  return await clickElement(this.page, "body > nav > a:nth-child(7)", string);
});
When("user clicksNextElement {string}",{timeout:60000}, async function (string) {
  return await clickElement(this.page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(1) > a", string);
});

Then("user sees the page  {string}", async function (string) {
  const actual = await getText(this.page, "body > main > section > button");
  expect(actual).contains(string);
});
