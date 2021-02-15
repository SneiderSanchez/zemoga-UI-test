const puppeteer = require("puppeteer");

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 250,
  });

  page = await browser.newPage();
  await page.setViewport({ width: 1272, height: 968 });
});

describe("User can use the voting system", () => {
  test("User can vote successfully", async () => {
    await page.goto("http://localhost:3000/");

    await page.waitForSelector(
      'div[data-testid="vote-buttons-wrapper"] > [data-testid="button"]:nth-child(1) > img'
    );
    await page.click(
      'div[data-testid="vote-buttons-wrapper"] > [data-testid="button"]:nth-child(1) > img'
    );

    await page.waitForSelector(
      'div[data-testid="vote-buttons-wrapper"] > [data-testid="button"]:nth-child(3)'
    );
    await page.click(
      'div[data-testid="vote-buttons-wrapper"] > [data-testid="button"]:nth-child(3)'
    );

    await page.waitForSelector(".toast");
    const toast = await page.$(".toast");
    const toastContent = await page.evaluate((el) => el.textContent, toast);

    expect(toastContent).toBe("Vote Saved Succesfully!");
  }, 120000);

  test("Show error alert to User, if no option is selected to vote", async () => {
    await page.goto("http://localhost:3000/");

    await page.waitForSelector(
      'div[data-testid="vote-buttons-wrapper"] > [data-testid="button"]:nth-child(3)'
    );

    await page.click(
      'div[data-testid="vote-buttons-wrapper"] > [data-testid="button"]:nth-child(3)'
    );

    await page.waitForSelector(".toast");
    const toast = await page.$(".toast");
    const toastContent = await page.evaluate((el) => el.textContent, toast);

    expect(toastContent).toBe("Please select one option!");
  }, 120000);
});

afterAll(() => {
  browser.close();
});
