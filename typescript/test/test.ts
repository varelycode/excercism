interface Person {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}
class OtherPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHi = (): string => `hello ${this.firstName} ${this.lastName}`;
  }
}
export default OtherPerson;
