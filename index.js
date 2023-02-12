const TelegramBot = require("node-telegram-bot-api");
const cron = require('node-cron')
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });


const answers = ["Да", "Нет"];

const getRandomAnswer = (list) => {
  return list[Math.floor(Math.random() * list.length)];
}



cron.schedule('0 9 * * 1-5', async () => {
  await bot.sendMessage('@proebat_uchebu', getRandomAnswer(answers))
    .then(() => console.log('send'))
    .catch(() => console.log('e'));
}, {
  timezone: 'Asia/Krasnoyarsk'
});
