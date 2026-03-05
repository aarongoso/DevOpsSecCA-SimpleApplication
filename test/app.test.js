const assert = require("assert");

describe("SimpleApplication CI  test", function () {
  it("should run tests successfully in the pipeline", function () {
    assert.strictEqual(1 + 1, 2);
  });
});