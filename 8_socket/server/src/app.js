// server.js
import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";

const PORT = 8000;
const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true,
    },
});

io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);
    socket.on("join-room", (room) => {
        socket.join(room);
        console.log(`User ${socket.id} joined room ${room}`);
    });

    socket.on("message", (data) => {
        const { value, room } = data;
        const message = { id: socket.id, text: value };

        if (room) {
            io.to(room).emit("receive-message", message);
        } else {
            io.emit("receive-message", message);
        }
    });

    // On client disconnect
    socket.on("disconnect", () => {
        console.log("User Disconnected:", socket.id);
    });
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
