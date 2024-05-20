const { PREFIX } = require('../../config');

module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot || !message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = message.client.commands.get(commandName);

    if (!command) return;

    try {
      const latency = message.client.ws.ping;
      await message.reply(`Pong! Latency: ${latency}ms`);
    } catch (error) {
      console.error(error);
      await message.reply('There was an error while executing this command!');
    }
  },
};