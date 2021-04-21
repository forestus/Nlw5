import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn} from "typeorm";

@Entity("settings")
export class Setting {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    updated_at: Date;
    
    @UpdateDateColumn()
    created_at: Date;
}
