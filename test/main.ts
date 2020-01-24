import * as Lib from "../src";

async function start() {
  const container = document.getElementById("main");
  if (!container) return;
  console.warn(Lib);
}

start();
