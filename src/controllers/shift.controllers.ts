import { Request, Response } from "express"
import { Shift } from "../entities/Shift"

export const createShift = async (req: Request, res: Response) => {
  try {
    const shift = new Shift()

    Object.assign(shift, req.body)

    await shift.save()

    return res.json(shift)
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message })
  }
}

export const getShifts = async (req: Request, res: Response) => {
  try {
    const shifts = await Shift.find()

    return res.json(shifts)
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message })
  }
}

export const updateShift = async (req: Request, res: Response) => {
  try {
    const shift = await Shift.findOne({ where: { id: +req.params.id } })

    if (!shift) return res.status(404).json({ message: "Shift does not exist" })

    await Shift.update({id: +req.params.id}, req.body)

    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message })
  }
}

export const deleteShift = async (req: Request, res: Response) => {
  try {
    const shift = await Shift.findOne({ where: { id: +req.params.id } })

    if (!shift) return res.status(404).json({ message: "Shift does not exist" })

    await Shift.softRemove(shift)

    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message })
  }
}

export const getShift = async (req: Request, res: Response) => {
  try {
    const shift = await Shift.find({where: {id: +req.params.id}})

    if (!shift) return res.status(404).json({ message: "Shift does not exist" })
    return res.json(shift)
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message })
  }
}