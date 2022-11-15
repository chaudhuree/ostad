import { Person, ProgrammerPerson } from "./classes.js";

const chaudhuree = new Person("sOhan", "chaudhuree", 27, "male");
chaudhuree.firstName = "kabir";

chaudhuree.firstName;
chaudhuree.getGender();

//inharitance
const sOhan = new ProgrammerPerson("shahriar", "kabir", 28, "male", [
  "js",
  "python",
]);

sOhan.knownLanguage();
