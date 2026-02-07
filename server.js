const expresss = require('express');
const app = expresss();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello ji");
} )

app.listen(PORT, () => {
    console.log(`Server ${PORT} is running`)
})