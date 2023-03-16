const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { clickElement, getText } = require("../../lib/commands.js");

Before({timeout: 30000}, async function () {
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
  return await this.page.goto(`http://qamid.tmweb.ru/client${string}`, {
    setTimeout: 100000,
  });
});

When("When user chooses day {int}", async function (int) {
 return await clickElement(this.page, `a:nth-child(${int}) > span.page-nav__day-week`);
});

When("When user chooses {string}"), async function (string) {
  return await clickElement(this.page,`a.movie-seances__${time}`);
};
When("When user chooses {string}"), async function (string) {
  return await clickElement(this.page,`.buying-scheme__${chair}_standart:not(.buying-scheme__chair_taken)`);
};

When("user click {string}", async function (string) {
  return await clickElement(this.page, `button.acceptin-${button}`);
});

Then("user sees text {string}", async function (string) {
  const actual = await getText(this.page, `h2.ticket__${check-title}`);
  const expected = await string;
  expect(actual).contains(expected);
});
