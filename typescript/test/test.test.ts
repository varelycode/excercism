import OtherPerson from "./test";
import Person from "./test";

describe("test()", () => {
  const words = new OtherPerson("Jamie", "Adams");

  it("Can Create a New class with names", () => {
    const expectedCounts = new Map(Object.entries({ word: 1 }));
    expect(words.firstName).toEqual("Jamie");
    expect(words.lastName).toEqual("Adams");
  });
});
