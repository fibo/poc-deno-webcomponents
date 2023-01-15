export class MyComponent extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        :host button {
          color: white;
          background: black;
        }
      </style>
      <button>My component</button>
    `;
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true),
    );
  }
}
