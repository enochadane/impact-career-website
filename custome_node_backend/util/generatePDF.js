const puppeteer = require("puppeteer");
const fs = require("fs");

const generatePDF = async (html) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  const pdf = await page.pdf({ format: "A4" });
  await browser.close();

  // Save the PDF file to disk
  const filename = `file_${new Date().getTime()}.pdf`;
  const filePath = `./pdfs/${filename}`;
  fs.writeFileSync(filePath, pdf);

  return filePath;
};

module.exports = generatePDF;
