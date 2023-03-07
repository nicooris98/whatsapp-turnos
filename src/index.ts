import "reflect-metadata"

import app from "./app"
import { botClient } from "./bot-client"
import { getShifts } from "./controllers/shift.controllers"
import { AppDataSource } from "./db"

async function main() {

    try {
        await AppDataSource.initialize()

        console.log("Database connected")

        app.listen(3030)

        console.log("Server on port 3030")

        //BOT WHATSAPP
        botClient()
    } catch (error) {
        console.log(error)
    }
}

main()