import { Shift } from "../entities/Shift";

export const shiftFindAll = async () => {
  try {
    const shifts = await Shift.find()

    return shifts
  } catch (error) {
    console.log(error)
  }
}