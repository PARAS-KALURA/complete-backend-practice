const app = require("./src/app");

app.get("/about", (req, res) => {
    res.send("Hello about")
}  )

app.listen(PORT, () => {
    console.log(`Server ${PORT} is running `);
})