import "dotenv/config";
import { connectDB } from "./src/config/connect.js";
import { PORT } from "./src/config/config.js";
import fastify from "fastify";
import fastifySocketIO from "fastify-socket.io";
import { registerRoute } from "./src/routes/index.js";

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  const app = fastify();

  app.register(fastifySocketIO, {
    cors: {
      origin: "*",
    },
    pingInterval: 10000,
    pingTimeout: 5000,
    transports: ["websocket"],
  });

  await registerRoute(app);

  app.listen({ port: PORT, host: "0.0.0.0" }, (err, addr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Green Basket running `);
    }
  });

  app.ready().then(() => {
    app.io.on("connection", (socket) => {
      console.log("A User Connected");

      socket.on("joinRoom", (orderId) => {
        socket.join(orderId);
        console.log(`User Joined Room ${orderId}`);
      });
      socket.on("disconnected", () => {
        console.log("User Disconnected");
      });
    });
  });
};
start();
