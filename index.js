import { fork } from "child_process";

console.log("Hello");
const child = fork("./child", ["custom-argument-at-index-2"]);

// setTimeout(() => child.kill(), 2000);
// setTimeout(() => child.send({ message: "throw" }), 2000);
// child.send({ message: "throw" });

child.on("exit", (code, signal) => {
  console.log("Child on exit,", "code", code, "signal", signal);
});
child.on("message", (message, sendHandle) => {
  if (message.error) console.log("***********Error********", message.error);
  else console.log("Child on message", message, "sendHandle", sendHandle);
});
