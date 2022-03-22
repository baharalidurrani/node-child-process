import { fork } from "child_process";

console.log("Hello");
const child = fork("./child");
setTimeout(() => child.kill(), 2000);

child.on("close", (code, signal) => {
  console.log("Child on close,", "code", code, "signal", signal);
});
child.on("disconnect", () => {
  console.log("Child on disconnect");
});
child.on("error", (err) => {
  console.log("**************************Error**************************");
  console.log("Child on error", err);
});
child.on("exit", (code, signal) => {
  console.log("Child on exit,", "code", code, "signal", signal);
});
child.on("message", (message, sendHandle) => {
  console.log("Child on message", message, "sendHandle", sendHandle);
});
child.on("spawn", () => {
  console.log("Child on spawn");
});
