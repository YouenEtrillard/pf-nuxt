const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/cv', { waitUntil: 'networkidle2' });
  await page.pdf({
    scale: 0.65,
    path: 'cv/generated/resume.pdf',
    format: 'A4'
  });

  await browser.close();
})();
