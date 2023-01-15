import { Handler, serve } from "std/http/server.ts";
import { htmlHeaders } from "_/http/headers.ts";
import { homePage } from "_/webapp/pages.ts";

const port = 8080;

const handler: Handler = (request) => {
  const url = new URL(request.url);
  switch (true) {
    case url.pathname === "/":
      return new Response(homePage(), {
        headers: htmlHeaders,
        status: 200,
      });
    default:
      return new Response("NOT FOUND", { status: 404 });
  }
};

console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });
