import { createServer } from "node:http";
import { createApp } from "./app.js";

const app = createApp();

const server = createServer(app);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});