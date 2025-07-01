const express=require('express');
const router=express.Router();
const Person = require('./../models/Person');


router.post('/', async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data); // FIXED
    const savedPerson = await newPerson.save();


    res.status(201).json(savedPerson); 
    console.log("Data saved:", savedPerson);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fatched")
    res.status(200).json(data)

  } catch (error) {
    console.log("ops we get an error ")
  }
})


//let create dynamic api 

router.get("/:workType", async(req, res) => {
  try {
    const worktype = req.params.workType;
    if (worktype == 'chef' || worktype == 'manager' || worktype == 'waiter') {
      const response=await Person.find({name:worktype});
      console.log("response fatched")
      res.status(200).json(response);
    }
    else{
      res.status(400).json({"error":"invalid work type"})
    }

  } catch (error) {
    console.log(error)
    res.status(400).json({"error":"invalid work type"})
  }


})

// lets Update a record

router.put('/:id',async(req,res)=>{
    try {
        const personid=req.params.id;//extract the id
        const updatedpersondata=req.body;// get the person updated data
        const response= await Person.findByIdAndUpdate(personid,updatedpersondata,{
            new:true,  // return the updated document
            runValidators:true, //run mongoose validation
        });
        console.log("data updated");
        res.status(200).json(response);

        if(!response){
            res.status(404).json({error:"Person Not Found"})
        }
    } catch (error) {
        console.log("ops couldnt updated person data due to internal error");
        res.status(500).json({"error":"internal error occured"});
        
    }

})

// lets delete the data 

router.delete('/:id',async(req,res)=>{
    try {
        const personid=req.params.id

        const response=await Person.findByIdAndDelete(personid)
        console.log("perosn successfully deleted");
        res.status(200).json({msg:"Person Deleted"});
        if(!response){
            res.status(404).json({error:"Person not Found"});
        }
        
    } catch (error) {
        console.log("ops  person could not deleted ");
        res.status(500).json({error:"internal error"})
        
    }

})



module.exports=router;