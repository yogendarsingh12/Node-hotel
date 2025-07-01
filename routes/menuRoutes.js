const express=require('express');
const router= express.Router();
const Menuitem = require('./../models/Menuitem');




router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newMenuitem = new Menuitem(data);
    const saved = await newMenuitem.save()
    res.status(200).json(saved)
    console.log("menu items are saved")

  } catch (error) {
    console.log(error)
    res.status(500).json({ "error": "internal error could not store menuitems" })

  }

})

router.get("/", async (req, res) => {
  try {
    const data = await Menuitem.find();
    res.status(200).json(data)
    console.log("all menu items are fatched");

  } catch (error) {
    console.log(error)
    res.status(500).json({ "error": "we could not get all menu itme due to intarnal error" });

  }
})

module.exports=router;
