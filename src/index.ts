import "reflect-metadata"

import app from "./app"
import { botClient } from "./bot-client"
import { getShifts } from "./controllers/shift.controllers"
import { AppDataSource } from "./db"
import { shiftFindAll } from "./services/shift.service"

async function main() {

    try {
        await AppDataSource.initialize()

        console.log("Database connected")

        app.listen(3030)

        console.log("Server on port 3030")

        const shifts = await shiftFindAll()
        console.log(shifts)

        //BOT WHATSAPP
        botClient()
    } catch (error) {
        console.log(error)
    }
}

main()