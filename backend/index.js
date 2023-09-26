const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
// app.use(express.json());
app.use(cors({ origin: true }));


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "https://relaxed-melba-900352.netlify.app/",
        methods: ["GET", "POST"]
    }
})
io.on("connection", (socket) => {
    // classic users
    console.log(`User Connected :${socket.id}`);
    socket.on("send-message", (message) => {
        console.log(message);
        io.emit("received-message", message);
    })
    socket.on("disconnect", () => { console.log("User Disconnected") })
});

app.get('/', (req, res) => {
    res.send("Backend server is running ")
})
server.listen(5000, () => {
    console.log("Server running on 5000");
});
