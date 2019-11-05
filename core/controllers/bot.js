const config = require('../../configs/config');
const Telegraf = require('telegraf')


const bot = new Telegraf(config.keys.TELEGRAM_BOT_API_KEY);

const PDFParser = require("pdf2json");
let fs = require('fs');

//pdf parser - test
const testParse = () => {
 
  let pdfParser = new PDFParser();
  pdfParser.loadPDF("../../pdf-tests/MNG-1409030-051119-1958-200.pdf");
  pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
  pdfParser.on("pdfParser_dataReady", pdfData => {
   console.log('DATA : : ', pdfData);
  });

 
}


bot.hears('parse', (ctx) => {
  ctx.reply('parsing')
  testParse();
})
//

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))



bot.launch()