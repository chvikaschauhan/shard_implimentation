import "reflect-metadata";
import {createConnection, getConnection} from "typeorm";
import {student} from "./entity/student" ;



//  create connection with database server
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

   
     
    console.log("connection created with database2");
 

  }).catch(error => console.log(error));

// geting that connection to use in status controller
  const con2= getConnection("conn");


  // export connection reference
  export default con2;

 
  
   
  
  
   


 

  
 
 
 



 
  
