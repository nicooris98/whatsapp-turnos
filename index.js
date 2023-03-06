const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', (message) => {
    console.log('Client is ready!');
    if(message.body === "hola mundo") {
      client.sendMessage(message.from, "Hola soy un bot")
    }
});

client.initialize();
