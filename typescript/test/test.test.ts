import OtherPerson from "./test";
import Person from "./test";

describe("test()", () => {
  it("Can Create a New class with names", () => {
    const person = new OtherPerson("Jamie", "Adams");
    expect(person.firstName).toEqual("Jamie");
    expect(person.lastName).toEqual("Adams");
  });
  it("Can do partial confirm to OtherPerson", () => {
    const otherPerson: Partial<OtherPerson> = {
      firstName: "Jamie",
      lastName: "Adams",
    };
    expect(otherPerson.sayHi).toEqual(undefined);
  });
});
