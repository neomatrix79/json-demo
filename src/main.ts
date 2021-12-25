import App from "./App.svelte";
import pkg from "../package.json";
// import user from "./lib/data.json";

const app = new App({
  target: document.body,
  props: {
    pkg: pkg,
    // user: user,
  },
});

export default app;
