const wordcounter = require("./wordcounter");

describe("I have a wordcounter function", () => {
  test("It should be a single word", () => {
    const words = wordcounter.count("hello");
    expect(words).toBe(1);
  });

  // *TODO* Write a test for when the input given is "The quick brown fox jumps over the lazy dog."

  // *TODO* Write a test for when the input given is "Kia ora rā kōrua!"

  // *TODO* Write a test for when the input given is "Yo!"

  // *TODO* Write a test for when the input given is a empty string

  // *TODO* Write a test for when the input given is a number

  // *TODO* Write a test for when the input given is anything which isn't a defined string

  /* Additional test cases: */

  // *TODO* Write a test for when the input given is a string with just fullstops. Eg "..."

  // *TODO* Write a test for when the input given is a string with just commas. Eg ",,,"

  // *TODO* Write a test for when the input given is a string with just quotes. Eg `""`
});
