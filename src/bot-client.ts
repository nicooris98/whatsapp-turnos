const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

export const botClient = () => {
    const client = new Client({
        authStrategy: new LocalAuth()
    });

    client.on('qr', (qr: any) => {
        qrcode.generate(qr, { small: true });
    });

    client.on('ready', () => {
        console.log('Client is ready!');
    });

    client.on("message", (message: any) => {
        if (message.body === "1") {
            client.sendMessage(message.from, "Hola soy un bot")
        }

        if (message.body === "que onda") {
            client.sendMessage(message.from, "ngrok.com/asdasdas/8080/register")
        }
    })

    client.initialize();
}