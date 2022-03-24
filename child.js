try {
  setTimeout(() => {
    console.log("Hello Child Completed");
    process.send({ message: true });
  }, 5000);

  // throw new Error("testing");
} catch (error) {
  // Serializing Error Object
  process.send({
    error: JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error))),
  });
}
