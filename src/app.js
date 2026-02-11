const express = require("express");
const app = express();
const noteModel = require("./models/note.model")



app.use(express.json());

const notes = [];

app.get("/notes", (req, res) => {
    res.status(200).json({
        message: 'notes fetched successfully',
        notes: notes
    })
})


app.post("/notes", (req, res) => {
    notes.push(req.body);

    res.status(201).json({
        message: "note created successfully",
    })

})


app.patch("/notes/:index", (req, res) => {

  const index = req.params.index

  const {title, description} = req.body;

  notes[index].description = description
  notes[index].title = title

  res.status(200).json({
    message: "Updated successfully"
  })

} )

app.delete("/notes/:index", (req, res) => {

    const index = req.params.index;

    notes.splice(index, 1);

    res.status(200).json({
        message: "Successfully deleted"
    })

})

app.listen(3000, () => {
    console.log(`Server is running`);
});

module.exports = app;