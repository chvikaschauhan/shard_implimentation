//import {createConnection} from "typeorm";
import "reflect-metadata";
import {student} from "../entity/student";

//import conn from "../index";



console.log("inside ins");

const insert ={



   
    photo(name:string,stream:string,marks:number):student {
        let stu = new student();    
  
    stu.name = name;
    stu.stream= stream;
    stu.marks= marks;
    
    return stu;
    }
     
 
 }
export default insert ;


