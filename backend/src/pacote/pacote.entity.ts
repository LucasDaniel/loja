import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'pacotes' })
export class PacoteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 200, nullable: false })
  nome: string;

  @Column({ name: 'valor', nullable: false })
  valor: number;

}
