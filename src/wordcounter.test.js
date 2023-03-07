const wordcounter = require("./wordcounter");

describe("I have a wordcounter function", () => {
  test("It should be a single word", () => {
    const words = wordcounter.count("hello");
    expect(words).toBe(1);
  });

  // *TODO* Write a test for when the input given is "The quick brown fox jumps over the lazy dog."
  test("When input given is 'The quick brown fox jumps over the lazy dog.'", () => {
    const words = wordcounter.count("The quick brown fox jumps over the lazy dog.");
    expect(words).toBe(9);
  });

  // *TODO* Write a test for when the input given is "Kia ora rā kōrua!"
  test("When input given is 'Kia ora rā kōrua!'", () => {
    const words = wordcounter.count("Kia ora rā kōrua!");
    expect(words).toBe(4);
  });

  // *TODO* Write a test for when the input given is "Yo!"
  test("When input given is 'Yo!'", () => {
    const words = wordcounter.count("Yo!");
    expect(words).toBe(1);
  });

  // *TODO* Write a test for when the input given is a empty string
  test("When it's an empty string", () => {
    const words = wordcounter.count("");
    expect(words).toBe(false);
  });

  // *TODO* Write a test for when the input given is a number
  test("When input given is a number rejects it", async () => {
    const words = wordcounter.count(5);
    expect(words).toBe(false);
  });

  // *TODO* Write a test for when the input given is anything which isn't a defined string
  test("When input given is a number rejects it", async () => {
    const words = wordcounter.count("");
    expect(words).toBe(false);
  });


  /* Additional test cases: */

  // *TODO* Write a test for when the input given is a string with just fullstops. Eg "..."
  test("When input given is a number rejects it", async () => {
    const words = wordcounter.count("...");
    expect(words).toBe(false);
  });

  // *TODO* Write a test for when the input given is a string with just commas. Eg ",,,"
  test("When input given is a number rejects it", async () => {
    const words = wordcounter.count(",,,");
    expect(words).toBe(false);
  });

  // *TODO* Write a test for when the input given is a string with just quotes. Eg `""`
  test("When input given is a number rejects it", async () => {
    const words = wordcounter.count(`""`);
    expect(words).toBe(false);
  });
});
