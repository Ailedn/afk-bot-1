const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
	host: 'LaughPieceNpGg.aternos.me',
	port: 25565,
	username: 'Realisticly',
	password: 'Aiden123',

})

bot.on('chat', () => {
  bot.chat('your_message')
})



