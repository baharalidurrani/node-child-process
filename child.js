try {
  setTimeout(() => {
    console.log("Hello Child Completed");
    process.send({ message: true });
  }, 5000);

  // Child Process won't exit if `process.on message` is implemented in it.
  // process.on("message", ({ message }) => {
  //   console.log("@@@@@@@@@@@@@Parent@@@@@@@@@@@@@", message);
  //   // if (message === "throw") throw new Error("testing");
  // });

  // throw new Error("testing");
} catch (error) {
  // Serializing Error Object
  process.send({
    error: JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error))),
  });
}
