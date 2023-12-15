import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'servicos' })
export class ServicoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 200, nullable: false })
  nome: string;

  @Column({ name: 'velocidade', length: 10, nullable: false })
  velocidade: string;

  @Column({ name: 'valor', nullable: false })
  valor: number;

}
