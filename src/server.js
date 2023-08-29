import http from "http";
import WebSoket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log('Listening on http://localhost');

//http서버
const server = http.createServer(app);
//WebSoket서버
const wss = new WebSoket.Server({server});


wss.on("connection", (soket) =>{
    //console.log(soket);
    console.log("브라우저 연결됨");

    soket.on("close", () => {
        console.log("브라우저 연결 끊김");
    });
    soket.on("message", (message) => {
        console.log(message.toString('utf8'));
    })
    
    soket.send("서버");
    
} );

server.listen(3000, handleListen);