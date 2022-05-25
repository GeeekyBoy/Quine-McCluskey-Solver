export default function (input, index, replacement) {
  if (index >= input.length) {
    return input.valueOf();
  }
  return input.substring(0, index) + replacement + input.substring(index + 1);
};