const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.dtdc.in/");
    await driver.wait(
      until.titleIs("Most Preferred Courier Company in India - DTDC India"),
      3000
    );
    await (await driver.findElement(By.id("closebutton"))).click();

    await new Promise(r => setTimeout(r, 2000));

    await (await driver.findElement(By.id("strCnno2"))).click();

    await new Promise(r => setTimeout(r, 2000));

    await driver.findElement(By.id("strCnno2")).sendKeys("B22399923");

    await new Promise(r => setTimeout(r, 2000));

    await (await driver.findElement(By.className("btn"))).click();

    await new Promise(r => setTimeout(r, 2000));


  } finally {
    await driver.quit();
  }
})();
