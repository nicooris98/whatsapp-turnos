import { Router } from "express"
import { createShift, getShifts } from "../controllers/shift.controllers"

const router = Router()

router.post("/shift", createShift)

router.get("/shifts", getShifts)

export default router