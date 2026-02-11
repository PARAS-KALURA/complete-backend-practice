const express = require("express");
const app = express();
const noteModel = require("./models/note.model")



app.use(express.json());


app.post("/notes", async (req, res) => {
  try {

    const { title, description } = req.body;

    const note = await noteModel.create({
      title,
      description
    });

    return res.status(201).json({
      message: "Note created",
      note
    });

  } catch (error) {

    return res.status(500).json({
      message: "Server Error"
    });

  }
});


app.get("/notes", async (req, res) => {

    try {
        //.findone() for if u want perticular obj
        const notes = await noteModel.find(); // find returns array every fking time

        res.status(200).json({
            message: "Note fetch successfully",
            notes
        })

    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        });

    }
})

app.delete("/notes/:id", async (req, res) => {


    try {
        const id = req.params.id; // const { id } = req.params;


        const deletedNote = await noteModel.findOneAndDelete({
            _id: id
        })


        if (!deletedNote) {
      return res.status(404).json({
        message: "Note not found"
      });
    }
        
        res.status(200).json({
            message: 'Deleted Successfully'
        })

    }

    catch (error) {
        res.status(500).json({
            message: " Server Error"
        })
    }

})


app.patch("/notes/:id", async (req, res) => {

    const id = req.params.id;
    const description = req.body.description
    const title = req.body.title

    await noteModel.findOneAndUpdate({_id:id}, {description: description, title: title})

    res.status(201).json({
        message: "Note Updated"
    })

} )


module.exports = app;