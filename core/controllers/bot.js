const config = require('../../configs/config');
const Telegraf = require('telegraf')
const fs = require('fs');
//tests
var pdf2table = require('pdf2table')
var path = require('path');

const bot = new Telegraf(config.keys.TELEGRAM_BOT_API_KEY);


//pdf parser - test
const testParse = () => {
  console.log(path.join(__dirname, '../../pdf-tests/tests.pdf'));
  
  fs.readFile(path.join(__dirname, '../../pdf-tests/tests.pdf'), function (err, buffer) {
    if (err) return console.log(err);

    pdf2table.parse(buffer, function (err, rows, rowsdebug) {
        if(err) return console.log(err);
        console.log(rows);
    });
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