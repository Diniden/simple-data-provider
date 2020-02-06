import * as Lib from "../src";

async function start() {
  const container = document.getElementById("main");
  if (!container) return;
  console.warn(Lib);
  Object.assign(window as any, Lib);

  (window as any).data = {};
}

start();
