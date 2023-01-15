import { html } from "_/html/tag.ts";

type HtmlPage = (arg: { body: string }) => string;

export const htmlPage: HtmlPage = ({ body }) =>
  html`
<!DOCTYPE>
<html>
  <body>${body}</body>
</html>`;
