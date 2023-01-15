import { htmlPage } from "_/html/page.ts";
import { html } from "_/html/tag.ts";

const body = html`
<h1>it works</h1>
`;

export const homePage = () =>
  htmlPage({
    body,
  });
