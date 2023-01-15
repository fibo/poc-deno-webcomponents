import { Handler, serve } from "std/http/server.ts";
import { serveDir } from "std/http/file_server.ts";
import { htmlHeaders } from "_/http/headers.ts";
import { rootDir } from "_/dirs.ts";
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

    case url.pathname.startsWith("/webcomponents"):
      return serveDir(request, {
        fsRoot: rootDir,
      });

    default:
      return new Response("NOT FOUND", { status: 404 });
  }
};

console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });
