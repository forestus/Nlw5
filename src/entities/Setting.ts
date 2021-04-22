import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("settings")
export class Setting {
    
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    updated_at: Date;
    
    @UpdateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
