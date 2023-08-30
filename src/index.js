import { getDay } from "./day.js";

const pre = document.querySelector("pre");

if (!pre) throw new Error("Could not find `pre`");

pre.innerText = `Hello and happy ${getDay()}`;
