// App.jsx
import { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import { Button, Container, TextField, Typography, Box, Divider } from "@mui/material";

function App() {
    const [value, setValue] = useState("");
    const [room, setRoom] = useState("");
    const [socketId, setSocketId] = useState("");
    const [messages, setMessages] = useState([]);
    
    const socket = useMemo(() => io("http://localhost:8000"), []);

    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected with ID:", socket.id);
            setSocketId(socket.id);
        });

        socket.on("welcome", (msg) => {
            console.log("Server:", msg);
        });

        socket.on("receive-message", (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.disconnect();
        };
    }, [socket]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            socket.emit("message", {
                value,
                room: room.trim() || null,
            });
            setValue("");
        }
    };

    const handleJoinRoom = () => {
        if (room.trim()) {
            socket.emit("join-room", room);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Socket.IO Chat App
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                Your Socket ID: {socketId}
            </Typography>

            <TextField fullWidth label="Room" value={room} onChange={(e) => setRoom(e.target.value)} variant="outlined" sx={{ mb: 2 }} />
            <Button variant="outlined" onClick={handleJoinRoom} sx={{ mb: 2 }}>
                Join Room
            </Button>

            <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Message" value={value} onChange={(e) => setValue(e.target.value)} variant="outlined" />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Send
                </Button>
            </form>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" gutterBottom>
                Messages:
            </Typography>
            <Box sx={{ maxHeight: 300, overflowY: "auto" }}>
                {messages.map((msg, index) => (
                    <Box key={index} mb={1}>
                        <Typography variant="body2" color={msg.id === socketId ? "primary" : "textSecondary"}>
                            <strong>{msg.id === socketId ? "You" : msg.id}:</strong> {msg.text}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    );
}

export default App;
