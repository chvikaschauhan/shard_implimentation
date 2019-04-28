console.log("starting index");
import "reflect-metadata";
import {createConnection, Connection ,getConnection,getRepository} from "typeorm";
import {student} from "./entity/student" ;

//import insert from "./src/insert";
import { connect } from "http2";


console.log("hello1");



    createConnection({
    name:"conn",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username:"postgres",
    password: "12345",
    database: "test2",
   entities: [
       student
    ],
    synchronize: true,
    logging: false

  }).then(  connection => {

   
     
    console.log("connection created");
 

  }).catch(error => console.log(error));


  const con2= getConnection("conn");


  
  export default con2;

 
  
   
  
  
   


 

  
 
 
 



 
  
