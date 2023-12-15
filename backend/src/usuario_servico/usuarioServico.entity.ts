import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity({ name: 'usuarios_servicos' })
  export class UsuarioServicoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ name: 'usuario_id', length: 255, nullable: false })
    usuario_id: string;

    @Column({ name: 'servico_id', length: 255, nullable: false })
    servico_id: string;

  }
  