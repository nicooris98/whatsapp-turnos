import { Request, Response } from "express"
import { Shift } from "../entities/Shift"

export const createShift = async (req: Request, res: Response) => {
  try {
    const shift = new Shift()

    shift.date = req.body.date
    shift.schedule = req.body.schedule
    shift.firstName = req.body.firstName
    shift.lastName = req.body.lastName
    shift.observation = req.body.observation
    shift.dni = req.body.dni
    shift.social = req.body.social

    await shift.save()

    return res.json(shift)
  } catch (error) {
    if(error instanceof Error)
    return res.status(500).json({message: error.message})
  }
}

export const getShifts = async (req: Request, res: Response) => {
  try {
    const shifts = await Shift.find()

    return res.json(shifts)
  } catch (error) {
    if(error instanceof Error)
    return res.status(500).json({message: error.message})
  }
}