"use strict"
const express = require("express"),
      router = require("./routes/routes.js"),
      host ="0.0.0.0";
      
const port = process.env.PORT || 8080;

const app = express();





app.use("/public", express.static("public"));

app.set("views", "./templates");
app.set("view engine", "ejs");

app.use("/", router);


let serverCallback = () => {
    console.log(
        `Server Running On Host: ${ host }:${ port }`
    );
};


app.listen(port, serverCallback);
