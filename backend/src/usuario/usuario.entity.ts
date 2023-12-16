import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'usuarios' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'cpf', length: 15, nullable: false })
  cpf: string;

  @Column({ name: 'rg', length: 11, nullable: false })
  rg: string;

  @Column({ name: 'data_nascimento', length: 10, nullable: false })
  data_nascimento: string;

  @Column({ name: 'telefone', length: 15, nullable: false })
  telefone: string;

  @Column({ name: 'telefone_secundario', length: 15 })
  telefone_secundario: string;

  @Column({ name: 'email', length: 200, nullable: false })
  email: string;

  @Column({ name: 'cep', length: 10, nullable: false })
  cep: string;

  @Column({ name: 'endereco', length: 100, nullable: false })
  endereco: string;

  @Column({ name: 'bairro', length: 100, nullable: false })
  bairro: string;

  @Column({ name: 'numero', nullable: false })
  numero: number;

  @Column({ name: 'complemento', length: 100 })
  complemento: string;

  @Column({ name: 'referencia', length: 100 })
  referencia: string;

  @Column({ name: 'nome_pai', length: 100 })
  nome_pai: string;

  @Column({ name: 'nome_mae', length: 100 })
  nome_mae: string;

  @Column({ name: 'estado_civil', length: 14 })
  estado_civil: string;

  @Column({ name: 'genero', length: 100 })
  genero: string;

  @Column({ name: 'nacionalidade', length: 50 })
  nacionalidade: string;

  @Column({ name: 'profissao', length: 50 })
  profissao: string;

  @Column({ name: 'vendedor', length: 100, nullable: false })
  vendedor: string;

  @Column({ name: 'dia_vencimento', nullable: false })
  dia_vencimento: number;

  @Column({ name: 'observacao', length: 200 })
  observacao: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
