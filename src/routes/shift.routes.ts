import { Router } from "express"
import { createShift, deleteShift, getShifts, updateShift } from "../controllers/shift.controllers"

const router = Router()

router.post("/shift", createShift)

router.get("/shifts", getShifts)

router.put("/shift/:id", updateShift)

router.delete("/shift/:id", deleteShift)

router.get("/shift/:id", deleteShift)

export default router