import { $ } from "execa";

async function createApp(name) {
  const { stdout } = await $`npx create-next-app@latest ${name}`;
  console.log(stdout);
}

createApp("my-app");
