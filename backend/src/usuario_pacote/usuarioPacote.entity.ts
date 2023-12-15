import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity({ name: 'usuarios_pacotes' })
  export class UsuarioPacoteEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ name: 'usuario_id', length: 255, nullable: false })
    usuario_id: string;

    @Column({ name: 'pacote_id', length: 255, nullable: false })
    pacote_id: string;

  }
  