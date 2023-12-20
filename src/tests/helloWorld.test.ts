import { hello } from "./helloWorld";

describe("Teste hello function", () => {
  it("should return Hello World!", () => {
    const result = hello();

    expect(result).toBe("Hello World");
  });
});
