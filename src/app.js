const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
    res.send("Helloo Ji");
} )

app.get("/notes", (req, res) => {
    res.status(200).json({
        message: 'notes fetched successfully',
        notes: notes
    }) 
} )


app.post("/notes", (req, res) => {
    notes.push(req.body);
    
    res.status(201).json({
        message: "note created successfully",
    })

} )

app.delete("/notes/:index", (req, res) => {
         
           const index = req.params.index;

           notes.splice(index,1);

           res.status(200).json({
            message: "Successfully deleted"
           })

} )

app.listen(PORT, () => {
    console.log(`Server ${PORT} is running`);
});

module.exports = app;