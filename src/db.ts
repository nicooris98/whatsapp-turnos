import { DataSource } from "typeorm"
import { Shift } from "./entities/Shift"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "turnos_consultorio",
  synchronize: true,
  logging: true,
  entities: [Shift],
  subscribers: [],
  migrations: [],
})