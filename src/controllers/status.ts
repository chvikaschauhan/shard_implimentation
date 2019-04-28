import { Request, Response } from "express";
import {student} from "../entity/student";
import con from "../index";
import con2 from "../index2";
import insert from "./insert";

export let hi = (req: Request, res: Response) => {
    var name=req.query.name;
    var stream =req.query.stream;
    var marks=req.query.marks;
   
if (name.charCodeAt(0)<78){


    var getrepo = con.getRepository(student);
    getrepo.save(insert.photo(name,stream,marks));
    res.send("savrd in 1st");
}
else{
var getrepo2=con2.getRepository(student);
getrepo2.save(insert.photo(name,stream,marks));
res.send("savrd in 2nd");
}
    
  res.send("hello");
};

export let hello = async(req: Request, res: Response) => {

  var name=req.query.name;
  if (name.charCodeAt(0)<78){


    var getrepo = con.getRepository(student);
   var stud= await getrepo.findOne({name:name});

    res.send("student id is-"+stud.id+"  found in dtabase 1");
    
}
else

{


  var getrepo = con2.getRepository(student);
 var stud= await getrepo.findOne({name:name});

  res.send("student id is-"+stud.id+"  found in dtabase 2");
  
}

   
  
};

export let awesome = (req: Request, res: Response) => {
  res.send("EVERYTHING IS AWESOME");
};