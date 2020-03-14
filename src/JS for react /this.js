// the value of "this" is determined by how a function is called

const person = {
  name: "James",
  walk() {
    console.log("this", this);
  }
};

//"this" refers to the object
// person.walk();

const walk = person.walk;

//this means the value of this in person is bind to the const walk
//const walk is walk() { console.log(this) }
//now value of this is defined
const walked = walk.bind(person);
walked();
