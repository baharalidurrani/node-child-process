setTimeout(() => {
  console.log("Hello Child Completed");
}, 5000);

process.send({ message: true });
throw new Error("testing");
