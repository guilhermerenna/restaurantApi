const express = require("express");

const app = express();

const PORT = 3030;

app.get("/", (req, res) => {
    res.json({message: `Hello! I'm running on port ${PORT}`});
})

app.listen(PORT, () => {
    console.log(`Hello console!`);
})
