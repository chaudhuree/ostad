class Person {
  constructor(fname, lname, age, gender) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.gender = gender;
  }
  sleep() {
    console.log(`${this.fname} is sleeping`);
  }
  eat() {
    console.log(`${this.fname} is eating`);
  }
  //getter
  get firstName() {
    console.log(`${this.fname}`);
  }
  //setter
  set firstName(name) {
    this.fname = name;
  }
  sex() {
    return this.gender;
    //   console.log(this.gender)
  }
  //use method from same class
  getGender() {
    console.log(this.sex());
  }
}

//inheritance
class ProgrammerPerson extends Person {
  constructor(fname, lname, age, gender, language = []) {
    //  super to up value to parents
    super(fname, lname, age, gender);
    this.language = language;
  }
  knownLanguage() {
    this.language?.map((item) => console.log(item));
  }
}
export { Person,ProgrammerPerson };
