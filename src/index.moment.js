import moment from "moment";

const pre = document.querySelector("pre");

if (!pre) throw new Error("Could not find `pre`");

pre.innerText = `Hello and happy ${moment().day()}`;
