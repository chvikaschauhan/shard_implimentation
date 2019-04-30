import "reflect-metadata";
import {student} from "../entity/student";


const insert ={



   
    insert_data(name:string,stream:string,marks:number):student {

      let stu = new student();    
        stu.name = name;
        stu.stream= stream;
        stu.marks= marks;
    
      return stu;
    }
     
 
 }
export default insert ;


