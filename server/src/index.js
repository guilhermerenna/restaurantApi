const express = require("express");

const app = express();

const PORT = 3030;

app.get("/api", (req, res) => {
    res.json({message: `howdy ho, bitches! I'm running on port ${PORT}`});
})

app.listen(PORT, () => {
    console.log(`Howdy ho!`);
})