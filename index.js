module.exports = function spacify(string) {
  if (typeof string !== "string") throw new TypeError("spacify needs a string");
  return string.split("").join(" ");
};
