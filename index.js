const { Client, GatewayIntentBits, Partials, ComponentType } = require('discord.js');
const CLIENT = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildVoiceStates], partials: [Partials.Message, Partials.Channel, Partials.Reaction], sweepers: { messages: { lifetime: 60, interval: 300}} });
const FS = require('fs');
const CONFIGURATION = require('./data/jsons/config.json');

CLIENT.setMaxListeners(0);
process.on("unhandledRejection", err => {
    console.error("Uncaught Promise Error: ", err);
});
process.on('uncaughtException', err => { console.error(err) } );

const handlers = FS.readdirSync(`./handlers/`).filter((f) => f.endsWith('.js'));
handlers.forEach((handler) => {
    require(`./handlers/${handler}`)(CLIENT, FS);
});

CLIENT.login(CONFIGURATION.token);