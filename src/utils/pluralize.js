export default function(config) {
  return function(number) {
    if (number === 0) {
      return config["0"];
    } else if (
      number === 1 ||
      (number > 20 && number.toString().slice(-1) === "1")
    ) {
      return config["1"];
    } else if (number < 5 || (number > 21 && number.toString().slice(-1) < 5)) {
      return config["2-4"];
    } else {
      return config["many"];
    }
  };
}
