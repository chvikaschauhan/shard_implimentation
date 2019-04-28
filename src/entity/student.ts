import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity()
 export class student{


     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     name: string;
     
     @Column()
     stream: string;

     @Column()
     marks: number;

    

 }
