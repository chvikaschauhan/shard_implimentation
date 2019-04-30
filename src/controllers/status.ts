import { Request, Response } from "express";
import {student} from "../entity/student";
import con from "../index";
import con2 from "../index2";
import insert from "./insert";


//get request for insertion
export let insertion = (req: Request, res: Response) => {

    var name=req.query.name;
    var stream =req.query.stream;
    var marks=req.query.marks;

    if(name==null){
      res.send("name cant be null or check spelling of \"name\"")
    }
    else 
     if(stream==null){
      res.send("stream cant be null or check spelling of \"stream\"")

     }else
     if(marks==null)
     {
      res.send("marks cant be null or check spelling of \"marks\"")
     }
     else{
    //find code of fisrt character of name
    var first_char=name.charCodeAt(0);
 
    if ((first_char>64 && first_char<78)||(first_char>96 && first_char<110)){
    // to save data in database1

    var getrepo = con.getRepository(student);
    getrepo.save(insert.insert_data(name,stream,marks));
    res.send("saved in database 1st");
    console.log("data saved in database1")

  }


else{


  // to save data in database2
var getrepo2=con2.getRepository(student);
getrepo2.save(insert.insert_data(name,stream,marks));
res.send("saved in database 2nd");
console.log("data saved in database2")


}
    
}
};


//to get request for data finding
export let search = async(req: Request, res: Response) => {

  var name=req.query.name;
  var first_char=name.charCodeAt(0);
 
  if ((first_char>64 && first_char<78)||(first_char>96 && first_char<110)){
// to search in 1st data base

    var getrepo = con.getRepository(student);
   var stud= await getrepo.findOne({name:name});
   if(stud==null){
     res.send(" name not found")
   }
   else {
   res.send("student id is-"+stud.id+"  found in database 1");
   }
    console.log("searching finished in 1");
   
  }

  else

{

// to search in 2nd data base

  var getrepo = con2.getRepository(student);
 var stud= await getrepo.findOne({name:name});
 if(stud==null){
   res.send(" name not found");
 } 

 else{
 res.send("student id is-"+stud.id+"  found in database 2");
}

 console.log("searching finished in 2");

}

   

  
};

