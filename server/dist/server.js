import http from 'http';
import { Server } from 'socket.io';
import app from './config/express.config.js';
import enviroment from './config/enviroment.config.js';
const server = http.createServer(app);
const port = enviroment.portNumber;
const host = '0.0.0.0';
const io = new Server(server, {
    cors: {
        origin: [
            "http://localhost:3000",
            "http://localhost:5173",
            "https://eventra-tawny.vercel.app",
        ],
        methods: ["GET", "POST"],
        credentials: true
    },
});
io.on("connection", (socket) => {
    console.log("Client connected", socket.id);
    socket.on("join-event", (eventId) => {
        socket.join(eventId);
        console.log(`Socket ${socket.id} joined event room: ${eventId}`);
    });
    socket.on("leave-event", (eventId) => {
        socket.leave(eventId);
        console.log(`Socket ${socket.id} left event room: ${eventId}`);
    });
    socket.on("message-sent", (data) => {
        console.log("Message received:", data);
        if (data.eventId) {
            io.to(data.eventId).emit("update-chat");
        }
        else {
            io.emit("update-chat");
        }
    });
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});
server.listen(port, host, () => {
    console.log(`Server is listening on PORT: ${port}`);
});
server.on("error", (error) => {
    console.log(error.message);
});
//# sourceMappingURL=server.js.map