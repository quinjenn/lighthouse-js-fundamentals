const chai = require("chai");
const assert = chai.assert;

const nameInverter = require("../nameInverter");

describe("nameInverter", function () {
  // 1. return an empty string when passed an empty string
  it("should return an empty string when passed an empty string", function () {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  // 2. return a single name when passed a single name
  it("should return a single name when passed a single name", function () {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
});

// 3. return a single name when passed a single name with extra spaces
it("should return a single name when passed a single name", function () {
  const inputName = "  name  ";
  const expectedOutput = "name";
  assert.equal(nameInverter(inputName), expectedOutput);
});

// 4. return a last-name, first-name when passed a first and last-name
it("should return a last-name, first-name when passed a first and last-name", function () {
  const inputName = "  firstName lastName  ";
  const expectedOutput = "lastName, firstName";
  assert.equal(nameInverter(inputName), expectedOutput);
});

// 5. Stretch: return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace)
it("should return a last-name, first-name when passed a first and last-name with extra spaces", function () {
  const inputName = "  firstName  lastName  ";
  const expectedOutput = "lastName, firstName";
  assert.equal(nameInverter(inputName), expectedOutput);
});

// 6. return an empty string when passed a single honorific
it("should return an empty string when passed a single honorific", function () {
  const inputName = "  Mr.  ";
  const expectedOutput = "";
  assert.equal(nameInverter(inputName), expectedOutput);
});

// 7. return honorific first-name when passed honorific first-name
it("should return an honorific first-name when passed honorific first-name", function () {
  const inputName = " Mr. firstName ";
  const expectedOutput = "Mr. firstName";
  assert.equal(nameInverter(inputName), expectedOutput);
});

// 8. return a honorific last-name, first-name when passed honorific first-name last-name
it("should return a honorific last-name, first-name when passed honorific first-name last-name", function () {
  const inputName = " Mr. firstName lastName ";
  const expectedOutput = "Mr. lastName, firstName";
  assert.equal(nameInverter(inputName), expectedOutput);
});

// 9. return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words
it("should return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces", function () {
  const inputName = "  Mr.  firstName  lastName  ";
  const expectedOutput = "Mr. lastName, firstName";
  assert.equal(nameInverter(inputName), expectedOutput);
});

// 10. throw an error when name is undefined
it("should throw an error when input name is undefined", function () {
  const inputName = undefined;
  assert.throws(
    () => {
      nameInverter(inputName);
    },
    Error,
    "Input name is undefined"
  );
});
