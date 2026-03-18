const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'oushiz.aternos.me', // Заміни на свою адресу сервера
        port: 64164,
        username: 'AFK_Bot',
        version: false
    });

    bot.on('spawn', () => {
        console.log('Бот зайшов! Починаю стрибати...');
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 60000); // Стрибок кожну хвилину
    });

    bot.on('end', () => {
        console.log('З’єднання розірвано. Перезапуск через 30 сек...');
        setTimeout(createBot, 30000);
    });

    bot.on('error', (err) => console.log('Помилка бота:', err));
}

createBot();
