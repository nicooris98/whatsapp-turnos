import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity } from "typeorm"

@Entity({
  name: "shifts",
})
export class Shift extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column("date")
  date: Date

  @Column("time")
  schedule: Date

  @Column("text")
  firstName: string

  @Column("text")
  lastName: string

  @Column("text")
  dni: string

  @Column("text")
  social: string

  @Column("text", { default: null })
  observation: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @DeleteDateColumn()
  deletedAt: Date
}