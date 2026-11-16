import type { IncomingMessage, ServerResponse } from "node:http";

export function createApp() {
  return (
    req: IncomingMessage,
    res: ServerResponse,
  ): void => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify({
        message: "Durable Engine is running",
      }),
    );
  };
}