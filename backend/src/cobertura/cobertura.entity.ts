import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'coberturas' })
export class CoberturaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'cep', length: 10, nullable: false })
  cep: string;

}
