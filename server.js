const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const app = express();

app.use("/static", express.static(path.join(__dirname, "static")));


app.get("/api/small", (req, res) => {
    if (req.headers.authorization) {
        if(parseToken(req.headers.authorization) !== null) res.send();
        else res.status(403).send("Invalid token!");
    }
    else res.status(403).send("No token found!");
})

app.get("/api/medium", (req, res) => {
    if (req.headers.authorization) {
        const token = parseToken(req.headers.authorization);
        if(token["https://pizza0.net/license"] && 
        (token["https://pizza0.net/license"] === "premium" || token["https://pizza0.net/license"] === "corporate"))
        res.send();
        else res.status(400).send("You need a premium or corporate license to order this pizza!");
    }
    else res.status(403).send("No token found!");
})

app.get("/api/large", (req, res) => {
    if (req.headers.authorization) {
        const token = parseToken(req.headers.authorization);
        if(token["https://pizza0.net/license"] && 
        token["https://pizza0.net/license"] === "corporate")
        res.send();
        else res.status(400).send("You need a corporate license to order this pizza!");
    }
    else res.status(403).send("No token found!");
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages", "index.html"));
})

app.listen(process.env.PORT || 8000, () => {
    console.info("Server is running!");
})

function parseToken(authorizationString) {
    const token = authorizationString.substr(7);
    return jwt.decode(token);
}