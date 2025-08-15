function HelloWorld(callback) {
  if (typeof callback === "function") {
    callback("Hello, World!");
  } else {
    throw new Error("Callback must be a function");
  }
}

module.exports = HelloWorld;