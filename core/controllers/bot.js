const config = require('../../configs/config');
const Telegraf = require('telegraf')
const fs = require('fs');
//db
const db = require('../../db/pool');
//tests
var pdf2table = require('pdf2table')
var path = require('path');

const bot = new Telegraf(config.keys.TELEGRAM_BOT_API_KEY);

let testInfo;
//pdf parser - test
const parsePdf = async (context) => {
  
  await fs.readFile(path.join(__dirname, '../../pdf-tests/tests.pdf'), function (err, buffer) {
    if (err) return console.log(err);

    pdf2table.parse(buffer, function (err, rows, rowsdebug) {
        if(err) return console.log(err);
        console.log(rows);
        //testInfo = rows
        context.telegram.sendMessage(context.message.from.id, `hi i parsed ${rows[0]}`)
        .then(data => console.log(data))
        .catch(err => console.error(err))
    });
  });
 
}


bot.hears('parse', async (ctx) => {
  await parsePdf(ctx);
  ctx.reply('parsing')
})


bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))


module.exports = bot.launch();