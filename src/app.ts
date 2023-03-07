import express from "express"
import morgan from "morgan"
import cors from "cors"
import shifRoutes from "./routes/shift.routes"

const app = express()

app.use(morgan("dev"))
app.use(cors())

app.use(express.json())

app.use(shifRoutes)

export default app