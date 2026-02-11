const express = require("express");
const app = express();
const noteModel = require("./models/note.model")



app.use(express.json());


app.post("/notes",  async (req, res) =>  {
     
    const data = req.body; // title, description

     await noteModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note created"
    })

} )


app.get("/notes", async  (req, res) => {

    try {

        const notes = await noteModel.find(); // find returns array every fking time

   res.status(200).json({
    message: "Note fetch successfully",
    notes
   })

    } catch(error) {
        res.status(500).json({
            message: "Server Error"
    });
        
}    
} )


module.exports = app;