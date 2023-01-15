import { htmlPage } from "_/html/page.ts";
import { html } from "_/html/tag.ts";

const body = html`
<h1>it works</h1>

<my-component></my-component>

<script type="module">
  import { MyComponent } from "/webcomponents/MyComponent.js";

  window.addEventListener('load', () => {
    customElements.define('my-component', MyComponent);
  });
</script>
`;

export const homePage = () =>
  htmlPage({
    body,
  });
